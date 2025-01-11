import { ReactNode, useState } from 'react'
import RotatorImage, { RotatorImageProps } from './RotatorImage'
import RotatorButton from './RotatorButton'
import styled from 'styled-components'

type Image = {
  imgUrl?: string
  description?: ReactNode
  author?: ReactNode
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

type RotatorProps = {
  images?: Image[]
  imgHeight?: RotatorImageProps['imgHeight']
}

const Rotator = ({ images, imgHeight }: RotatorProps) => {
  const [imageIndex, setImageIndex] = useState(0)
  return (
    <StyledDiv data-testid="rotator">
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
      <RotatorImage imgHeight={imgHeight} {...images?.[imageIndex]} />
    </StyledDiv>
  )
}

export default Rotator
