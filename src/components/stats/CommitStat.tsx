import { FC } from 'react';
import { Stats } from '../../interfaces';
import './CommitStat.css';

const CommitStat: FC<Stats> = ({ total, additions, deletions }) => (
  <div className="stats" data-testid="commit-stats">
    <span>
      <strong>Total file Changed: </strong>
      {total}
    </span>
    <span>
      <strong>Total Additions: </strong>
      {additions}
    </span>
    <span>
      <strong>Total Deletions: </strong>
      {deletions}
    </span>
  </div>
);

export default CommitStat;
