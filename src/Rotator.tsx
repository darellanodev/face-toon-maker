import { ReactNode, useState } from 'react'
import RotatorImage from './RotatorImage'
import RotatorButton from './RotatorButton'

type Image = {
  imgUrl?: string
  description?: ReactNode
  author?: ReactNode
}

const Rotator = ({ images }: { images?: Image[] }) => {
  const [imageIndex, setImageIndex] = useState(0)
  return (
    <div data-testid="rotator">
      <RotatorImage {...images?.[imageIndex]} />
      <RotatorButton
        data-testid="next-button"
        onClick={() => {
          if (!images) {
            return
          }
          setImageIndex((i: number) => (i + 1) % images.length)
        }}>
        Next
      </RotatorButton>
    </div>
  )
}

export default Rotator
