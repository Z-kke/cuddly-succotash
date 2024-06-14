import type { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import "./globals.css";
import Navbar from "../components/NavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        <AppRouterCacheProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
