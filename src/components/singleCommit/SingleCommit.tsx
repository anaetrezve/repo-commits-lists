import { FC } from 'react';
import { Link } from 'react-router-dom';
import { trimText } from '../../utils';
import './SingleCommit.css';

interface SingleCommitProps {
  authorName: string;
  message: string;
  date: string;
  id: string;
}

const SingleCommit: FC<SingleCommitProps> = ({
  authorName,
  message,
  date,
  id,
}) => (
  <div className="single-commit">
    <Link to={`commits/${id}`}>
      <div className="message">
        <p>
          <strong>Commit Message: </strong>
          {trimText(message, 120)}
        </p>
      </div>

      <div className="author-name">
        <strong>Author: </strong>
        {authorName}
      </div>

      <div className="commit-date">
        <strong>Date: </strong>
        {new Date(date).toLocaleString()}
      </div>
    </Link>
  </div>
);

export default SingleCommit;
