import { createGlobalStyle, DefaultTheme } from 'styled-components';

interface Props {
  theme: DefaultTheme;
}

export const GlobalStyle = createGlobalStyle<Props>`
  :root {
    --border: 2px solid ${p => p.theme.colors.border};
    --border-light: 2px solid ${p => p.theme.colors.borderLight};
    --br: ${p => p.theme.br};
    --bp-tablet:  ${p => p.theme.bp.tablet};
    --bp-laptop: ${p => p.theme.bp.laptop};
    --bp-desktop: ${p => p.theme.bp.desktop};
    --bs-raised: ${p => p.theme.bs.raised.bg};
    --bs-raised-dark: ${p => p.theme.bs.raised.dark};
    --bs-inset: ${p => p.theme.bs.inset.bg};
    --bs-inset-dark: ${p => p.theme.bs.inset.dark};
    --color-bg: ${p => p.theme.colors.bg};
    --color-bg-dark: ${p => p.theme.colors.bgDark};
    --color-bg-light: ${p => p.theme.colors.bgLight};
    --color-bs: ${p => p.theme.colors.bs};
    --color-danger: ${p => p.theme.colors.danger};
    --color-primary: ${p => p.theme.colors.primary};
    --color-success: ${p => p.theme.colors.success};
    --text: ${p => p.theme.colors.text};
    --text-muted: ${p => p.theme.colors.textMuted};
    --text-muteder: ${p => p.theme.colors.textMuteder};
    --time-short: ${p => p.theme.time.short};
    --time-long: ${p => p.theme.time.long};
  }


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
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.bg};
  }

  .tablet-only {
    @media (min-width: ${p => p.theme.bp.laptop}) {
      display: none !important;
    }
  }

  .tablet-hidden {
    @media (max-width: ${p => p.theme.bp.laptop}) {
      display: none;
    }
  }

  input[type="text"],
  input[type="password"],
  button {
    transition:
      box-shadow ${p => p.theme.time.short},
      color ${p => p.theme.time.short},
      border ${p => p.theme.time.short};
  }

  input[type="text"] {
    ::placeholder {
      color: ${p => p.theme.colors.textMuted};
      opacity: 1; /* Firefox lowers opacity */
    }
  }
  
  a:focus {
    outline: var(--border);
  }
`;
