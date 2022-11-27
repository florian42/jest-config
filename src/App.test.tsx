import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import App from './App'

it('clicking counter increases count', () => {
    render(<App />)

    expect(screen.getByRole('button')).toHaveTextContent('count is 0')
})
