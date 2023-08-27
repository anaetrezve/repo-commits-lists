import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Author from '../../components/author/Author';
import ChangedFileComponent from '../../components/changedFile/ChangedFile';
import CommitStat from '../../components/stats/CommitStat';
import { OWNER, REPO } from '../../constants';
import useCommit from '../../hooks/useCommit';
import './CommitDetails.css';

const CommitDetails: FC = () => {
  const { commitId } = useParams();
  const { commit, error, loading } = useCommit({
    repo: REPO,
    owner: OWNER,
    commitId: commitId as string,
  });

  const hasCommitData = !error && !loading && Object.keys(commit).length;

  return (
    <div className="commit-details">
      {loading ? <p>Loading...</p> : null}
      {error ? <h3>{error}</h3> : null}
      {hasCommitData ? (
        <>
          <p>
            <strong>Commit Id: </strong>
            {commit.id}
          </p>

          <CommitStat
            total={commit.stats.total}
            additions={commit.stats.additions}
            deletions={commit.stats.deletions}
          />

          <h3>Commit Message: </h3>
          <p className="message">{commit.message}</p>
          <h3>Commit Author: </h3>
          <Author name={commit.authorName} avatarUrl={commit.authorAvatar} />

          <div className="changed-files">
            <h3>List of changed files: </h3>
            {commit.changedFiles?.map((file) => (
              <ChangedFileComponent
                key={file.name}
                name={file.name}
                additions={file.additions}
                deletions={file.deletions}
                status={file.status}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CommitDetails;
