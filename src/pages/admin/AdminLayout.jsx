import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, LayoutContent } from "@/components/ui/layout";
import { Users, Briefcase, MessageSquare, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Projects", href: "/admin/projects", icon: Briefcase },
    { name: "Clients", href: "/admin/clients", icon: Users },
    { name: "Contact Forms", href: "/admin/contacts", icon: MessageSquare },
    { name: "Subscriptions", href: "/admin/subscriptions", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-lg"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static transition-transform duration-300
      `}
      >
        <div className="h-16 flex items-center justify-center border-b">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>

        <nav className="mt-6 px-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  flex items-center px-4 py-3 mb-2 rounded-lg
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }
                `}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Icon size={20} className="mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:ml-64 min-h-screen">
        <header className="h-16 bg-white shadow-sm flex items-center px-6">
          <h2 className="text-lg font-semibold">
            {navigation.find((item) => item.href === location.pathname)?.name ||
              "Dashboard"}
          </h2>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
