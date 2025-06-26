import Header from '../../layouts/Header';
import Button from '../ui/Button';
const SpaceHero = () => {
	return (
		<section className='relative'>
			<div className='absolute top-0 left-0 w-full z-50'>
				<Header />
			</div>

			<section className='h-[500px] bg-primary-dark-green flex flex-col items-center justify-center gap-8 px-4 sm:px-6 lg:px-8 pt-24 md:pt-32'>
				<div className='flex flex-col gap-8 items-center justify-center text-white text-center'>
					<h1 className='text-3xl font-bold'>
						Explore Flexible, Premium Spaces
						Designed to Inspire
					</h1>
					<p className='leading-tight max-w-[700px] text-base'>
						From business-ready offices to
						lifestyle-rich retail outlets,
						Awolowo Tech Hub offers modular,
						tech-powered environments for
						every kind of entrepreneur,
						creator, and enterprise.
					</p>
					<Button
						title={'Book A Space'}
						className={
							'bg-primary-lemon-green shadow-xl px-8 py-4'
						}
					/>
				</div>
			</section>
		</section>
	);
};
export default SpaceHero;
