// Test away
import React from 'react';
import {render} from '@testing-library/react';
import 'jest-dom/extend-expect';
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

describe('dashboard component tests', ()=>{
  it('should render the dashboard', ()=>{
    render(<Dashboard />)
  })
  it('matches snapshot', ()=>{
    const {container} = render(<Dashboard/>);
    expect(container).toMatchSnapshot();
  })
})

