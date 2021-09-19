import React, { useCallback, useState } from "react";
import { Text, AspectRatio, Image, Flex, Grid, Center } from "@chakra-ui/react";
import Head from "next/head";
import { DefaultLayout as Layout } from "~/components/layouts/index";
import { AnchorLink } from "~/components/AnchorLink";
import { Card } from "~/components/Card";

const Page: React.VFC = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const onLoad = useCallback(() => setIsImageLoaded(true), []);

  return (
    <>
      <Head>
        <link rel="preload" href="/assets/img/top.jpg" as="image" />
        <meta key="robots" name="robots" content="noindex nofollow" />
      </Head>
      <Layout>
        <Flex
          maxW="1000px"
          marginX="auto"
          flexDirection="column"
          align="center"
          justify="center"
        >
          <Card title="ペーパーラリーご参加ありがとうございました！">
            <Card.Section title="">
              参加された総理の皆さんに、主催より特典を2つをご用意しました！
              <br />
              有効期間内であれば、後日の印刷・ダウンロードが可能です。
              <br />
              <Text as="span" fontWeight="500">
                後日の印刷・ダウンロードを予定されている場合、このページをブックマークしてください。
              </Text>
              <br />
              <br />
              <Text as="span" fontWeight="500">
                【お願い】
              </Text>
              <br />
              <Text as="span" fontWeight="500">
                このページのURLおよびコンテンツはペーパーラリー参加者の皆さん限定で公開しております。
              </Text>
              <br />
              <Text as="span" fontWeight="500">
                いずれも外部サービスやSNS等での公開はご遠慮いただき、私的利用の範囲でお楽しみください。
              </Text>
            </Card.Section>
          </Card>
          <Card title="特典その1. メインビジュアルのペーパー配布">
            <AspectRatio mx="auto" ratio={1024 / 1435}>
              <Image
                opacity={isImageLoaded ? 1 : 0}
                transition="opacity 0.5s"
                src="/assets/img/paperrally/mainvisual.jpg"
                alt="main visual"
                objectFit="contain"
                onLoad={onLoad}
              />
            </AspectRatio>
            <Card.Section title="概要">
              『漕ぎ出せ！ソクバイ海Ⅳ&nbsp;#アイムソウリー2021』
              <br />
              メインビジュアルイラストのペーパーを配布します！
            </Card.Section>
            <Card.Section title="印刷方法">
              お近くのコンビニエンスストアのマルチコピー機から印刷してください。
              <br />
              セブンイレブン
              <br />
              <AnchorLink href="https://www.printing.ne.jp/">
                https://www.printing.ne.jp/
              </AnchorLink>
              <br />
              ファミリーマート、ローソン、ポプラグループ
              <br />
              <AnchorLink href="https://networkprint.ne.jp/sharp_netprint/ja/top.aspx">
                https://networkprint.ne.jp/sharp_netprint/ja/top.aspx
              </AnchorLink>
            </Card.Section>
            <Card.Section title="予約番号">
              セブンイレブン
              <br />
              <Text as="span" fontWeight="500">
                34971034
              </Text>
              <br />
              ファミリーマート、ローソン、ポプラグループ
              <br />
              <Text as="span" fontWeight="500">
                9B4EXBP6EB
              </Text>
            </Card.Section>
            <Card.Section title="推奨用紙サイズ">L判・2L判</Card.Section>
            <Card.Section title="注意事項">
              印刷料金
              <br />
              40円（セブンイレブン、L判、写真用紙の場合）
              <br />
              30円（ファミマ・ローソン・ポプラ、L判、写真用紙の場合）
              <br />
              印刷期間：9月20日〜9月27日
              <br />
              ※期間後の印刷は保証いたしません
            </Card.Section>
          </Card>
          <Card title="特典その2. たわしスキンの配布">
            <Grid
              templateColumns="repeat(3, 96px)"
              justifyContent="center"
              gap={8}
            >
              <Image
                opacity={isImageLoaded ? 1 : 0}
                transition="opacity 0.5s"
                src="/assets/img/paperrally/tawashi_normal.png"
                alt="main visual"
                objectFit="contain"
                style={{ imageRendering: "pixelated" }}
                onLoad={onLoad}
              />
              <Image
                opacity={isImageLoaded ? 1 : 0}
                transition="opacity 0.5s"
                src="/assets/img/paperrally/tawashi_silver.png"
                alt="main visual"
                objectFit="contain"
                style={{ imageRendering: "pixelated" }}
                onLoad={onLoad}
              />
              <Image
                opacity={isImageLoaded ? 1 : 0}
                transition="opacity 0.5s"
                src="/assets/img/paperrally/tawashi_gold.png"
                alt="main visual"
                objectFit="contain"
                style={{ imageRendering: "pixelated" }}
                onLoad={onLoad}
              />
            </Grid>
            <Card.Section title="概要">
              pictSQUAREで使用可能なたわしスキンを配布いたします！
            </Card.Section>
            <Card.Section title="使用方法">
              ①&nbsp;
              <AnchorLink href="/assets/bin/tawashi.zip" download="tawashi.zip">
                たわしスキンをダウンロードする
              </AnchorLink>
              &nbsp; をクリックしてダウンロードしてください。
              <br />
              ②pictSQUARE内の「アバター設定」にたわしスキンをアップロードしてご使用ください。
              <br />
              ★『漕ぎ出せ！ソクバイ海Ⅳ&nbsp;#アイムソウリー2021』開催時間中にたわしスキンのアバターで再入場してみよう！
            </Card.Section>
            <Card.Section title="注意事項">
              本スキンは私的利用の範囲でお楽しみください。
              <br />
              使用報告は不要です。
              <br />
              ○OK
              <br />
              ・たわしスキン状態でのスクショ撮影や公開
              <br />
              ・個人による加工、改変しての利用
              <br />
              ×NG
              <br />
              ・自作発言
              <br />
              ・再配布や販売
              <br />
              ダウンロード期間：9月20日〜9月27日
              <br />
              ※期間後のダウンロードは保証いたしません
            </Card.Section>
          </Card>
        </Flex>
      </Layout>
    </>
  );
};

export default Page;
