import FAQ from '../components/spaces/FAQ';
import PaymentPlan from '../components/spaces/PaymentPlan';
import Sizing from '../components/spaces/Sizing';
import SpaceHero from '../components/spaces/SpaceHero';
import Ready from '../components/home/Ready';

const Spaces = () => {
	return (
		<>
			<SpaceHero />
			<Sizing />
			<PaymentPlan />
			<FAQ />
			<Ready />
		</>
	);
};
export default Spaces;
