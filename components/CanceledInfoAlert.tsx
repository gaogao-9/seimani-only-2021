import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { AnchorLink } from "~/components/AnchorLink";

export const CanceledInfoAlert: React.VFC = () => (
  <Alert
    status="info"
    variant="subtle"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    marginTop={12}
  >
    <AlertIcon boxSize="40px" mr={0} />
    <AlertTitle mt={4} mb={1} fontSize="lg">
      オフラインイベント中止のお知らせ
    </AlertTitle>
    <AlertDescription maxWidth="100%" my={4}>
      9/20(月・敬老の日)開催『漕ぎ出せ！ソクバイ海Ⅳ&nbsp;#アイムソウリー2021』ですが、
      <br />
      川崎市産業振興会館にて開催を予定していたリアル会場におけるイベントは中止とし、
      <br />
      pictsquareでの【オンライン開催に一本化】することに決定いたしました。
      <br />
      オンライン開催の詳細は以下ページをご確認ください。
      <br />
      <AnchorLink
        href="
      https://pictsquare.net/n3ci6v6yun9u383rp814sahs2wucdmwq"
      >
        https://pictsquare.net/n3ci6v6yun9u383rp814sahs2wucdmwq
      </AnchorLink>
    </AlertDescription>
  </Alert>
);
