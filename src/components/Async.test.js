import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        // Re-write fetch as a mock
        window.fetch = jest.fn();

        // Simulate a resolve
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'Test Title' }]
        });

        render(<Async />)

        // find returns a promise
        const listItems = await screen.findAllByRole('listitem');
        expect(listItems).not.toHaveLength(0);
    })
})