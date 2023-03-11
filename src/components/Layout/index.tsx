import Footer from "~/src/components/Footer";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1920px] m-auto px-4 md:px-12 lg:px-14 xl:px-24 xl:max-w-screen-xl">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
