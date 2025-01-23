import { ComponentPropsWithRef, ReactNode, JSX } from 'react'
import styled from 'styled-components'

export type RotatorImageProps = {
  ImgComponent?: (
    props: ComponentPropsWithRef<'img'> & ImageProps,
  ) => JSX.Element
  imgUrl?: string
  /** @default '200px' */
  imgHeight?: string
  description?: ReactNode
  author?: ReactNode
} & ComponentPropsWithRef<'figure'>

type ImageProps = {
  $height: RotatorImageProps['imgHeight']
}

export const StyledImage = styled.img<ImageProps>`
  object-fit: contain;
  width: 100%;
  height: ${(props) => props.$height};
`

const StyledFigure = styled.figure`
  display: flex;
  align-items: center;
`

const RotatorImage = ({
  ImgComponent = StyledImage,
  imgUrl,
  imgHeight = '200px',
  description,
  author,
  ...rest
}: RotatorImageProps) => (
  <StyledFigure {...rest}>
    <ImgComponent src={imgUrl} $height={imgHeight} />
    <figcaption data-testid="figcaption">
      {description} by <strong>{author}</strong>
    </figcaption>
  </StyledFigure>
)

export default RotatorImage
