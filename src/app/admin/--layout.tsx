// import AdminSidebar from "./AdminSidebar";
// import type { Metadata } from "next";
// interface AdminDashboardLayoutProps {
//   children: React.ReactNode;
// }
// export const metadata: Metadata = {
//   title: "Admin Dashbord",
//   description: "The is meta data",
// };
// // cette class c'est pour faire un leyout a la page admine puit les implemanté dans les autres class
// const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
//   return (
//     <div className="overflow-height flex items-start justify-between overflow-hidden">
//       <div className="overflow-height w-15 lg:w-1/5 bg-purple-600 text-white p-1 lg:p-5 ">
//         <AdminSidebar />
//       </div>
//       <div className="overflow-height w-full lg:w-4/5 overflow-scroll">
//         {/* cette childrene signifi la page admine et tout leurs composante  => articles-table et comments-tabel*/}
//         {children}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardLayout;

import React from "react";

export default function layout() {
  return (
    <div>
      <h1>Welcome to My Next.js Site</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6612.967972446728!2d-5.018021464347808!3d34.031454067261954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b0e611bddbf%3A0xc880d3e97d26471e!2sMaison%20celeste!5e0!3m2!1sfr!2sma!4v1717597059051!5m2!1sfr!2sma"
        width="600"
        height="450"
        className="w-full"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
