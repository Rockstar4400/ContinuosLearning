import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
    test('render App component', () => {
        render(<App />);

        console.log(screen.debug());
    });
});