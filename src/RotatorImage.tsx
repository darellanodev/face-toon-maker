const RotatorImage = ({ imgUrl }: { imgUrl?: string }) => (
  <figure>
    <img src={imgUrl} />
    <figcaption data-testid="figcaption"></figcaption>
  </figure>
)

export default RotatorImage
