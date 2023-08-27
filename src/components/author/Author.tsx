import { FC } from 'react';
import './Author.css';

interface AuthorProps {
  avatarUrl: string;
  name: string;
}

const Author: FC<AuthorProps> = ({ avatarUrl, name }) => (
  <div className="author-avatar">
    <img src={avatarUrl} alt={name} />
    <span>{name}</span>
  </div>
);

export default Author;
