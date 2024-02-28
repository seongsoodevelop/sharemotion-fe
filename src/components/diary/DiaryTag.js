import styled from "styled-components";

const { grayScale } = require("@lib/palette");

const StyledSpan = styled.span`
  margin-bottom: 0.5rem;
  margin-right: 0.4rem;
  padding: 0.2rem 0.5rem;

  display: inline-block;

  background: ${grayScale.lv1};
  border-radius: 0.4rem;

  font-weight: 600;
  user-select: none;
`;

export default StyledSpan;
