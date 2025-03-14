import Hero from "@/components/home/Hero";
import WebHostingPlan from "@/components/home/WebHostingPlan";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-gray-100 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Title Section */}
      <div className="text-center mt-12">
        <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Choose Your Web Hosting Plan
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Reliable, scalable, and affordable plans tailored to your needs.
        </p>
        <Link
          href="/admin"
          className="inline-block mt-8 text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 font-semibold rounded-full text-base px-8 py-3 shadow-xl transition-all duration-300"
        >
          Go to Admin Page
        </Link>
      </div>

      {/* Plans Section */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center mt-16 mb-20 gap-10 px-6">
        <WebHostingPlan />
        <WebHostingPlan />
        <WebHostingPlan />
      </div>
    </section>
  );
};

export default HomePage;
