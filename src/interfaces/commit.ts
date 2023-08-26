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

export interface CommitsRes {
  commits: Commit[];
  error: boolean;
  errorMessage: string;
}
