import { TextStyled } from "./styles/Text.styled";
import Linkify from "react-linkify";
import Equation from "./Equation";
import React from "react";

function Text({ children, text }) {
  let data = [];
  if (children != null) data = [children];
  if (text != null) data.push(...text);
  return (
    <TextStyled>
      {data.map((child, id) => (
        <span key={id}>
          <Linkify
            componentDecorator={(decoratedHref, decoratedText, key) => (
              <a target="blank" href={decoratedHref} key={key}>
                {decoratedText}
              </a>
            )}
          >
            <Equation>{child}</Equation>
          </Linkify>
        </span>
      ))}
    </TextStyled>
  );
}

export default Text;
