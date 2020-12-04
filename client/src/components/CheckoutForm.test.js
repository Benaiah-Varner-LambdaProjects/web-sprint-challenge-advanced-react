import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.getByText(/checkout form/i)

    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name:/i)
    const lastNameInput = screen.getByLabelText(/last name:/i)
    const adressInput = screen.getByLabelText(/address:/i)
    const cityInput = screen.getByLabelText(/city:/i)
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/last name:/i)
    const button = screen.getByRole('button')

    userEvent.type(firstNameInput, 'Benaiah')
    userEvent.type(lastNameInput, 'Varner')
    userEvent.type(adressInput, '29 saddle')
    userEvent.type(cityInput, 'norwalk')
    userEvent.type(stateInput, 'CT')
    userEvent.type(zipInput, '06851')
    userEvent.click(button)

    const successMessage = screen.getByTestId('successMessage')
    expect(successMessage).toBeInTheDocument()
});
