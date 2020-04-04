import styled from 'styled-components';

interface Props {
  showSidebar: boolean;
}

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
