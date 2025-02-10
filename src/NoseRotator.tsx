import Rotator from './Rotator'
import noseImages from './noseImages'

function NoseRotator() {
  return (
    <Rotator
      buttonText="Change nose 👃"
      imgHeight="150px"
      images={noseImages}
    />
  )
}

export default NoseRotator
