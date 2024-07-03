import { Helmet } from 'react-helmet-async';
import PortfolioBanner from '../../components/PortfolioBanner/PortfolioBanner';
import PortfolioAbout from '../../components/PortfolioAbout/PortfolioAbout';
import PortfolioSkills from '../../components/PortfolioSkills/PortfolioSkills';
import PortfolioContact from '../../components/PortfolioContact/PortfolioContact';
import PortfolioEducationalQualification from '../../components/PortfolioEducationalQualification/PortfolioEducationalQualification';
import PortfolioProjects from '../../components/PortfolioProjects/PortfolioProjects';

const Home = () => {
    return (
        <div className='bg-[#F3F7EC] '>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <PortfolioBanner></PortfolioBanner>
            <PortfolioAbout></PortfolioAbout>
            <PortfolioSkills></PortfolioSkills>
            <PortfolioContact></PortfolioContact>
            <PortfolioEducationalQualification></PortfolioEducationalQualification>

            <PortfolioProjects></PortfolioProjects>
        </div>
        
    );
};

export default Home;