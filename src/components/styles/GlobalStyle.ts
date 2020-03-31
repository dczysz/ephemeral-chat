import { createGlobalStyle, DefaultTheme } from 'styled-components';

interface Props {
  theme: DefaultTheme;
}

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    background-color: ${p => p.theme.colors.bg};
  }

  ::selection {
    background-color: ${p => p.theme.colors.success};
    color: ${p => p.theme.colors.text};
  }

  .tablet-only {
    @media screen and (min-width: ${p => p.theme.bp.laptop}) {
      display: none;
    }
  }

  input[type="text"] {
    ::placeholder {
      color: ${p => p.theme.colors.textMuted};
      opacity: 1;
    }
  }
`;
