import { FC } from 'react';
import SingleCommit from '../../components/singleCommit/SingleCommit';
import useCommits from '../../hooks/useCommits';
import './Commits.css';

const OWNER = 'facebook';
const REPO = 'react';

const Commits: FC = () => {
  const { commits, error, loading } = useCommits({ repo: REPO, owner: OWNER });

  return (
    <div className="commits">
      <h2>Commits for repository {REPO}</h2>
      {loading && <p>Loading...</p>}

      {error && <h3>{error}</h3>}

      {!loading &&
        commits.map((commit) => (
          <SingleCommit
            key={commit.id}
            id={commit.id}
            authorName={commit.authorName}
            message={commit.message}
            date={commit.date}
          />
        ))}
    </div>
  );
};

export default Commits;
