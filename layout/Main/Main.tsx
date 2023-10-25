/**
 * The layout/Main/Main.js is included as an example on how to make a global layout for your nextjs project
 */

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import * as React from "react";
import { ContentItem } from "types";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Main = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className={inter.className}>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
