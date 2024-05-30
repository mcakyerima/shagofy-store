import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Urbanist } from "next/font/google";
import "./globals.css";
import getCategories from "@/action/get-categories";
import { Category } from "@/types/types";
import { Metadata } from "next";

const font = Urbanist({ subsets: ["latin"] });
export const revalidate = 0;
export const metadata: Metadata = {
  title: "Shagofy-store",
  description: "Store",
};

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Fetch categories server-side
  const categories: Category[] = await getCategories();

  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar categories={categories} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
