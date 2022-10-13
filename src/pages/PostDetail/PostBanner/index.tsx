import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { PostBannerContainer } from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostBanner() {
  return (
    <PostBannerContainer>
      <header>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>VOLTAR</p>
        </NavLink>
        <a href="https://github.com/juliommen" target="_blank" rel="noreferrer">
          <p>VER NO GITHUB</p>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>
      <h1>JavaScript data types and data structures</h1>
      <footer>
        <p>
          <FontAwesomeIcon icon={faGithub} /> juliommen
        </p>

        <p>
          <FontAwesomeIcon icon={faCalendarDay} /> Há 1 dia
        </p>

        <p>
          <FontAwesomeIcon icon={faComment} /> 5 comentários
        </p>
      </footer>
    </PostBannerContainer>
  )
}
