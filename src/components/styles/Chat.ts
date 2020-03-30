import styled from 'styled-components';

export const StyeldChat = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: ${p => p.theme.bgDark};
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'nav nav'
    'messages messages'
    'input input';

  .nav {
    grid-area: nav;
  }

  .messages {
    display: flex;
    flex-direction: column;
    grid-area: messages;
  }
  .input {
    grid-area: input;
  }

  .sidebar {
    --translate: ${(p: { showSidebar: boolean }) =>
      p.showSidebar ? '0%' : '100%'}
    grid-area: sidebar;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    transform: translateX(${(p: { showSidebar: boolean }) =>
      p.showSidebar ? '0%' : '100%'});
    transition: transform 0.2s;
  }

  @media (min-width: ${p => p.theme.bpLaptop}) {
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
