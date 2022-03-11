import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import App from './App';

//router imports
import CharacterList from './CharacterList';
import Character from './Character';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="characterlist" element={<CharacterList />} />
          <Route path="characters/:characterID" element={<Character />} />
        </Route>
      </Routes>
    </BrowserRouter>,

  </React.StrictMode>,
  document.getElementById('root')
);


