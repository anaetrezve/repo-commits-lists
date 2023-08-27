import { render, screen } from '@testing-library/react';
import Author from './Author';

test('should render author with avatar', () => {
  render(<Author name="TestName" avatarUrl="https://placehold.it/50" />);
  const element = screen.getByTestId('author-avatar');
  expect(element).toBeInTheDocument();
});
