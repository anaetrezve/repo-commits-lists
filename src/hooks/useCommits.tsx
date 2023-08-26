import { useEffect, useState } from 'react';
import { Commit, Repo } from '../interfaces/commit';
import { getCommits } from '../services';

const useCommits = ({ owner, repo }: Repo) => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getCommits({
      owner,
      repo,
    }).then((data) => {
      if (!data.error) {
        setCommits(data.commits);
        setError('');
      } else {
        setError(data.errorMessage);
      }
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    commits,
    error,
    loading,
  };
};

export default useCommits;
