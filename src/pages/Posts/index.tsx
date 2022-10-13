import { NavLink } from 'react-router-dom'
import { ProfileBanner } from './ProfileBanner'
import { SearchForm } from './SearchForm'
import { PostsContainer } from './styles'
export function Posts() {
  return (
    <div>
      <ProfileBanner />
      <SearchForm />
      <PostsContainer>
        <NavLink to="/post-detail">
          <div>
            <h1>Exercitationem, doloremque. Repellendus, asperiores!</h1>
            <p>Há 1 dia</p>
          </div>
          <main>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            veniam earum quas molestiae iusto nesciunt aliquam illo? Commodi
            maiores corporis rerum minima suscipit nam quis ratione,
            perferendis, deserunt molestiae dolorem!
          </main>
        </NavLink>
        <NavLink to="/post-detail">
          <div>
            <h1>Exercitationem, doloremque. Repellendus, asperiores!</h1>
            <p>Há 1 dia</p>
          </div>
          <main>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            veniam earum quas molestiae iusto nesciunt aliquam illo? Commodi
            maiores corporis rerum minima suscipit nam quis ratione,
            perferendis, deserunt molestiae dolorem!
          </main>
        </NavLink>
        <NavLink to="/post-detail">
          <div>
            <h1>Exercitationem, doloremque. Repellendus, asperiores!</h1>
            <p>Há 1 dia</p>
          </div>
          <main>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            veniam earum quas molestiae iusto nesciunt aliquam illo? Commodi
            maiores corporis rerum minima suscipit nam quis ratione,
            perferendis, deserunt molestiae dolorem!
          </main>
        </NavLink>
      </PostsContainer>
    </div>
  )
}
