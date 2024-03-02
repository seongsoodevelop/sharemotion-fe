import { grayScale } from "@lib/palette";
import styled from "styled-components";

const DiaryTextArea = styled.textarea`
  width: 100%;

  margin: 0;
  padding: 1rem !important;

  font-size: 1rem;
  font-family: "Pretendard";

  height: 13rem;

  background: ${grayScale.lv1};
  outline: none;
  border: none;
  border-radius: 0.4rem;

  resize: none;

  &:focus {
  }
  &::placeholder {
    color: #969696;
  }
`;

export default DiaryTextArea;
