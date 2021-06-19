import React from "react";
import { Global, css } from "@emotion/react";
import { routes } from "~/foundation/route";

const routesText = encodeURIComponent(
  routes.reduce((text, { title }) => text + title, ""),
);

const routingMenuFont = css`
  @import url("https://fonts.googleapis.com/css2?family=Shippori+Mincho%20B1:wght@400;600&display=swap&text=${routesText}");
`;

const topAnimationText = encodeURIComponent("おかえりただいま");

const topAnimationFont = css`
  @import url("https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400&display=swap&text=${topAnimationText}");
`;

export const GlobalStyle: React.VFC = () => {
  return (
    <>
      <Global styles={routingMenuFont} />
      <Global styles={topAnimationFont} />
    </>
  );
};
