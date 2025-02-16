import type { Metadata } from "next";

import "./globals.css";
import {Nav} from "@/components/nav";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "Piuranito",
  description: "Pagina web de Arros Piuranito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
     
      <body className="background">  <Nav/>
        <div className="mt-16">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
