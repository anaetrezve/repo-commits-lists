import { FC } from 'react';
import SingleCommit from '../components/SingleCommit';

const Commits: FC = () => (
  <div className="commits">
    <SingleCommit
      commitId="1"
      authorName="kdjf"
      message="ksjdfkj"
      date="23134"
    />
  </div>
);

export default Commits;
