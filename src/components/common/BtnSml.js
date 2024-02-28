import styled from "styled-components";
import { grayScale } from "@lib/palette";

const BtnSml = styled.div`
  padding: 0.5rem 0.6rem;
  font-weight: 700;
  border-radius: 0.4rem;
  border: solid 0.1rem ${grayScale.lv3};

  user-select: none;
  cursor: pointer;

  line-height: 1;
`;

export default BtnSml;
