import { SearchFormContainer } from './styles'
export function SearchForm() {
  return (
    <SearchFormContainer>
      <header>
        <h1>Publicações</h1>
        <p>6 publicações</p>
      </header>
      <form action="">
        <input type="text" name="post" placeholder="Buscar conteúdo" />
      </form>
    </SearchFormContainer>
  )
}
