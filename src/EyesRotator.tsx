import Rotator from './Rotator'
import eyesImages from './eyesImages'

function EyesRotator() {
  return (
    <Rotator
      buttonText="Change eyes 👀"
      imgHeight="150px"
      images={eyesImages}
    />
  )
}

export default EyesRotator
