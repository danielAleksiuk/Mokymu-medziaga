import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('header component test', () => {
    test('renders same text passed into title props', () => {
        render(<Header title="my header" />);
        const header = screen.getByText(/my header/i);
        expect(header).toBeInTheDocument();
    });

    it('is a heading', () => {
        render(<Header title="my header" />);

        expect(
            screen.getByRole('heading')
        ).toBeInTheDocument();
    });

    test('renders same text passed into title prop', () => {
        render(<Header title="my header" />);
        expect(
            screen.queryByText(/dogs/i)
        ).not.toBeInTheDocument();
    } )
})



describe('aritmetiiai skaiciavimai:', () => {
    test('2 *3 yra 6', () => {
        expect(2 * 3).toBe(6);
    })
    test('2 + 3 yra 5', () => {
        expect(2 + 3).toBe(5);
    })
});