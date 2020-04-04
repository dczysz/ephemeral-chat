import { createGlobalStyle, DefaultTheme } from 'styled-components';

interface Props {
  theme: DefaultTheme;
}

export const GlobalStyle = createGlobalStyle<Props>`
  html,
  body {
    @media screen and (max-width: ${p => p.theme.bp.tablet}) {
      font-size: 95%;
    }

  }

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

  .tablet-hidden {
    @media screen and (max-width: ${p => p.theme.bp.laptop}) {
      display: none;
    }
  }

  input[type="text"] {
    ::placeholder {
      color: ${p => p.theme.colors.textMuted};
      opacity: 1; /* Firefox lowers opacity */
    }
  }

  /* TODO focus styles */
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }
`;
