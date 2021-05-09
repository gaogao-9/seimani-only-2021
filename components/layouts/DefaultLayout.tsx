import React from "react";
import { Footer } from "~/components/Footer";

export interface DefaultLayoutProps {
  children: React.ReactNode;
};

export const DefaultLayout: React.VFC<DefaultLayoutProps> = ({ children }) => {
    return <>
      {children}
      <Footer />
    </>
};