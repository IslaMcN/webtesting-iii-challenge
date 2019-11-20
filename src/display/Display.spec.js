// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';
import Display from './Display';

import 'jest-dom/extend-expect';


test('renders correctly', () => {
    render(<Display />);
});

describe('testing the display component', ()=>{
    it('renders without erros', ()=>{
        render(<Display/>)
    })
})