import { useState } from 'react'

export const useImageRotator = (
  imagesLength: number,
  initialIndex?: number,
  onImageIndexChange?: (newIndex: number) => void,
) => {
  const [imageIndex, setImageIndex] = useState(initialIndex ?? 0)

  const nextImage = () => {
    if (imagesLength > 0) {
      const newIndex = (imageIndex + 1) % imagesLength
      setImageIndex(newIndex)
      onImageIndexChange?.(newIndex)
    }
  }

  return { imageIndex, nextImage, setImageIndex }
}
