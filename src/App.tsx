import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import CommitDetails from './containers/commitDetails/CommitDetails';
import Commits from './containers/commits/Commits';
import Layout from './layouts/Layout';
import NoMatch from './layouts/NoMatch';

const App: FC = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Commits />} />
        <Route path="commits/:commitId" element={<CommitDetails />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </div>
);

export default App;
