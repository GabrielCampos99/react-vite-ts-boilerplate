import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import P from 'prop-types';
import { GlobalStyles } from './global-styles';
import React, { ReactNode } from 'react';

interface IMyThemeProvider {
  children?: ReactNode
}

export const MyThemeProvider: React.FC<IMyThemeProvider> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

MyThemeProvider.propTypes = {
  children: P.node.isRequired,
};
