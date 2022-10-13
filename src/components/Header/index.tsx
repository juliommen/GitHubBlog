import { HeaderContainer } from './styles'
import leftEffect from '../../assets/effect-left.svg'
import rightEffect from '../../assets/effect-right.svg'
import logo from '../../assets/logo.svg'
import rectangle from '../../assets/rectangle.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={leftEffect} alt="" />
      <img src={logo} alt="" />

      <img src={rightEffect} alt="" />
      <img src={rectangle} alt="" />
    </HeaderContainer>
  )
}
