import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render, fireEvent, waitFor, } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Search } from './Search';

afterEach(cleanup);

const SearchWithRouter = () => (
  <MockedProvider addTypename={false}>
    <Router>
      <Search />
    </Router>
  </MockedProvider>
  
);

describe('Search Page', () => {
  test('should render default search page', () => {
    const { getByText } = render(<SearchWithRouter />);
    expect(getByText(/Search/)).toBeInTheDocument();
  });

  test('should allow Input editable', () => {
    const { getByTestId } = render(<SearchWithRouter />);
    const input = getByTestId('search-input');
    waitFor(() => {
      fireEvent.change(input, { target: { value: '110' } });
    });
    expect(input).toHaveValue('110');
  });
  
});
