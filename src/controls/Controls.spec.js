// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Controls from './Controls';
import "jest-dom/extend-expect";
import Dashboard from '../dashboard/Dashboard';

test('should render to default', () => {
  const toggleLocked = jest.fn();
  const toggleClosed = jest.fn();
  render(
    <Controls
      toggleClosed={toggleClosed}
      toggleLocked={toggleLocked}
      />
  );.0
});

test('closed when locked', () => {
  const toggleClosed = jest.fn();
  const {getByText} = render(<Controls toggleClosed={toggleClosed}/>);

  const locked = getByText(/lock/i);
  
  fireEvent.click(locked);
  
  expect(toggleClosed).toHaveBeenCalledTimes(0);
}
);

describe('controls testing', ()=> {
  it('should render controls without crashing', () => {
    render(<Controls/>);
  })
  it('should render lock gate and close when locked and closed are false', ()=>{
    const {getByText} = render(<Controls closed={false} locked={false}/>)
    getByText(/Lock gate/i);
    getByText(/close gate/i)
  })
  it('should render unlock gate and open gate as true', ()=>{
    const {getByText} = render(<Controls closed={true} locked={true}/>)
    getByText(/unlock gate/i);
    getByText(/open gate/i)
  })
})

