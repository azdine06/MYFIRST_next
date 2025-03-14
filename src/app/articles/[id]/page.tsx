// [] cela veux dire que ce fild est dynamique
// [] cela veux dire que ce champ est dynamique
import { Article } from "@/lib/utils/types";
import React from "react";

interface SingleArticlePgeProps {
  params: { id: string };
}

const SingleArticlePge = async ({ params }: SingleArticlePgeProps) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }

  const article: Article = await response.json();
  console.log(params.id);
  return (
    <section className="min-h-screen container mx-auto px-5 py-12 md:w-2/3">
      <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-200">
        {/* Article Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {article.title}
        </h1>

        {/* Article Metadata */}
        <div className="text-sm text-gray-500 mb-6">
          Published on <span className="font-medium">1 January 2024</span>
        </div>

        {/* Article Content */}
        <p className="text-gray-700 leading-relaxed">{article.body}</p>
      </div>
    </section>
  );
};

export default SingleArticlePge;

//pour écrire qerystring   ecrire aprés URL ?pageNambere=20
//pageNambere veux dir key et 20 value
//sauf dans components on peus recupré le props 8-11
