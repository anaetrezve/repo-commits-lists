import { FC } from 'react';

interface CommitDateProps {
  date: string;
}

const CommitDate: FC<CommitDateProps> = ({ date }) => (
  <div className="commit-date">
    <span>{date}</span>
  </div>
);

export default CommitDate;
