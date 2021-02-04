import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { Header } from './Header';

afterEach(cleanup);

const HeaderWithRouter = () => (
  <Router>
    <Header />
  </Router>
);

describe('Header', () => {
  test('should render Header Component', () => {
    const { getByText } = render(<HeaderWithRouter />);
    expect(getByText(/Yutars/)).toBeInTheDocument();
  });
  
});
