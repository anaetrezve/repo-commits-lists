import { Stats } from './githubCommitResponse';

export interface GetCommitsProps {
  owner: string;
  repo: string;
}

export interface Commit {
  authorName: string;
  message: string;
  date: string;
  id: string;
}

export interface Repo {
  owner: string;
  repo: string;
}

export interface SingleCommitPayload extends Repo {
  commitId: string;
}

export interface CommitResult {
  error: boolean;
  errorMessage: string;
}

export interface CommitsRes extends CommitResult {
  commits: Commit[];
}

export interface ChangedFile {
  name: string;
  status: string;
  additions: number;
  deletions: number;
}
export interface CommitDetail {
  id: string;
  message: string;
  authorName: string;
  authorAvatar: string;
  commitDate: string;
  stats: Stats;
  changedFiles: ChangedFile[];
}

export interface CommitRes extends CommitResult {
  commit: CommitDetail;
}
