import styled from 'styled-components'

export const ProfileBannerContainer = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  height: 13.25rem;
  border-radius: 10px;
  max-width: 864px;
  background-color: ${(props) => props.theme.profile};
  margin: -5.5rem auto 0;
  padding: 2rem;
  gap: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;

  img {
    width: 9.25rem;
    border-radius: 8px;
    margin-left: 0.5rem;
  }

  section {
    margin-top: 0.5rem;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 0.5rem;

      h1 {
        font-size: 1.5rem;
        color: ${(props) => props.theme.title};
        font-weight: bold;
      }

      a {
        color: ${(props) => props.theme.blue};
        font-weight: bold;
        font-size: 0.75rem;
        text-decoration: none;

        svg {
          margin-left: 0.5rem;
          width: 0.75rem;
          height: auto;
        }
      }

      a:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }

    h2 {
      color: ${(props) => props.theme.text};
      font-size: 1rem;
    }
    footer {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.5rem;

      p {
        color: ${(props) => props.theme.subtitle};
        font-size: 1rem;

        svg {
          margin-right: 0.5rem;
          color: ${(props) => props.theme.label};
          width: 1.125rem;
          height: 1.125rem;
        }
      }
    }
  }
`
