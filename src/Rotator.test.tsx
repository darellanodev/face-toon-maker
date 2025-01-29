import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
  it('advances the next image when the user presses the button', async () => {
    render(<Rotator images={images} />)
    const img = screen.getByRole('img')
    const button = screen.getByRole('button')
    const user = userEvent.setup()

    await user.click(button)
    expect(img).toHaveAttribute('src', './assets/image2.png')
    await user.click(button)
    expect(img).toHaveAttribute('src', './assets/image3.png')
    await user.click(button)
    expect(img).toHaveAttribute('src', './assets/image1.png')
  })

  it('passes a custom image component to the Rotator', () => {
    const CustomImageComponent = () => <img data-testid="My test image" />
    render(
      <Rotator images={images} CustomImageComponent={CustomImageComponent} />,
    )
    expect(screen.getByRole('img')).toHaveAttribute(
      'data-testid',
      'My test image',
    )
  })
  it('passes custom image height to the Rotator', () => {
    const customImageHeight = '111px'
    render(<Rotator images={images} imgHeight={customImageHeight} />)
    expect(screen.getByRole('img')).toHaveStyle({ height: '111px' })
  })
})
