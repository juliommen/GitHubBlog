import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 18.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${(props) => props.theme.profile};
  position: relative;
  z-index: -1;

  img:nth-child(1) {
    width: 25.5625rem;
    height: auto;
    margin-top: 4.375rem;
    z-index: -1;
  }
  img:nth-child(2) {
    width: 9.25rem;
    height: auto;
    margin-top: 4rem;
  }
  img:nth-child(3) {
    width: 23.1875rem;
    height: auto;
    margin-top: 1.875rem;
    z-index: -1;
  }

  img:nth-child(4) {
    width: 56rem;
    height: auto;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    bottom: 9px;
  }
`
