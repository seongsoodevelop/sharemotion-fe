import styled from "styled-components";

const { grayScale } = require("@lib/palette");

const StyledSpan = styled.span`
  margin-bottom: 0.5rem;
  padding: 0.2rem 0.5rem;

  display: inline-block;

  background: ${grayScale.lv1};
  border-radius: 0.4rem;

  font-weight: 700;
  user-select: none;

  & + & {
    margin-left: 0.4rem;
  }
`;

export default StyledSpan;
