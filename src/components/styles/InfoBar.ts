import styled from 'styled-components';

export const StyledInfoBar = styled.div`
  background-color: ${p => p.theme.colors.bgDark};
  box-shadow: 0 2px 6px ${p => p.theme.colors.bgDarker};
  color: ${p => p.theme.colors.text};
  display: flex;
  justify-content: center;
  padding: 1rem;

  .container {
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    max-width: ${p => p.theme.bp.desktop};
    width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .left {
    align-items: center;
    display: flex;

    a {
      :hover,
      :active,
      :focus {
        color: ${p => p.theme.colors.textMuted};
      }

      h2 {
        margin: 0;
      }
    }

    #hash,
    h3 {
      color: ${p => p.theme.colors.textMuted};
    }

    #hash {
      font-size: 1.8rem;
      margin-left: 1rem;
      margin-right: 0.25rem;
    }

    h3 {
      margin: 0;
      max-width: 30vw; /* clip to leave room for other stuff */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      @media screen and (min-width: ${p => p.theme.bp.tablet}) {
        max-width: none;
      }
    }
  }

  .right {
    align-items: center;
    display: flex;

    > svg {
      fill: ${p => p.theme.colors.textMuted};
      height: 1.5rem;
      margin-right: 0.5rem;
      width: 1.5rem;
    }

    button {
      margin-left: 1rem;
    }
  }
`;
