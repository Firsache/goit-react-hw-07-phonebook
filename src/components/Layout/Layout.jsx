import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles/globalStyles.styled';

export const Layout = ({ theme = {}, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
