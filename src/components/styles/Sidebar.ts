import styled from 'styled-components';

export const StyledSidebar = styled.div`
  background-color: ${p => p.theme.colors.bgDarker};
  color: ${p => p.theme.colors.textMuted};
  height: 100%;
  max-width: 90vw;
  width: 18rem;

  .header {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
  }
`;
