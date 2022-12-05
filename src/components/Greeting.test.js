import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// get = Get the element, throw error if not found
// query = Try get the element and return null if not foud
// find = Return a promise so that we can see that the element found at some stage

describe('Greeting component', () => {

    test('renders Greeting as a h2', () => {
        // Given: 
        render(<Greeting />);
        // When: N/A

        // Then:
        const h2Element = screen.getByText('Greeting');
        expect(h2Element).toBeInTheDocument();
    })

    test('renders Hi there, nice to meet you! if button NOT clicked', () => {
        // Given: We have the Greeting component rendered
        render(<Greeting />);

        // When: We have not clicked the button

        // Then: We see the text Hi there, nice to meet you!
        const element = screen.getByText('Hi there, nice to', { exact: false });
        expect(element).toBeInTheDocument();
    })

    test('renders Changed! if button clicked', () => {
        // Given: We have the Greeting component rendered
        render(<Greeting />);

        // When: We have clicked the button
        const buttoneElement = screen.getByRole('button');
        userEvent.click(buttoneElement)

        // Then: We see the text Hi there, nice to meet you!
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    })

    test('does not render "Hi there, nice to meet you!" if the button was clicked', () => {
        // Given: We have the Greeting component rendered
        render(<Greeting />);

        // When: We have clicked the button
        const buttoneElement = screen.getByRole('button');
        userEvent.click(buttoneElement)

        // Then: We see the text Hi there, nice to meet you!
        const element = screen.queryByText('Hi there, nice to', { exact: false });
        expect(element).toBeNull();
    })
})
