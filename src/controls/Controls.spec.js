// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Controls from './Controls';

test('should render to default', () => {
  const toggleLocked = jest.fn();
  const toggleClosed = jest.fn();
  render(
    <Controls
      toggleClosed={toggleClosed}
      toggleLocked={toggleLocked}
      />
  );
});

test('closed when locked', () => {
  const toggleClosed = jest.fn();
  const {getByText} = render(<Controls toggleClosed={toggleClosed}/>);

  const locked = getByText(/locked/i);
  
  fireEvent.click(locked);
  expeect(toggleClosed).toHaveBeenCalled();
}
);