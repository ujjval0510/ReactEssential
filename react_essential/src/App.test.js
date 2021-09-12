import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

  const { getByText } = render(<App />);
  const h1 = getByText(/Hello React testing/);
  expect(h1).toHaveTextContent("Hello React testing");

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  /**  Assertion test : return pass or fail, it return pass when
   *   a function's output returns an expected value.
   expect(timesTwo(4)).toBe(8);
  */
});
