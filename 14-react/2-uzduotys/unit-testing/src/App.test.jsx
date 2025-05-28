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

test('2 uzduotis', () => {
    const image = "delfi.lt";

    const ProfileImage = () => <img src={image} />

    render(<ProfileImage/>);

    expect(screen.getByRole("img")).toHaveAttribute("src", image);
});

test("3 uzduotis", () => {
    const html = 
        `<img src="https://placekitten.com/200/300" style="border: 1px solid blue;" />`;
    
    const ProfileImage = () => <div dangerouslySetInnerHTML={{ __html: html }} />;
    
    render(<ProfileImage />);
    expect(screen.getByRole("img")).toHaveAttribute(
        "style",
        "border: 1px solid blue;"
    );
});

test('4 uzduotis', () => {
    const character = {
        name: 'John',
        image: 'delfi.lt'
    };
    const Avatar = () => (
        <>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name}/>
        </>
    )

    render(<Avatar/>)
    expect(screen.getByRole('heading')).toHaveTextContent(character.name)
    expect(screen.getByRole('img')).toHaveAccessibleName(character.name)
    expect(screen.getByRole('img')).toHaveAttribute('src', character.image)
});

test('5 uzduotis', () => {
    const price = 12;

    const ProductPrice = () => <p>Price: {price.toFixed(2)}</p>

    render(<ProductPrice/>)
    expect(screen.getByText(/Price: 12.00/)).toBeInTheDocument();
});

test('6 uzduotis', ()  => {
    const html = `
        <div>
            <h1>John Doe</h1>
            <img src='delfi.lt'/>
        </div>
    `;

    const Profile = () => <div dangerouslySetInnerHTML={{__html: html}}/>
    render(<Profile/>);
   expect(screen.getByRole("heading")).toHaveTextContent(/John Doe/);
    expect(screen.getByRole("img")).toBeInTheDocument();

});

test("7 uzduotis", () => {
    const html = `<section data-testid="blueberry"><h1>BlueBerry INC</h1></section>`;

    const CustomerCard = () => <div dangerouslySetInnerHTML={{ __html: html }} />;

    render(<CustomerCard />);
    expect(screen.getByTestId("blueberry")).toBeInTheDocument();
});