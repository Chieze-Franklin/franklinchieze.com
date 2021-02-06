import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render, fireEvent, waitFor, } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Resume } from './Resume';

afterEach(cleanup);

const ResumeWithRouter = () => (
  <MockedProvider addTypename={false}>
    <Router>
      <Resume />
    </Router>
  </MockedProvider>
  
);

describe('Resume Page', () => {
  test('should render default resume page', () => {
    const { getByText } = render(<ResumeWithRouter />);
    expect(getByText(/Resume/)).toBeInTheDocument();
  });

  test('should allow Input editable', () => {
    const { getByTestId } = render(<ResumeWithRouter />);
    const input = getByTestId('resume-input');
    waitFor(() => {
      fireEvent.change(input, { target: { value: '110' } });
    });
    expect(input).toHaveValue('110');
  });
  
});
