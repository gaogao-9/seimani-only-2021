import React from "react";
import { Avatar, Center, Flex, SimpleGrid } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { DefaultLayout as Layout } from "~/components/layouts/index";

const staffs = [
  {
    name: "gaogao_9",
    nickname: "がお",
    ext: "jpg",
    disabled: false,
  },
  {
    name: "nyan_nyee",
    nickname: "にゃんにー",
    ext: "jpg",
    disabled: false,
  },
  {
    name: "mimeino",
    nickname: "あけ",
    ext: "jpg",
    disabled: false,
  },
  {
    name: "non_affleck",
    nickname: "のんアフ",
    ext: "png",
    disabled: true,
  },
  {
    name: "tsukasa_seiken",
    nickname: "つかさ",
    ext: "jpg",
    disabled: false,
  },
];

const StyledLink = styled.a`
  &[aria-disabled] {
    pointer-events: none;
  }
`;

const Page: React.VFC = () => {
  return (
    <Layout>
      <Flex
        height="100%"
        maxW="1000px"
        marginX="auto"
        align="center"
        justify="center"
      >
        <SimpleGrid width="100%" minChildWidth="120px" spacing="40px">
          {staffs.map((staff) => (
            <Center key={staff.name}>
              <StyledLink
                href={`https://twitter.com/${staff.name}`}
                target="_blank"
                aria-disabled={
                  staff.disabled || (undefined as unknown as boolean)
                }
                tabIndex={!staff.disabled ? -1 : 0}
              >
                <Avatar
                  size="2xl"
                  name={staff.nickname}
                  src={`/assets/img/staff/${staff.name}.${staff.ext}`}
                />
              </StyledLink>
            </Center>
          ))}
        </SimpleGrid>
      </Flex>
    </Layout>
  );
};

export default Page;
