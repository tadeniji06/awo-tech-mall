import { about } from '../../assets';
import Header from '../../layouts/Header';
import Button from '../ui/Button';
const AboutHero = () => {
	return (
		<div className='relative'>
			<div
				className='bg-cover bg-center bg-no-repeat w-full h-[650px] md:h-[800px] relative transition-opacity duration-1000 ease-in-out'
				style={{
					backgroundImage: `url(${about})`,
				}}
			>
				{/* Header always on top */}
				<div className='absolute top-0 left-0 w-full z-50'>
					<Header />
				</div>

				{/* Optional overlay for text readability */}
				<div className='absolute inset-0 bg-black/50' />

				{/* Content */}
				<div className='relative z-10 flex items-center justify-center min-h-[800px]'>
					<div className='flex flex-col gap-8 text-white items-center mt-[-100px] md:mt-0 px-4'>
						<h1 className='text-center md:text-6xl text-3xl font-bold'>
							Our Story: Where Legacy Meets
							Innovation
						</h1>
						<p className='text-center text-lg max-w-xl'>
							The Awolowo Technology Hub is a
							transformative redevelopment
							initiative that seeks to
							repurpose the iconic Awolowo
							House, located in the heart of
							Ikeja’s bustling commercial
							district, into a cutting-edge
							innovation and co-creation
							space.
						</p>
						<Button
							title={'Book A Space'}
							className={
								'px-6 py-4 bg-gradient-to-tr from-primary-blue to-primary-lemon-green'
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AboutHero;
