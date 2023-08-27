import { useEffect, useState } from 'react';
import { CommitDetail, SingleCommitPayload } from '../interfaces';
import { getCommit } from '../services';

const useCommit = ({ repo, owner, commitId }: SingleCommitPayload) => {
  const [commitData, setCommitData] = useState<CommitDetail>(
    {} as CommitDetail
  );
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getCommit({
      repo,
      owner,
      commitId,
    }).then((data) => {
      if (!data.error) {
        setCommitData(data.commit);
      } else {
        setError(data.errorMessage);
      }
      setLoading(false);
    });
  }, []);

  return {
    commit: commitData,
    error,
    loading,
  };
};

export default useCommit;
