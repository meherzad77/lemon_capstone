import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
test('renders booking form', () => {
  
  render(
    <BrowserRouter>
      <App />
  </BrowserRouter>
  );
  const linkElement = screen.getByText("Reserve a Table");
  expect(linkElement).toBeInTheDocument(); 
  fireEvent.click(linkElement);
  const selectElement = screen.getByTestId("res-time");
  const expected_times= ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  /*concatenate the expected times into a string*/
  const expected_times_string = expected_times.join('');
  expect(selectElement).toHaveTextContent(expected_times_string);

});