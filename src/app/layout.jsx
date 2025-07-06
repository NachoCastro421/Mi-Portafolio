import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mi portafolio",
  description: "Portafolio personal hecho con Next.js y Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className="bg-white text-gray-900 "
      >
        <header>
          <Navbar />          
        </header>
        <main>{children} </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
