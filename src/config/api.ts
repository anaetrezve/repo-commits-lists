const baseUrl = 'https://api.github.com';
const baseHeaders: HeadersInit = {
  Accept: 'application/vnd.github+json',
  Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN as string}`,
  'X-GitHub-Api-Version': '2022-11-28',
};

export const api = {
  get: (url: string, options: RequestInit = {}): Promise<Response> => {
    const headers = {
      ...baseHeaders,
      ...(options.headers || {}),
    };

    return fetch(`${baseUrl}/${url}`, {
      ...options,
      headers,
    });
  },
};
