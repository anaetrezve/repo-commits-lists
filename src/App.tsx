import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Commits from './containers/Commits';
import Layout from './layouts/Layout';
import NoMatch from './layouts/NoMatch';

const App: FC = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Commits />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </div>
);

export default App;
