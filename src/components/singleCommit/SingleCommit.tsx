import { FC } from 'react';
import { trimText } from '../../utils';
import './SingleCommit.css';

interface SingleCommitProps {
  authorName: string;
  message: string;
  date: string;
}

const SingleCommit: FC<SingleCommitProps> = ({ authorName, message, date }) => (
  <div className="single-commit">
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
  </div>
);

export default SingleCommit;
