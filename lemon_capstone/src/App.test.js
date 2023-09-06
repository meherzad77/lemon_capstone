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
  /*set the date to 2023-09-05 */
  const dateElement = screen.getByTestId("res-date");
  fireEvent.change(dateElement, {target: {value: '2023-09-05'}});


  const selectElement = screen.getByTestId("res-time");
  const expected_times= ['17:00', '17:30', '18:00','19:30', '20:30', '21:00', '21:30'];
  /*concatenate the expected times into a string*/
  const expected_times_string = expected_times.join('');
  expect(selectElement).toHaveTextContent(expected_times_string);

});