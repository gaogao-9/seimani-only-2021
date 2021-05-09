import React from "react";
import { Global, css } from "@emotion/react";
import { routes } from "~/foundation/route";

const routesText = encodeURIComponent(
  routes.reduce((text, { title }) => text + title, ""),
);

const routingMenuFont = css`
  @import url("https://fonts.googleapis.com/css2?family=Shippori+Mincho%20B:wght@400;6001&display=swap&text=${routesText}");
`;

export const GlobalStyle: React.VFC = () => {
  return (
    <>
      <Global styles={routingMenuFont} />
    </>
  );
};
