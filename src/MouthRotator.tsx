import Rotator from './Rotator'
import mouthImages from './mouthImages'

function MouthRotator() {
  return (
    <Rotator buttonText="Change mouth" imgHeight="150px" images={mouthImages} />
  )
}

export default MouthRotator
