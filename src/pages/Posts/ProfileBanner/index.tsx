import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ProfileBannerContainer } from './styles'
export function ProfileBanner() {
  return (
    <ProfileBannerContainer>
      <img src="https://github.com/juliommen.png" alt="" />
      <section>
        <div>
          <header>
            <h1>Júlio Mendonça da Costa</h1>
            <a
              href="https://github.com/juliommen"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB{' '}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
              ></FontAwesomeIcon>
            </a>
          </header>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            delectus!
          </h2>
        </div>
        <footer>
          <p>
            <FontAwesomeIcon icon={faGithub} /> juliommen
          </p>

          <p>
            <FontAwesomeIcon icon={faBuilding} /> Freelancer developer
          </p>

          <p>
            <FontAwesomeIcon icon={faUserGroup} /> 20 seguidores
          </p>
        </footer>
      </section>
    </ProfileBannerContainer>
  )
}
