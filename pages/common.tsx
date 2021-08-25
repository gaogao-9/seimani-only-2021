import React from "react";
import { Flex, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import { DefaultLayout as Layout } from "~/components/layouts/index";
import { AnchorLink } from "~/components/AnchorLink";
import { Card } from "~/components/Card";
import { CanceledInfoAlert } from "~/components/CanceledInfoAlert";

const Page: React.VFC = () => {
  return (
    <Layout>
      <Flex
        maxW="1000px"
        marginX="auto"
        flexDirection="column"
        align="center"
        justify="center"
      >
        <CanceledInfoAlert />
        <Card title="参加者全般">
          <Card.Section title="はじめに">
            一般参加を予定される総理の皆さんは、下記の諸注意をお読みいただいた上でご参加ください。
            <br />
            なお、ご不明な点がございましたら、お気軽に主催メールアドレス宛にお問い合わせください。
          </Card.Section>
          <Card.Section title="感染症対策とイベント開催について">
            昨今の感染症に関する世情を鑑み、9月20日に開催予定の本イベントにおいては感染症の拡大を防止する措置を講じることとします。
            <br />
            主催である戦挙管理委員会は、9月20日時点で可能な限りの措置を講じます。
            <br />
            一般参加総理の皆さんにも様々な形で感染拡大防止にご協力いただきたく存じますので、何卒ご理解ください。
            <br />
            詳細：感染症対策ページ
            <br />
            <AnchorLink to="/infection">
              https://festia.moe/infection
            </AnchorLink>
            <br />
            <br />
            なお、緊急事態宣言が発表された場合などはリアルイベント開催を取りやめる場合がありますので、あらかじめご了承ください。
            <br />
            <br />
            また、オンラインイベントを同日開催予定です。そちらへの参加もあわせてご検討ください。
            <br />
            詳細：オンラインイベントのご案内
            <br />
            漕ぎ出せ！ソクバイ海Ⅳ&nbsp;#アイムソウリー2021&nbsp;|&nbsp;pictSQUARE&nbsp;-&nbsp;オンライン即売会サービス
            <br />
            <AnchorLink
              href="
            https://pictsquare.net/n3ci6v6yun9u383rp814sahs2wucdmwq"
            >
              https://pictsquare.net/n3ci6v6yun9u383rp814sahs2wucdmwq
            </AnchorLink>
          </Card.Section>
          <Card.Section title="イベントスケジュール">
            <Table>
              <Tbody>
                <Tr>
                  <Td width="80px">10:00</Td>
                  <Td>
                    【会場】サークル入場開始
                    <br />
                    【更衣室】開場
                  </Td>
                </Tr>
                <Tr>
                  <Td>12:00</Td>
                  <Td>【即売会】開始</Td>
                </Tr>
                <Tr>
                  <Td>15:00</Td>
                  <Td>【即売会】終了</Td>
                </Tr>
                <Tr>
                  <Td>18:00</Td>
                  <Td>
                    【会場】完全撤収
                    <br />
                    【更衣室】閉鎖
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <br />
            ※スケジュールは変更になることがあります
          </Card.Section>
          <Card.Section title="参加費">
            即売会参加 500円（予定）
            <br />
            当日の会場受付にて入場特典アイテム兼入場証をお渡しいたします。
            <br />
            なお、お支払い方法として、事前のオンラインチケット販売の導入を検討中です。決定次第、追って告知いたします。
          </Card.Section>
          <Card.Section title="再入場方法">
            イベント時間中は、会場入口の戦挙管理委員（スタッフ）に入場証をお見せください。
          </Card.Section>
          <Card.Section title="迷惑行為、危険行為の禁止">
            ・会場内外で走る、受付より外の会場外共用部に長時間立ち止まる、などの行為はご遠慮ください。
            <br />
            ・一箇所のサークルスペース前に長時間居座る、近隣のサークルスペースの前にはみ出す、などの行為は、他の参加者の迷惑になりますのでご遠慮ください。
            <br />
            会場は禁煙、禁酒です。喫煙は指定の喫煙スペースにてお願いします。
            <br />
            ・会場内や会場周辺での勧誘行為、パフォーマンスなどの混乱が予想される行為は禁止です。
            <br />
            ・モデルガン・エアガンなどの武器類、楽器などの大きな音の鳴る物、引火物、アルコール（消毒用途を除く）、ペット、その他危険と思われるものの持ち込みは禁止です。
          </Card.Section>
          <Card.Section title="会場内撮影について">
            ・会場内での動画撮影は一切禁止です。
            <br />
            ・会場内での写真撮影はサークルスペースや展示物、コスプレの撮影に限り可能です。ただし、人物が写り込まないようにご配慮ください。もし写り込んでしまったものをSNS等にアップロードする場合は【必ず加工を施し】個人の特定ができないようにしてください。
            <br />
            ・サークルスペースやコスプレイヤーを撮影する際、また撮影したものをSNSにアップロードする際には、被写体のサークル参加者やコスプレ参加者に許可を得てください。
            <br />
            ・コスプレ撮影を行う場合、サークルスペースが写り込まないようにご配慮ください。
          </Card.Section>
          <Card.Section title="会場利用規約厳守のお願い">
            ・共用部のコンセントの使用は禁止です。
            <br />
            ・荷物は受付より外の共用部には絶対に置かないでください。
            <br />
            ・ゴミはお手数ですがお持ち帰りください。
            <br />
            ・会場内非常口の前に荷物を置かないようにお願いいたします。
          </Card.Section>
          <Card.Section title="喫煙に関するお願い">
            ・喫煙スペースは【1階の荷捌き室】です。なお、喫煙スペースが閉鎖されている可能性もあります。当日は会場の指示に従ってください。
            <br />
            ・喫煙スペース以外での喫煙は会場内外問わず厳禁です。
            <br />
            ・喫煙所の三密状態にご注意ください。
          </Card.Section>
          <Card.Section title="落とし物について">
            ・落とし物・忘れ物などは【会場本部】までお届けください。
            <br />
            ・金銭・貴重品の紛失につきましては当イベント主催者では責任を負いかねますので、貴重品の管理にご注意ください。
          </Card.Section>
          <Card.Section title="その他">
            ・緊急の場合を除き、個人的な呼び出しはできません。
            <br />
            ・ケガをした方、気分の悪くなった方はお近くの戦挙管理委員までお申し出ください。
            <br />
            ・飲食物の持ち込みは可能ですが、会場を汚されないよう十分ご注意ください。
            <br />
            ・イベント会場内での手作り食品の差し入れはご遠慮ください。
            <br />
            ・コスプレまたはコスプレと判断されるような服装での入場・退場は禁止です。コスプレをされる場合、所定の更衣室でのお着替えをお願い致します。
            <br />
            ・会場外における事故・トラブルにつきまして当イベント主催者は保証できません。ご来場、ご帰宅の際はご注意ください。
            <br />
            コスプレ諸注意は コスプレ参加者向けのページ に掲載しております。
            <br />
            <AnchorLink to="/cosplay">https://festia.moe/cosplay</AnchorLink>
            <br />
            コスプレ参加予定の方はご一読ください。
            <br />
            <br />
            ※一般参加者の同人誌、同人グッズ、あるいはそれに準ずるものの頒布行為の禁止※
            <br />
            <br />
            一般参加者の上記行為を全面的に禁止させていただきます。
            <br />
            一般参加者からサークル参加者への差し入れ等は良識の範囲内でお願い致します。
            <br />
            目に余る行為が見受けられた場合は退場をお願いする場合もございます。
            <br />
            即売会を皆様に楽しんでいただくため、ご協力お願い致します。
            <br />
            会場内で頒布行為をしたい方は是非ともサークル参加を！
          </Card.Section>
        </Card>
        <Card title="プライバシーポリシー">
          <Card.Section title="">
            戦挙管理委員会（以下「当会」といいます）は、個人情報の保護に関する法令等を遵守するとともに、本プライバシーポリシーを遵守します。
          </Card.Section>
          <Card.Section title="1. 個人情報の定義">
            個人情報とは、氏名、住所、生年月日、年齢、性別、電話番号、電子メールアドレス、IPアドレス、銀行口座番号のうち、1つあるいは2つ以上を組み合せることによって、特定の個人を識別できるものを指します。
          </Card.Section>
          <Card.Section title="2. 個人情報の取得">
            当会は、個人情報を、適正な手段により取得いたします。
          </Card.Section>
          <Card.Section title="3. 個人情報の利用目的">
            当会は、主催する即売会・イベント等において、個人情報を、以下の目的で利用し、ご本人の同意を頂いた範囲内においてのみ取り扱います。
            <br />
            (1) 即売会・イベント等の運営に必要な情報を処理するため
            <br />
            (2) 即売会・イベント等に関する重要事項を参加者に連絡するため
            <br />
            (3) 即売会・イベント等の運営上のトラブルを解決するため
          </Card.Section>
          <Card.Section title="4. 個人情報の第三者への提供">
            当会は、個人情報保護法その他の法令により認められる事由がある場合を除き、ご本人の同意なくして、第三者に提供・開示しません。
          </Card.Section>
          <Card.Section title="5. 個人情報の安全管理">
            当会は、個人情報を適切に管理し、個人情報の漏えい、滅失、毀損等に対する予防措置を講じます。
          </Card.Section>
          <Card.Section title="6. 個人情報の開示、訂正、苦情等">
            当会は、個人情報について、開示、訂正、苦情等について、ご本人からのお申出があった場合には、お申出頂いた方がご本人であることを確認の上、個人情報保護法の定めに従い、速やかに対応いたします。
          </Card.Section>
          <Card.Section title="7. プライバシーポリシーの変更">
            当会は、必要に応じて、本プライバシーポリシーの内容を改定することがあります。その場合、変更箇所を速やかに公表するものとします。
          </Card.Section>
          <Card.Section title="8. お問い合わせ窓口">
            戦挙管理委員会&nbsp;seimani.only[at]gmail.com
          </Card.Section>
        </Card>
      </Flex>
    </Layout>
  );
};

export default Page;
