import { ReactNode } from 'react'

const RotatorImage = ({
  imgUrl,
  description,
  author,
}: {
  imgUrl?: string
  description?: ReactNode
  author?: ReactNode
}) => (
  <figure>
    <img src={imgUrl} />
    <figcaption data-testid="figcaption">
      {description} by <strong>{author}</strong>
    </figcaption>
  </figure>
)

export default RotatorImage
