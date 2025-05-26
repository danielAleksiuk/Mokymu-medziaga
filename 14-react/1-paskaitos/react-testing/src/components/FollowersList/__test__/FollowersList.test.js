import { fireEvent, render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList/>
        </BrowserRouter>
    )
}

describe('followersList component testing', () => {
    test('render one follower', async () => {
        render(<MockFollowersList/>);

        const followerDivElement = await screen.findByTestId(
            'follower-item-0'
        );

        expect(followerDivElement).toBeInTheDocument()
    })

    test('render 5 followers ', async ()=> {
        render(<MockFollowersList/>)

        const followerDivElements = await screen.findAllByTestId(/follower-item/i)

        expect(followerDivElements.length).toBe(5)
    })


});