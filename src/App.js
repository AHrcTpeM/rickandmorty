import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Main from './pages/main/main';
import Info from './pages/info/info';
import NotFound from './pages/notfound/notfound';
import Auth from './components/auth/auth';

function App() {
  const [pageNumber, setPageNumber] = useState(+localStorage.getItem("targetPage") ?? 1);
  const [search, setSearch] = useState(localStorage.getItem("targetName") ?? "");
  const [idCharacter, setIdCharacter] = useState(localStorage.getItem("targetId") ?? 1);

  const onClickCard = (id) => {
    window.scrollTo({ top: 0 });
    setIdCharacter(id);
    localStorage.setItem("targetId", id);
  };

  const changPage = (page) => {
    setPageNumber(page);
    localStorage.setItem("targetPage", page);
  }

  const onChangeInput = (e) => {
    changPage(1);
    setSearch(e.target.value);      
    localStorage.setItem("targetName", e.target.value);
  }

  let [fetchedData, updateFetchedData] = useState([]);
  let { results, error, info } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      if (data.error) {
        updateFetchedData({...data, results: []});
      } else {
        updateFetchedData(data);
      }
    })();
  }, [api]);

  if (results) {
    return (
      <>
        <Auth />
        <BrowserRouter>        
          <Routes>
            <Route path='/' element={
              <Main 
                onChange={onChangeInput}
                onClick={onClickCard} 
                changPage={changPage}
                search={search} 
                results={results.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)}
                page={pageNumber} 
                maxPage={info?.pages}
                error={error}
              />}
            />
            <Route path='/info' element={
              <Info 
                onClick={onClickCard} 
                result={results.find((e) => e.id === +idCharacter) ?? results[0]} 
              />}
            />
            <Route path='*' element={
              <NotFound onClick={onClickCard} />} 
            />
          </Routes>
        </BrowserRouter>
      </>
      
    );
  }
}

export default App;
