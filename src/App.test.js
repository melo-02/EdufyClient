
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Pages/Login';

test ('renders link to login', async () => {
    render(<Login/>);
    const loginElement = screen.getByText(/User Login/);
    expect(loginElement).toBeInTheDocument();
});