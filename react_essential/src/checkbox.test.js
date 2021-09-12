import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from './checkbox';
import React from 'react';

test('Selecting checkbox', () => {
  const { getByLabelText } = render(<Checkbox />);
  const checkbox = getByLabelText(/not checked/);
  // dispatch the click event to ensure the value changes
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
})
