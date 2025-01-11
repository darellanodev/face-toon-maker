import { ComponentPropsWithRef, ReactNode } from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 200px;
`

const StyledFigure = styled.figure`
  display: flex;
  align-items: center;
`

const RotatorImage = ({
  imgUrl,
  description,
  author,
  ...rest
}: {
  imgUrl?: string
  description?: ReactNode
  author?: ReactNode
} & ComponentPropsWithRef<'figure'>) => (
  <StyledFigure {...rest}>
    <StyledImage src={imgUrl} />
    <figcaption data-testid="figcaption">
      {description} by <strong>{author}</strong>
    </figcaption>
  </StyledFigure>
)

export default RotatorImage
