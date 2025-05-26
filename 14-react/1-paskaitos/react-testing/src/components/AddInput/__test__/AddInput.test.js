import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetToDo = jest.fn();

describe(('AddInput component testing'), () => {
    test('renders input element', () => {
        render(<AddInput todos={[]} setTodos={mockedSetToDo}/>);
        expect(
            screen.getByPlaceholderText('Add a new task here...')
        ).toBeInTheDocument();
    });

    test('should be able to type into input', () => {
        render(<AddInput todos={[]} setTodos={mockedSetToDo}/>);
        const inputElement = screen.getByPlaceholderText('Add a new task here...');
        fireEvent.change(inputElement, {target: {value: 'buy water'}});

        expect(inputElement.value).toBe('buy water');
    })

    test('input should be empty after button click', () => {
        render(<AddInput todos={[]} setTodos={mockedSetToDo}/>);
        const inputElement = screen.getByPlaceholderText('Add a new task here...');
        const buttonElement = screen.getByRole('button', {name: 'Add'})
        fireEvent.change(inputElement, {target: {value: 'buy water'}});
        fireEvent.click(buttonElement);

        expect(inputElement.value).toBe('');
    })
});