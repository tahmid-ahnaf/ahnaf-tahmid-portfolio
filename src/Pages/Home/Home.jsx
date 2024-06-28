import { Helmet } from 'react-helmet-async';
import PortfolioBanner from '../../components/PortfolioBanner/PortfolioBanner';
import PortfolioAbout from '../../components/PortfolioAbout/PortfolioAbout';

const Home = () => {
    return (
        <div className='bg-[#F3F7EC] '>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <PortfolioBanner></PortfolioBanner>
            <PortfolioAbout></PortfolioAbout>
        </div>
        
    );
};

export default Home;