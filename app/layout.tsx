import type { Metadata } from "next";
import "./globals.css";
import FavProjectsSideBar from "./_components/FavProjectsSideBar/FavProjectsSideBar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import StyledComponentsRegistry from "./_lib/registry";
import { ProjectsContextProvider } from "./_contexts/ProjectsContext/ProjectsContext";
import { Toaster } from "react-hot-toast";

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
      <body className={`antialiased flex w-screen h-screen`}>
        <AntdRegistry>
          <StyledComponentsRegistry>
            <Toaster />
            <ProjectsContextProvider>
              <FavProjectsSideBar />
              {children}
            </ProjectsContextProvider>
          </StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}
