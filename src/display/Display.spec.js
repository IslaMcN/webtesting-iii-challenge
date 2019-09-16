// Test away!
import React from 'react';
import renderer from 'react-test-renderer';

import Display from './Display';
import { render } from '@testing-library/react';

test('renders correctly', () => {
    render(<Display />);
});

test('message renders upon success', async () => {
    const { queryByText} = render(<Display />);
    expect(queryByText(/success!/i)).toBeNull();
    
})