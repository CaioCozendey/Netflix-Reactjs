import React from 'react';
import categorias from './api';
import './App.css';
import Row from './components/Row';

export default () =>{
  return (
    <div className="App">
      {/* Navbar */}
      {/* Destaque */}
      {/* Em alta */}
      {categorias.map((category) => {
        return (
          <Row 
            key={category.name} 
            title={category.title} 
            path={category.path}
          />
        );
      })}
    </div>
  );
}

const url = "https://api.themoviedb.org/3/movie/550?api_key=1c86c74000988826f87edffcca8bba40"