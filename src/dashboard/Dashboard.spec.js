// Test away
import React from 'react';
import {render} from '@testing-library/react';

import Dashboard from './Dashboard';
import { getByTestId } from 'react-testing-library';

test('renders without crashing', () => {
  render(<Dashboard />);
});

test('contains close and open', () => {
  const {getByText} = render(<Dashboard />);
  getByText(/open/i);
  getByText(/close/i);
});

