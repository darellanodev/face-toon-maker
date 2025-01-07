import { ComponentPropsWithRef, ReactNode } from 'react'

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
  <figure {...rest}>
    <img src={imgUrl} />
    <figcaption data-testid="figcaption">
      {description} by <strong>{author}</strong>
    </figcaption>
  </figure>
)

export default RotatorImage
