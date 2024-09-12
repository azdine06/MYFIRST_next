// [] cela veux dire que ce fild est dynamique
import { Article } from "@/utils/types";
import React from "react";
//props pour recuperé le id
interface SingleArticlePgeProps {
  params: { id: string };
}
const SingleArticlePge = async ({ params }: SingleArticlePgeProps) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fech article");
  }
  // if data not existe afffiche ce message d'erreur 
  const article: Article = await response.json();
  return (
    <section className="fix-height container m-auto w-full px-5 pt-8 md:w-3/4">
      <div className="bg-white p-7 rounded-lg">
        <h1 className="text-gray-800 text-xl mt-5">{article.title}</h1>
        <div className="text-gray-400">1/1/2024</div>
        <p>{article.body}</p>
      </div>
    </section>
  );
};

export default SingleArticlePge;
//pour écrire qerystring   ecrire aprés URL ?pageNambere=20
//pageNambere veux dir key et 20 value
//sauf dans components on peus recupré le props 8-11
