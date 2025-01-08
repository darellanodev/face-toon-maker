import { ReactNode } from 'react'
import RotatorImage from './RotatorImage'

type Image = {
  imgUrl?: string
  description?: ReactNode
  author?: ReactNode
}

const Rotator = ({ images }: { images?: Image[] }) => {
  return (
    <div data-testid="rotator">
      <RotatorImage {...images?.[0]} />
    </div>
  )
}

export default Rotator
