import { useState } from 'react'

export const useImageRotator = (imagesLength: number) => {
  const [imageIndex, setImageIndex] = useState(0)

  const nextImage = () => {
    if (imagesLength > 0) {
      setImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % imagesLength,
      )
    }
  }

  return { imageIndex, nextImage }
}
