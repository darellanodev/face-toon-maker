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
  it('passes a URL image to the <img>', () => {
    const imgUrl = './assets/image1.png'
    render(<RotatorImage imgUrl={imgUrl} />)
    expect(screen.getByRole('img')).toHaveAttribute('src', imgUrl)
  })
  it('passes a description and the author to the <figcaption>', () => {
    const props = {
      description: 'Image 1',
      author: 'Author 1',
    }
    render(<RotatorImage {...props} />)
    expect(screen.getByTestId('figcaption')).toHaveTextContent(
      `Image 1 by Author 1`,
    )
  })
})
