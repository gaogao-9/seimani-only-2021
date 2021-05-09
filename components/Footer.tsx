import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";

const Wrapper = styled.div`
  height: 60px;
  background-color: var(--chakra-colors-blue-light);
  overflow: hidden;
`;

const Curve = styled.div`
  width: 100%;
  height: 20%;
  background-color: var(--chakra-colors-white-full);
  border-bottom-right-radius: 30vw 100%;
  border-bottom-left-radius: 30vw 100%;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 80%;
  align-items: center;
  justify-content: center;
`;

const Line = styled.span`
  margin: 0 0.2em;
  white-space: nowrap;
`;

export const Footer: React.VFC = (props) => (
  <Wrapper {...props}>
    <Curve />
    <Contents>
      <Line>
        <Text fontSize="xs" color="blue.700">
          政剣マニフェスティアオンリーイベント
        </Text>
      </Line>
      <Line>
        <Text fontSize="xs" color="blue.700">
          戦挙管理委員会
        </Text>
      </Line>
    </Contents>
  </Wrapper>
);
