import styled from 'styled-components'
import { render, screen } from '@testing-library/react'
import RotatorImage, { StyledImage } from './RotatorImage'
import { styleSheetSerializer } from 'jest-styled-components'

expect.addSnapshotSerializer(styleSheetSerializer)

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
  it('passes other props like the className and data properties', () => {
    const props = {
      className: 'my-image-1',
      'data-test-name': 'My image 1',
    }
    render(<RotatorImage {...props} />)
    expect(screen.getByRole('figure')).toHaveClass(props.className)
    expect(screen.getByRole('figure')).toHaveAttribute(
      'data-test-name',
      props['data-test-name'],
    )
  })
  it('uses the expected static styles', () => {
    render(<RotatorImage />)
    expect(screen.getByRole('img')).toHaveStyle({ 'object-fit': 'contain' })
    expect(screen.getByRole('img')).toHaveStyle({ width: '100%' })
  })
  it('uses imgHeight as the height of the <img>', () => {
    const imgHeight = '123px'
    render(<RotatorImage imgHeight={imgHeight} />)
    expect(screen.getByRole('img')).toHaveStyle({ height: imgHeight })
  })
  it('allows styles to be overridden with ImgComponent', () => {
    const TestImg = styled(StyledImage)`
      width: auto;
      object-fit: fill;
    `
    render(<RotatorImage ImgComponent={TestImg} imgHeight={'250px'} />)
    expect(screen.getByRole('img')).toHaveStyle({ width: 'auto' })
    expect(screen.getByRole('img')).toHaveStyle({ height: '250px' })
    expect(screen.getByRole('img')).toHaveStyle({ 'object-fit': 'fill' })
  })
  it('matches snapshot', () => {
    render(<RotatorImage />)
    expect(screen.getByRole('figure')).toMatchSnapshot()
  })
})
