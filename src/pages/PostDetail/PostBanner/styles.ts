import styled from 'styled-components'

export const PostBannerContainer = styled.main`
  width: 100%;
  height: 10.5rem;
  border-radius: 10px;
  max-width: 864px;
  background-color: ${(props) => props.theme.profile};
  margin: -5.5rem auto 0;
  padding: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme.blue};
      font-weight: bold;
      font-size: 0.75rem;
      text-decoration: none;
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      border-bottom: 1px solid transparent;

      svg {
        width: 0.75rem;
        height: auto;
        line-height: 0;
        font-size: 0;
      }
    }

    a:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }

  h1 {
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.title};
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    p {
      color: ${(props) => props.theme.span};
      font-size: 1rem;

      svg {
        margin-right: 0.5rem;
        color: ${(props) => props.theme.span};
        width: 1.125rem;
        height: 1.125rem;
      }
    }
  }
`
