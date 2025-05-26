import { fireEvent, render, screen } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
};

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText('Add a new task here...');
    const buttonElement = screen.getByRole('button', {name: 'Add'});

    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: {value: task}});
        fireEvent.click(buttonElement);
    });
};


describe('todo component tests', () => {
    test('renders same text passed into ttitle prop', () => {
        render(<MockTodo/>);
        addTask(['buy milk']);
        
        const divElement = screen.getByText('buy milk');
        expect(divElement).toBeInTheDocument();
    });

    test('render multiple items', () => {
        render(<MockTodo/>);
        addTask(['a', 'b', 'c']);
        const divElements = screen.getAllByTestId('task-container');

        expect(divElements.length).toBe(3)
    })

    test('should not have completed task status', () => {
        render(<MockTodo/>);

        addTask(['buy tea']);
        const divElement = screen.getByText('buy tea');
        expect(divElement).not.toHaveClass('todo-item-active');
    })

    test('should have active class when clicked', () => {
        render(<MockTodo/>);
        addTask(['buy coffee']);
        const divElement = screen.getByText('buy coffee');
        fireEvent.click(divElement);

        expect(divElement).toHaveClass('todo-item-active')
    })
})