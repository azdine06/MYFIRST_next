"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { CiSearch } from "react-icons/ci";
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors, closestCenter } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { Article } from "@/utils/types";
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

const fetcher = (url) => fetch(url).then((res) => res.json());

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data: articlesData, error } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (articlesData) {
      setArticles(articlesData);
    }
  }, [articlesData]);

  const handleSearchChange = (e) => {
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

  const handleDragEnd = (event : any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setArticles((articles) => {
      const originalPos = articles.findIndex((article) => article.id === active.id);
      const newPos = articles.findIndex((article) => article.id === over.id);

      return arrayMove(articles, originalPos, newPos);
    });
  };

  if (error) return <div>Failed to load</div>;
  if (!articlesData) return <div>Loading...</div>;

  return (
    <section className="container m-auto px-5">
      <div className="flex w-full p-4 justify-between">
        <div className="flex w-80 items-center mb-4 border border-gray-300 rounded p-2">
          <CiSearch className="text-gray-500 mr-2" size={24} />
          <input
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="flex-1 p-2 outline-none"
          />
        </div>
      
        <div className="flex items-center">
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

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="grid gap-x-8 gap-y-4 grid-cols-3">
          {currentArticles.map((article) => (
            <DraggableArticleItem key={article.id} article={article} />
          ))}
        </div>
      </DndContext>
    </section>
  );
};

const DraggableArticleItem = ({ article }: any) => {
  const { id, title } = article;
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
    >
      <ArticleItem article={article} />
    </div>
  );
};

export default ArticlesPage;
