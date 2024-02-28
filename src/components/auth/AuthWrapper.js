import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 4rem;

  @media only screen and (max-width: 1000px) {
    padding: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 30rem;
  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  justfiy-content: center;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    max-width: 1000px;
  }
`;

export default function AuthWrapper({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}
