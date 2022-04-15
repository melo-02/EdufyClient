
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Signup from './Pages/Signup';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Navigation from './Pages/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Pages/Signup';


test ('renders registration page', async () => {
    render(<Signup/>);
    const loginElement = screen.getByText(/Sign up/);
    expect(loginElement).toBeInTheDocument();
});


test ('renders homepage', async () => {
    render(<Home/>);
    const homeElement = screen.getByText(/Welcome to Edufy!/);
    expect(homeElement).toBeInTheDocument();
});

