"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { CiSearch } from "react-icons/ci";
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors, closestCenter } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { Article } from "@/lib/utils/types";
import ArticleItem from "@/components/articles/ArticleItem";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 9;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data: articlesData, error } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (articlesData) {
      setArticles(articlesData);
    }
  }, [articlesData]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setArticles((articles) => {
      const originalPos = articles.findIndex((article) => article.id === active.id);
      const newPos = articles.findIndex((article) => article.id === over.id);

      return arrayMove(articles, originalPos, newPos);
    });
  };

  if (error) return <div className="text-red-500 text-center">Failed to load data. Please try again later.</div>;
  if (!articlesData) return <div className="text-gray-500 text-center">Loading articles...</div>;

  return (
    <section className="container mx-auto px-5 py-10">
      {/* Search and Pagination */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
        {/* Search Bar */}
        <div className="flex items-center w-full md:w-1/2 bg-gray-100 border border-gray-300 rounded-lg p-3 shadow-sm">
          <CiSearch className="text-gray-500 mr-3" size={24} />
          <input
            type="text"
            placeholder="Search articles by title..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Pagination */}
        <div className="mt-6 md:mt-0">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  disabled={currentPage === 1}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      {/* Articles Grid with Drag-and-Drop */}
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentArticles.map((article) => (
            <DraggableArticleItem key={article.id} article={article} />
          ))}
        </div>
      </DndContext>
    </section>
  );
};

const DraggableArticleItem = ({ article }: { article: Article }) => {
  const { id } = article;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transition,
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition duration-200"
    >
      <ArticleItem article={article} />
    </div>
  );
};

export default ArticlesPage;
