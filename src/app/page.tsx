// import Header from '@/components/header/Header';

import Hero from "@/components/home/Hero";
import WebHostingPlan from "@/components/home/WebHostingPlan";
import Link from "next/link";

const HomePage = () => {
  return (
    <section>
      {/* <Header/> */}
      <Hero />

      <h2 className="text-center mt-10 text-3xl font-bold">
        Choose Your Web Hosting Plan 
      </h2>
      <Link href={"/src/app/admin"}>go to admin page</Link>
      <div className="container m-auto flex justify-center items-center my-7 flex-wrap">
        <WebHostingPlan/>
        <WebHostingPlan/>
        <WebHostingPlan/>

      </div>
    </section>
  );
};

export default HomePage;
// link pour ne pas actualisé la page c'est pour cela on utilise pas a
// il faut impoté Link de next/link
// on peut ecrire @ ou ..