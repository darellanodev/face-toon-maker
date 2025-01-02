import { render, screen } from '@testing-library/react'
import RotatorImage from './RotatorImage'

describe('RotatorImage', () => {
  it('renders a <figure>', () => {
    render(<RotatorImage />)
    expect(screen.getByRole('figure')).toBeInTheDocument()
  })
  it('render a <img>', () => {
    render(<RotatorImage />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  it('render a <figcaption>', () => {
    render(<RotatorImage />)
    expect(screen.getByTestId('figcaption')).toBeInTheDocument()
  })
})
