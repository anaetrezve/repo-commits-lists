import { CommitResponse } from './githubCommitsResponse';

export interface SingleCommitResponse extends CommitResponse {
  stats: Stats;
  files: File[];
}

export interface Stats {
  total: number;
  additions: number;
  deletions: number;
}

export interface File {
  sha: string;
  filename: string;
  status: string;
  additions: number;
  deletions: number;
  changes: number;
  blob_url: string;
  raw_url: string;
  contents_url: string;
  patch: string;
}
