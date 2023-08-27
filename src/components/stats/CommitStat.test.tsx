import { render, screen } from '@testing-library/react';
import CommitStat from './CommitStat';

test('should render commit stats', () => {
  render(<CommitStat total={10} additions={100} deletions={20} />);
  const statElement = screen.getByTestId('commit-stats');
  expect(statElement).toBeInTheDocument();
});
