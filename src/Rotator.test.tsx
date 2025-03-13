import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Rotator from './Rotator'

const images = [
  {
    imgUrl: './assets/image1.png',
    description: 'Image 1',
    author: 'darellanodev',
  },
  {
    imgUrl: './assets/image2.png',
    description: 'Image 2',
    author: 'darellanodev',
  },
  {
    imgUrl: './assets/image3.png',
    description: 'Image 3',
    author: 'darellanodev',
  },

  {
    imgUrl: './assets/image4.png',
    description: 'Image 4',
    author: 'KiRZeN24',
  },
]

describe('With controlled imageIndex', () => {
  const onImageIndexChange = vi.fn()
  const renderRotatorWithImageIndex = () => {
    render(
      <Rotator
        images={images}
        onImageIndexChange={onImageIndexChange}
        imageIndex={1}
      />,
    )
  }
  beforeEach(() => {
    onImageIndexChange.mockReset()
  })
  it('shows the image corresponding to the imageIndex', () => {
    renderRotatorWithImageIndex()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      './assets/image2.png',
    )
  })
  it('calls onImageIndexChange when the user presses the next button', async () => {
    renderRotatorWithImageIndex()
    const img = screen.getByRole('img')
    const nextButton = screen.getByRole('button')
    const user = userEvent.setup()
    await user.click(nextButton)

    expect(img).toHaveAttribute('src', './assets/image3.png')
    expect(onImageIndexChange).toHaveBeenCalledWith(2)
  })
})

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
    expect(img).toHaveAttribute('src', './assets/image4.png')
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
  it('passes custom text to the button of the Rotator', () => {
    const buttonText = 'custom text'
    render(<Rotator buttonText={buttonText} />)
    expect(screen.getByRole('button')).toHaveTextContent('custom text')
  })
})
