import type { NextPage } from 'next'
import CardComponent from '../components/CardComponent';
import CarrouselComponent from '../components/CarrouselComponent'




const Home: NextPage = () => {
  return (
    <>
      <CarrouselComponent />
      <CardComponent />
    </>
  );
}


export default Home
