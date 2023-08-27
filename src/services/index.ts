import { api } from '../config/api';
import { File, SingleCommitResponse } from '../interfaces';
import {
  Commit,
  CommitDetail,
  CommitRes,
  CommitsRes,
  Repo,
  SingleCommitPayload,
} from '../interfaces/commit';
import { CommitResponse } from '../interfaces/githubCommitsResponse';
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

export const getCommit = async ({
  owner,
  repo,
  commitId,
}: SingleCommitPayload): Promise<CommitRes> => {
  try {
    const endpoint = `repos/${owner}/${repo}/commits/${commitId}`;
    const res = await api.get(endpoint);

    if (!res.ok) {
      throw new Error(getErrorMessage(res.status));
    }

    const result = (await res.json()) as SingleCommitResponse;

    const commit: CommitDetail = {
      id: result.sha,
      message: result.commit.message,
      authorName: result.commit.author.name,
      authorAvatar: result.author.avatar_url,
      commitDate: result.commit.author.date,
      stats: result.stats,
      changedFiles: result.files.map((file: File) => ({
        name: file.filename,
        status: file.status,
        additions: file.additions,
        deletions: file.deletions,
      })),
    };

    return {
      commit,
      error: false,
      errorMessage: '',
    };
  } catch (error: any) {
    return {
      commit: {} as CommitDetail,
      error: true,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      errorMessage: error.message as string,
    };
  }
};
