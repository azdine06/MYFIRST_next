// import type { Metadata } from "next";
// import { Inter, Noto_Kufi_Arabic } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/header/Header";
// import Navbar from "@/components/header/Navbar";

// import Footer from "@/components/Footer";
// const inter = Inter({ subsets: ["latin"] });

// // const kufiArabic = Noto_Kufi_Arabic({ subsets: ["arabic"],weight:['300','500']});
// export const metadata: Metadata = {
//   title: "Clooud Hosting",
//   description: "Clooud Hostin Project",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="flex w-full justify-between border border-b-4 border-b-slate-600 bg-gray-200">
//           <Navbar />
//           <Header />
         
//         </div>

//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
// //si je veux faire un nave bare dans tout les page je le mette ici dans layout
// // si je veux executer le font arabic dans tout l'application <body className={kufiArabic.className}>{children}</body>
// // main


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/header/Navbar";
interface NavbarProps {

  isAdmin: boolean;

}
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud Hosting AZ",
  description: "Cloud Hosting Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Vous pouvez ajouter d'autres balises ici si nécessaire */}
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Navbar */}
        <div className="w-full border-b-4 border-slate-600 bg-gray-200">
          <Navbar isAdmin={false} />
        </div>
        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="w-full bg-gray-200">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

