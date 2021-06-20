import React from "react";
import { Text } from "@chakra-ui/react";

export interface AnchorLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: React.ReactNode;
}

export const AnchorLink: React.VFC<AnchorLinkProps> = ({
  children,
  ...props
}) => (
  <a {...props}>
    <Text textDecoration="underline" color="blue.500" as="span">
      {children}
    </Text>
  </a>
);
