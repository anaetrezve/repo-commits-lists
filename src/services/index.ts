import { api } from '../config/api';
import { Commit, CommitsRes, Repo } from '../interfaces/commit';
import { CommitResponse } from '../interfaces/githubResponse';
import { getErrorMessage } from '../utils';

export const getCommits = async ({
  owner,
  repo,
}: Repo): Promise<CommitsRes> => {
  try {
    const endpoint = `repos/${owner}/${repo}/commits`;
    const res = await api.get(endpoint);

    if (!res.ok) {
      throw new Error(getErrorMessage(res.status));
    }

    const result = (await res.json()) as CommitResponse[];

    const commits: Commit[] = result.map((c: CommitResponse) => ({
      id: c.sha,
      authorName: c.commit.author.name,
      date: c.commit.author.date,
      message: c.commit.message,
    }));

    return {
      commits,
      error: false,
      errorMessage: '',
    };
  } catch (error: any) {
    return {
      commits: [],
      error: true,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      errorMessage: error.message as string,
    };
  }
};
