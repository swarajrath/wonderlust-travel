import React from 'react';
import Home from './../components/Home';
import Navbar from './../components/Navbar';
import '@testing-library/jest-dom';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';

afterEach(cleanup);

test("Text Displayed is Correct", ()=> {
    const { getByTestId } = render(<Home></Home>);
    const buttonNode = getByTestId("bookButton");
    expect(buttonNode.textContent).toBe("Book Deals");
});

test("Navbar Button Working Properly", ()=> {
    const { getByTestId } = render(<Navbar></Navbar>);
    const buttonNode = getByTestId("aboutNavbarBtn");
    expect(buttonNode.textContent).toBe("Hello World");
});