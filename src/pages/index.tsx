import type { NextPage } from 'next'
import CardComponent from '../components/Card';
import CarrouselComponent from '../components/Carrousel'




const Home: NextPage = () => {
  return (
    <>
      <CarrouselComponent />
      <CardComponent />
    </>
  );
}


export default Home
