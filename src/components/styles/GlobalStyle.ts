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

  input[type="text"],
  button {
    transition: box-shadow ${p => p.theme.time.short}
  }

  input[type="text"] {
    ::placeholder {
      color: ${p => p.theme.colors.textMuted};
      opacity: 1; /* Firefox lowers opacity */
    }
  }  
`;
