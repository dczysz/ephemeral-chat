import { createGlobalStyle, DefaultTheme } from 'styled-components';

interface Props {
  theme: DefaultTheme;
}

export const GlobalStyle = createGlobalStyle<Props>`
  *,
  *::before,
  *::after {
    transition:
      color ${p => p.theme.time.short},
      background-color ${p => p.theme.time.short};
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
      display: none !important;
    }
  }

  .tablet-hidden {
    @media screen and (max-width: ${p => p.theme.bp.laptop}) {
      display: none;
    }
  }

  input[type="text"],
  input[type="password"],
  button {
    transition:
      box-shadow ${p => p.theme.time.short},
      color ${p => p.theme.time.short};
  }

  input[type="text"] {
    ::placeholder {
      color: ${p => p.theme.colors.textMuted};
      opacity: 1; /* Firefox lowers opacity */
    }
  }  
`;
