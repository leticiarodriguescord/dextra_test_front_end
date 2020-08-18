import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import './index.css';
import ItemTable from '../../components/comic/index.js';
import ItemCard from '../../components/card/index.js';

const Comics = withRouter(({ history }) => {

  const [listComics, setListComics] = useState([]);
  const [allListComics, setAllListComics] = useState([]);
  const [grid, setGrid] = useState(false);

  async function fetchComment() {
    const response = await fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1430b9d4d0f6e496ae508353e63ed268&hash=ce81f37c6e301a36053eb2c3480d189e');
    const data = await response.json();
    setListComics(data.data.results);
    setAllListComics(data.data.results)
  }

  useEffect(() => {
    fetchComment();
  }, []);

  function search(value) {
    const character = [];
    if (!value) {
      setListComics(allListComics);
    } else {
      allListComics.map(item => item.characters.items.filter((item1) => {
        if(item1.name.toLowerCase().includes(value)){
          return character.push(item);
        }
      }));
      setListComics(Array.from(new Set(character)));
      // setListComics(allListComics.filter(item => item.title.toLowerCase().includes(value)).map(item => item));
    }
  }


  function handleGrid() {
    setGrid(!grid);
  }
  return (
    <div className="comic-container">
      <section className="form">
        <h1 className="comic-title">MARVEL COMICS</h1>
        <Input placeholder="Pesquise pelo nome do quadrinho" onChange={(e) => search(e.target.value ? e.target.value.toLowerCase() : '')} />
        <Button shape="round" className="button button-details" onClick={() => handleGrid()}>list/grid</Button>
        {
          !grid ?
            <ItemTable listComics={listComics} search={search} history={history} />
            :
            <ItemCard listComics={listComics} history={history} search={search} />
        }

      </section>
    </div>
  );
})

export default Comics;