import React from "react";
import type { Metadata } from "next";

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "This is admin dashboard",
};

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  return (
    
      <div className="overflow-height w-full lg:w-4/5 ">
        {children}
      </div>
   
  );
};

export default AdminDashboardLayout;
