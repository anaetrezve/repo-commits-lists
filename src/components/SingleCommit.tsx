import { FC } from 'react';
import { Link } from 'react-router-dom';
import AuthorName from './AuthorName';
import CommitDate from './CommitDate';
import Message from './Message';

interface SingleCommitProps {
  authorName: string;
  message: string;
  date: string;
  commitId: string;
}

const SingleCommit: FC<SingleCommitProps> = ({
  authorName,
  message,
  date,
  commitId,
}) => (
  <Link to={`/commits/${commitId}`}>
    <div className="single-commit">
      <AuthorName name={authorName} />
      <Message message={message} />
      <CommitDate date={date} />
    </div>
  </Link>
);

export default SingleCommit;
