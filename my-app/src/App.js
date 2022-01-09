import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />} />
        </Routes>
      </BrowserRouter>

    )
  }
}

export default App;
