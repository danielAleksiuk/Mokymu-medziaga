import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
        </BrowserRouter>
    )
}


describe(('testing TodoFooter component'), ()=> {
    test('render correct amount of incomplete tasks', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5}/>);
        const paragraphElement = screen.getByText('5 tasks left');

        expect(paragraphElement).toBeInTheDocument();
    })
});