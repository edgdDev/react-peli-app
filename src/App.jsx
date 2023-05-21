import { Footer, ListSerie, Navbar, SearchComponent } from './components';
import { useActions } from './hook';

function App() {

  const [
    { searchQuery, listTvShows, pagination, isLoading, totalPages }, 
    { handleInputSearch, handlePageChange }
  ] = useActions();
  
  return (
    <>
      <Navbar />
      <SearchComponent
        handleInputSearch={ handleInputSearch }
        searchQuery={ searchQuery }
      />
      <ListSerie
        listTvShows={ listTvShows }
        pagination={ pagination }
        totalPages={ totalPages }
        isLoading={ isLoading }
        handlePageChange={ handlePageChange }
      />
      <Footer />
    </>
  )
}

export default App
