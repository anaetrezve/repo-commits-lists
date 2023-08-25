const baseUrl = 'https://api.github.com';
const headers: HeadersInit = {
  Accept: 'application/vnd.github+json',
  Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN as string}`,
  'X-GitHub-Api-Version': '2022-11-28',
};

async function httpClient<T>(url: string, options: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const result = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result;
}
