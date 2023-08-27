import { FC } from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';

const NoMatch: FC = () => (
  <div className="no-match">
    <h1>Not found</h1>
    <p>
      go back to commits page <Link to="/">Back</Link>
    </p>
  </div>
);

export default NoMatch;
