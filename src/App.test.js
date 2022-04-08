
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Pages/Login';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Navigation from './Pages/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';


test ('renders registration page', async () => {
    render(<Login/>);
    const loginElement = screen.getByText(/User Login/);
    expect(loginElement).toBeInTheDocument();
});

test ('renders footer', async () => {
    render(<Footer/>);
    const footerElement = screen.getByText(/Edufy 2022/);
    expect(footerElement).toBeInTheDocument();
});

test ('renders homepage', async () => {
    render(<Home/>);
    const homeElement = screen.getByText(/Welcome to Edufy!/);
    expect(homeElement).toBeInTheDocument();
});

