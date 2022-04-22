import './test.css'
import { useParams } from 'react-router-dom'

const Test = () => {
  const { univers } = useParams()

  const data = {
    marvel: {
      image: 'tt',
      details: 'iBGPEgjeNGORE',
      logo: 'rr'
    },
    dc: {
      image: 'tt',
      details: 'spofnvpoqnboqndôbeq',
      logo: 'rr'
    },
    patate: {
      image: 'tt',
      details: 'sPOIGOehgporHN',
      logo: 'rr'
    }
  }

  return (
    <>
      <div>{data[univers].image}</div>
      <div>{data[univers].details}</div>
      <div>{data[univers].logo}</div>
    </>
  )
}

export default Test
