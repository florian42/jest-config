import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import App from './App'

it('clicking counter increases count', async () => {
    render(<App />)

    expect(screen.getByRole('button')).toHaveTextContent('count is 0')

    fireEvent.click(screen.getByRole('button'))

    await waitFor(() => screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveTextContent('count is 1')
})
