import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('app js h1 test', () => {
  render(<App />)
  const element = screen.getByText('Todo List')
  expect(element).toBeInTheDocument()
});

test('app js input test', () => {
  render(<App />)
  const element = screen.getByTestId('test')
  expect(element).toBeInTheDocument()
});

test('app js button test', () => {
  render(<App />)
  const element = screen.getByRole('button')
  expect(element).toBeInTheDocument()
})
