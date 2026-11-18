import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './components/App';

afterEach(() => localStorage.clear());

test('renders the operational status and no incidents from cached issues', () => {
  const fetchedAt = new Date().toISOString();
  localStorage.setItem('issueStatusLastFetchcomponent', fetchedAt);
  localStorage.setItem('issueStatusLastFetchincident', fetchedAt);
  localStorage.setItem(
    'issueStatuscomponent',
    JSON.stringify([{ id: 1, title: 'API', labels: [{ name: 'operational' }] }])
  );
  localStorage.setItem('issueStatusincident', '[]');

  render(<App />);

  expect(
    screen.getByRole('heading', { name: 'All Systems Operational' })
  ).toBeInTheDocument();
  expect(screen.getByText('API')).toBeInTheDocument();
  expect(screen.getByText('No Incidents found.')).toBeInTheDocument();
});
