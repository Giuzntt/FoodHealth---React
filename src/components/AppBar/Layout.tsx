import React, { ReactNode } from "react";
import AppBar from ".";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <AppBar  />
      {children}
      
    </>
  );
};

export default Layout;
