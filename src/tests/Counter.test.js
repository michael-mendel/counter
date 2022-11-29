// import necessary react testing library helpers here
// import the Counter component here
// import { render, screen, fireEvent } from '@testing-library/react';
import Counter from "../components/Counter";

beforeEach(() => {
  // // Render the Counter component here
  //   render(<Counter />);
      render(<App />);

});

test('renders counter message', () => {
  // // Complete the unit test below based on the objective in the line above
  // const counterMessage = screen.getByText(/Counter/i);
  // expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // // Complete the unit test below based on the objective in the line above
  // const countNum = parseInt(screen.getByTestId('count').textContent);
  // expect(countNum).toBe(0);
  
});

test('clicking + increments the count', () => {
  // // Complete the unit test below based on the objective in the line above
  // const countNum_before = parseInt(screen.getByTestId('count').textContent);

  // const incButton = screen.getByText('+');
  // fireEvent.click(incButton)

  // const countNum_after = parseInt(screen.getByTestId('count').textContent);

  // const diff = countNum_after - countNum_before
  // expect(diff).toBe(1)
});

test('clicking - decrements the count', () => {
  // // Complete the unit test below based on the objective in the line above
  // const countNum_before = parseInt(screen.getByTestId('count').textContent);

  // const decButton = screen.getByText('-');
  // fireEvent.click(decButton)

  // const countNum_after = parseInt(screen.getByTestId('count').textContent);

  // const diff = countNum_after - countNum_before
  // expect(diff).toBe(-1)
});
