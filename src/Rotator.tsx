import { ReactNode } from 'react'
import RotatorImage, { RotatorImageProps } from './RotatorImage'
import RotatorButton from './RotatorButton'
import styled from 'styled-components'
import { useImageRotator } from './useImageRotator'

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
  imageIndex?: number
  onImageIndexChange?: (newImageIndex: number) => void
  CustomImageComponent?: RotatorImageProps['ImgComponent']
  imgHeight?: RotatorImageProps['imgHeight']
  buttonText?: string
}

const Rotator = ({
  images = [],
  imageIndex: imageIndexProp,
  onImageIndexChange,
  CustomImageComponent,
  imgHeight,
  buttonText,
}: RotatorProps) => {
  const { imageIndex, nextImage } = useImageRotator(
    images.length,
    imageIndexProp,
    onImageIndexChange,
  )
  return (
    <StyledDiv data-testid="rotator">
      <RotatorButton data-testid="next-button" onClick={nextImage}>
        {buttonText}
      </RotatorButton>
      <RotatorImage
        ImgComponent={CustomImageComponent}
        imgHeight={imgHeight}
        {...images?.[imageIndex]}
      />
    </StyledDiv>
  )
}

export default Rotator
