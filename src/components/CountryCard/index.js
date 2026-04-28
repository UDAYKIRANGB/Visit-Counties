import {
  CountrieCard,
  ImageElement,
  CountryButtonContainer,
  Name,
  ButtonElement,
} from './styledComponents'

const CountryCard = props => {
  const {details, onDeleteCountry} = props
  const {id, name, imageUrl} = details

  const onClickDelete = () => {
    onDeleteCountry(id)
  }

  return (
    <CountrieCard>
      <ImageElement src={imageUrl} alt="thumbnail" />
      <CountryButtonContainer>
        <Name>{name}</Name>
        <ButtonElement onClick={onClickDelete}>Remove</ButtonElement>
      </CountryButtonContainer>
    </CountrieCard>
  )
}

export default CountryCard
