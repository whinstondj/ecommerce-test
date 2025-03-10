# ecommerce-test
# Cypress E2E Testing Project

This project contains end-to-end tests for an eCommerce website using Cypress.

To find more documentation please go to: https://docs.cypress.io/app/get-started/why-cypress

## Project Structure

- `cypress/e2e/primer_test.cy.js`: Contains the test cases for validating the homepage, login functionality, and product search.
- `cypress/support/commands.js`: Contains custom Cypress commands.
- `cypress/fixtures/loginData.json`: Contains test data for login tests.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/whinstondj/ecommerce-test.git
   cd ecommerce-test

2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install

## Running Tests
To run the tests, use the following command:

3. Run the test 
    npx cypress run
    # or
    yarn cypress run

## Custom Commands
cy.login(email, password)
Logs in a user with the provided email and password.


## Event Simulations
Here are some common event simulations you can use in Cypress:

cy.get('selector').click(): Simulates a click event.
cy.get('selector').dblclick(): Simulates a double-click event.
cy.get('selector').rightclick(): Simulates a right-click event.
cy.get('selector').trigger('mouseover'): Simulates a mouseover event.
cy.get('selector').trigger('mousedown'): Simulates a mousedown event.
cy.get('selector').trigger('mouseup'): Simulates a mouseup event.
cy.get('selector').trigger('mousemove'): Simulates a mousemove event.
cy.get('selector').focus(): Simulates a focus event.
cy.get('selector').blur(): Simulates a blur event.
cy.get('selector').type('text'): Simulates typing into an input field.
cy.get('selector').clear(): Clears the value of an input field.
cy.get('formSelector').submit(): Simulates a form submission.
cy.get('selector').type('{enter}'): Simulates pressing the Enter key.
cy.get('selector').scrollIntoView(): Scrolls an element into view.
cy.get('selectSelector').select('optionValue'): Selects an option from a dropdown.

## License
This project is licensed under the MIT License.
