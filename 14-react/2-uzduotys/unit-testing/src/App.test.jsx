import {  test, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

test('2 +2 = 4', () => {
    expect(2+2).toBe(4);
})


test('1 uzduotis', () => {
    const name = "John";

    const HelloWorld = () => <p>Hello, {name}</p>;

    render(<HelloWorld/>);
    expect(screen.getByText('Hello, John')).toBeInTheDocument();
});