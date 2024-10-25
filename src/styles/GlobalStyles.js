import { global, navStyle } from "./style";

const css = `
${global}
${navStyle}
`;

export function GlobalStyle() {
  const head = document.querySelector("head");
  const styleTag = document.createElement("style");
  styleTag.innerHTML = css;
  head.append(styleTag);
}
