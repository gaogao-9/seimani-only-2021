import React from "react";
import styled from "@emotion/styled";
import { BaseLayout } from "./BaseLayout";

const SkyBackground = styled.div`
  height: 100%;
  background-image: linear-gradient(
    0deg,
    rgb(255, 255, 255) 25%,
    rgb(203, 232, 248) 50%,
    rgb(157, 200, 237) 62%,
    rgb(120, 161, 218) 77%,
    rgb(110, 149, 213) 88%
  );
`;

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.VFC<DefaultLayoutProps> = ({
  children,
  ...props
}) => (
  <BaseLayout {...props}>
    <SkyBackground>{children}</SkyBackground>
  </BaseLayout>
);
