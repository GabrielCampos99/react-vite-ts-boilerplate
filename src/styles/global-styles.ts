import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<{theme: DefaultTheme}>`
  background: ${({theme}) => theme.colors.primary};
`


