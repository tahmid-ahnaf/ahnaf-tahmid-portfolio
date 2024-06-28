import { Helmet } from 'react-helmet-async';
import PortfolioBanner from '../../components/PortfolioBanner/PortfolioBanner';

const Home = () => {
    return (
        <div className='bg-[#F3F7EC] '>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <PortfolioBanner></PortfolioBanner>
        </div>
        
    );
};

export default Home;