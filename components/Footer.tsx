import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 150px;
  background-color: var(--chakra-colors-blue-light);
  overflow: hidden;
`;

const Contents = styled.div`
  width:100%;
  height: 10%;
  background-color: var(--chakra-colors-white-full);
  border-bottom-right-radius: 30vw 100%;
  border-bottom-left-radius: 30vw 100%;
`;

export const Footer: React.VFC = () => (
  <Wrapper>
    <Contents>
      政剣マニフェスティアオンリーイベント 戦挙管理委員会
    </Contents>
  </Wrapper>
);