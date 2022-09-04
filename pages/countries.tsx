import CountryPreview from "../components/country-preview/CountryPreview";

interface CountryDescription {
  name: string;
  description: string;
  imageUrl: string;
  flag: string;
}

const visitedCountries: CountryDescription[] = [
  {
    name: 'Colombia',
    flag: '🇨🇴',
    description: 'El país que nos vio nacer',
    imageUrl: '/images/countries/cover/colombia.jpeg',
  },
  {
    name: 'Cuba',
    flag: '🇨🇺',
    description: 'Un mes por el país socialista',
    imageUrl: '/images/countries/cover/cuba.jpeg',
  },
  {
    name: 'Francia',
    flag: '🇨🇵',
    description: 'Viviendo en el país Galo',
    imageUrl: '/images/countries/cover/francia.jpeg',
  },
  {
    name: 'Países Bajos',
    flag: '🇳🇱',
    description: 'Ámsterdam y Volendam',
    imageUrl: '/images/countries/cover/paises-bajos.jpeg',
  },
  {
    name: 'Alemania',
    flag: '🇩🇪',
    description: 'En tierras teutónas',
    imageUrl: '/images/countries/cover/alemania.jpeg',
  },
  {
    name: 'Inglaterra',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    description: 'Decir Londres es decir museos gratis',
    imageUrl: '/images/countries/cover/inglaterra.jpeg',
  },
  {
    name: 'Monaco',
    flag: '🇲🇨',
    description: 'Un día en el principado',
    imageUrl: '/images/countries/cover/monaco.jpeg',
  },
  {
    name: 'Belgica',
    flag: '🇧🇪',
    description: 'Frío, café y chocolate',
    imageUrl: '/images/countries/cover/belgica.jpeg',
  },
  {
    name: 'España',
    flag: '🇪🇸',
    description: 'Sevilla, Madrid y Barcelona',
    imageUrl: '/images/countries/cover/espana.jpeg',
  },
  {
    name: 'Portugal',
    flag: '🇵🇹',
    description: 'Azulejos y pastel de nata en Lisboa',
    imageUrl: '/images/countries/cover/portugal.jpeg',
  },
  {
    name: 'Albania',
    flag: '🇦🇱',
    description: 'Primer país de los Balcanes',
    imageUrl: '/images/countries/cover/albania.jpeg',
  },
  {
    name: 'Grecia',
    flag: '🇬🇷',
    description: 'Museos, ruinas y caminates',
    imageUrl: '/images/countries/cover/grecia.jpeg',
  },
  {
    name: 'Marruecos',
    flag: '🇲🇦',
    description: 'Primera vez en África',
    imageUrl: '/images/countries/cover/marruecos.jpeg',
  },
]

function Countries() {
  return (
    <div className="flex flex-wrap p-5 gap-5 justify-evenly">
      {visitedCountries.map((countryItem: CountryDescription) => (
        <CountryPreview
          name={countryItem.name}
          description={countryItem.description}
          imageUrl={countryItem.imageUrl}
          flag={countryItem.flag}
        />
      ))}
    </div>)
}

export default Countries