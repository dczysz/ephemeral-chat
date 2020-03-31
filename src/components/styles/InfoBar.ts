import styled from 'styled-components';

export const StyledInfoBar = styled.div`
  box-shadow: 0 2px 6px ${p => p.theme.colors.bgDarker};
  color: ${p => p.theme.colors.text};
  display: flex;
  justify-content: center;
  padding: 1rem;

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: ${p => p.theme.bp.desktop};
    width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h3 {
    margin: 0;
  }

  .left {
    align-items: center;
    display: flex;

    ::before {
      color: ${p => p.theme.colors.textMuted};
      content: '#';
      display: inline-block;
      margin-right: 0.5rem;
      height: auto;
      width: auto;
      font-size: 2rem;
    }
  }

  .right {
    button {
      margin-left: 1rem;
    }
  }
`;
