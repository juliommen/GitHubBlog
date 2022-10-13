import styled from 'styled-components'

export const PostsContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 3rem auto 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;

  a {
    display: block;
    width: 26rem;
    padding: 2rem;
    background-color: ${(props) => props.theme.post};
    border-radius: 10px;
    height: 16.25rem;
    cursor: pointer;
    text-decoration: none;

    div {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 1.25rem;

      h1 {
        font-size: 1.25rem;
        font-weight: bold;
        color: ${(props) => props.theme.title};
      }

      p {
        margin-top: 0.3125rem;
        flex: 1;
        white-space: nowrap;
        color: ${(props) => props.theme.span};
      }
    }

    main {
      font-size: 1rem;
      color: ${(props) => props.theme.text};
      max-lines: 4;
      overflow-y: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }

  a:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.label};
  }
`
