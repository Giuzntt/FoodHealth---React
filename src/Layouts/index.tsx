import React, { ReactNode } from "react";
import AppBar from "../components/Navigation/AppBar";
import Footer from "../components/Navigation/Footer";


interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <AppBar />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
