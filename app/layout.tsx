import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FavProjectsSideBar from "./_components/FavProjectsSideBar/FavProjectsSideBar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import StyledComponentsRegistry from "./_lib/registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Lister",
  description: "A Project Lister",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex w-screen `}
      >
        <AntdRegistry>
          <StyledComponentsRegistry>
            <FavProjectsSideBar />
            {children}
          </StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}
