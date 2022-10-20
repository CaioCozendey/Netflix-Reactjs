import React from 'react';
import categories from './api';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner'

export default () => {
   return (
      <div className="App">
         {/* Navbar */}
         {/* Destaque */}
         <Banner />
         {categories.map((category) => {
            return (
               <Row
                  key={category.name}
                  title={category.title}
                  path={category.path}
                  isLarge={category.isLarge}
               />
            );
         })}
      </div>
   );
}