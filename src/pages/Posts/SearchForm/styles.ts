import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 4.5rem auto 0;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.125rem;
      color: ${(props) => props.theme.subtitle};
      font-weight: bold;
    }
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.span};
    }
  }

  form {
    margin-top: 0.75rem;

    input {
      width: 100%;
      border-radius: 6px;
      background-color: ${(props) => props.theme.input};
      border: 1px solid ${(props) => props.theme.border};
      padding: 0.75rem 1rem;
      color: ${(props) => props.theme.text};
    }

    input:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }

    input:placeholder {
      color: ${(props) => props.theme.label};
    }
  }
`
