import { evh } from '../../assets';
import Header from '../../layouts/Header';
const EventHero = () => {
	return (
		<div className='relative'>
			<div
				className='bg-cover bg-center bg-no-repeat w-full h-[650px] md:h-[800px] relative transition-opacity duration-1000 ease-in-out'
				style={{
					backgroundImage: `url(${evh})`,
				}}
			>
				<div className='absolute top-0 left-0 w-full z-50'>
					<Header />
				</div>
			</div>
		</div>
	);
};
export default EventHero;
