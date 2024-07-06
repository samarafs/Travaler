import "./globals.css";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { Poppins } from "next/font/google";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { Metadata } from "next";
import UserProvider from "@/store/UserProvider";
import { getLoginUserDetails } from "@/actions/authAction/authActions";
import Head from "next/head";

export const metadata: Metadata = {
  title: "WonderGo",
  description: "The best travel agency",
};

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getLoginUserDetails();
  console.log("user««««««««««««««««««««««««««««««««««««««", user);

  return (
    <html lang="en">
      
      <body className={poppins.className}>
        <UserProvider
          user={user ? { ...user.data.data, image: user.data.image } : null}
        >
          <Navbar />
          <main className="main-container">{children}</main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
