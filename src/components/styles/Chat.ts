import styled, { keyframes } from 'styled-components';

interface Props {
  showSidebar: boolean;
}

const glowAnimation = keyframes`
  0% { opacity: 1; }
  30% { opacity: 0.3; }
  60% { opacity: 1; }
  100% { opacity: 1; }
`;

const appearAnimation = keyframes`
  0% { opacity: 0; }
  80% { opacity: 0; }
  100% { opacity: 1; }
`;

export const StyeldChat = styled.div<Props>`
  background-color: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.text};
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'nav nav'
    'messages messages'
    'input input';
  height: 100vh;
  overflow: hidden;
  position: relative;

  .nav {
    grid-area: nav;
  }

  .messages {
    grid-area: messages;
    overflow: hidden; /* Needed or else parent grows */
  }
  .input {
    grid-area: input;
  }

  .sidebar {
    bottom: 0;
    grid-area: sidebar;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(
      ${(p: { showSidebar: boolean }) => (p.showSidebar ? '0%' : '100%')}
    );
    transition: transform ${p => p.theme.time.long};
    z-index: 1;
  }

  form.error-modal {
    input {
      margin-bottom: 1rem;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;

      button {
        margin-left: 1rem;
      }
    }
  }

  .loading-overlay {
    align-items: center;
    background-color: ${p => p.theme.colors.bgDarker};
    bottom: 0;
    color: ${p => p.theme.colors.textMuted};
    display: flex;
    justify-content: center;
    left: 0;
    opacity: 0;
    padding: 1rem;
    pointer-events: none;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    transition: opacity ${p => p.theme.time.long};
    z-index: 1;

    .glow {
      animation: ${glowAnimation} 3s infinite;
    }
    .delay {
      animation: ${appearAnimation} 5s;
    }

    &.show {
      opacity: 1;
      pointer-events: all;
    }
  }

  @media (min-width: ${p => p.theme.bp.laptop}) {
    grid-template-areas:
      'nav nav'
      'messages sidebar'
      'input input';

    .sidebar {
      position: static;
      transform: none;
    }
  }
`;
