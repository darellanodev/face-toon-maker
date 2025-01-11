import { ComponentPropsWithRef, ReactNode } from 'react'
import styled from 'styled-components'

export type RotatorImageProps = {
  imgUrl?: string
  /** @default '200px' */
  imgHeight?: string
  description?: ReactNode
  author?: ReactNode
} & ComponentPropsWithRef<'figure'>

type ImageProps = {
  $height: RotatorImageProps['imgHeight']
}

const StyledImage = styled.img<ImageProps>`
  object-fit: contain;
  width: 100%;
  height: ${(props) => props.$height};
`

const StyledFigure = styled.figure`
  display: flex;
  align-items: center;
`

const RotatorImage = ({
  imgUrl,
  imgHeight = '200px',
  description,
  author,
  ...rest
}: RotatorImageProps) => (
  <StyledFigure {...rest}>
    <StyledImage src={imgUrl} $height={imgHeight} />
    <figcaption data-testid="figcaption">
      {description} by <strong>{author}</strong>
    </figcaption>
  </StyledFigure>
)

export default RotatorImage
