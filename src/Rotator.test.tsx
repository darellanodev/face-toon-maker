import { render, screen } from '@testing-library/react'
import Rotator from './Rotator'

describe('Rotator', () => {
  it('renders a <div>', () => {
    render(<Rotator />)
    expect(screen.getByTestId('rotator')).toBeInTheDocument()
  })
})
