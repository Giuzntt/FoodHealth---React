import React, { ReactNode } from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";


interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <AppBar  />
      <div className="conteudo">

      {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
