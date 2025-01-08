import { render, screen } from '@testing-library/react'
import Rotator from './Rotator'

const images = [
  {
    imgUrl: './assets/image1.png',
    description: 'Image 1',
    author: 'Author 1',
  },
  {
    imgUrl: './assets/image2.png',
    description: 'Image 2',
    author: 'Author 2',
  },
  {
    imgUrl: './assets/image3.png',
    description: 'Image 3',
    author: 'Author 3',
  },
]

describe('Rotator', () => {
  it('renders a <div>', () => {
    render(<Rotator />)
    expect(screen.getByTestId('rotator')).toBeInTheDocument()
  })
  it('renders the first image by default', () => {
    render(<Rotator images={images} />)
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      './assets/image1.png',
    )
  })
})
