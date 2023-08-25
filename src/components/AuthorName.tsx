import { FC } from 'react';

interface AuthorNameProps {
  name: string;
}

const AuthorName: FC<AuthorNameProps> = ({ name }) => (
  <span className="author-name">{name}</span>
);

export default AuthorName;
