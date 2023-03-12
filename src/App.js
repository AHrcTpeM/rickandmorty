import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Main from './pages/main/main';
import Info from './pages/info/info';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState(localStorage.getItem("targetName") ?? "");
  const [idCharacter, setIdCharacter] = useState(localStorage.getItem("targetId") ?? 1);

  const onClickCard = (id) => {
    setIdCharacter(id);
    localStorage.setItem("targetId", id);
  };

  const onChangeInput = (e) => {
      setPageNumber(1);
      setSearch(e.target.value);      
      localStorage.setItem("targetName", e.target.value);
  }
  const changPage = (i) => {
    setPageNumber(i);
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
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
