import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path = "/" component={MovieList} />
        <Route path="/movies/:title" component = {Movie} />
      </div>
    </div>
  );
};

export default App;
