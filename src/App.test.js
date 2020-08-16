import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('should render App', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
});
