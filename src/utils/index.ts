export const trimText = (str: string, char = 70): string =>
  `${str.substring(0, char)}...`;

export const getErrorMessage = (statusCode: number): string => {
  switch (statusCode) {
    case 400:
      return 'Bad request';
    case 404:
      return 'Not found';
    case 409:
      return 'Conflict';
    case 500:
      return 'Internal server error';
    default:
      return 'Something went wrong';
  }
};
