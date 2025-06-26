import Header from '../layouts/Header';
import Ready from '../components/home/Ready';
import { fullFeatures } from '../utils/data';
import { motion } from 'framer-motion';

const Features = () => {
	return (
		<div className='relative min-h-screen bg-white'>
			{/* Sticky Header */}
			<div className='absolute top-0 left-0 w-full z-50'>
				<Header />
			</div>

			{/* Page Content */}
			<section className='flex flex-col items-center justify-center gap-8 px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16'>
				{/* Heading */}
				<div className='flex flex-col items-center gap-3 text-center'>
					<h1 className='font-bold text-3xl md:text-4xl text-primary-dark-green'>
						Explore the Features in Awo
						Technology Mall
					</h1>
					<p className='max-w-md md:max-w-lg text-gray-600'>
						Discover a thoughtfully designed
						environment where global brands,
						tech startups, and lifestyle
						seekers converge.
					</p>
				</div>

				{/* Feature Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mt-8'>
					{fullFeatures.map(
						(feat, index) => (
							<motion.div
								key={index}
								className='group p-4 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300'
							>
								{/* Image */}
								<motion.div
									className='mb-4 overflow-hidden rounded-lg'
									whileHover={{
										scale: 1.05,
									}}
									transition={{
										duration: 0.3,
									}}
								>
									<img
										src={feat.img}
										alt={feat.title}
										className='w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-500 group-hover:scale-110'
									/>
								</motion.div>

								{/* Title */}
								<motion.h3
									className='text-lg sm:text-xl lg:text-xl font-semibold text-gray-900 mb-2 leading-tight'
									whileHover={{
										color: '#6B8E23',
									}}
									transition={{
										duration: 0.2,
									}}
								>
									{feat.title}
								</motion.h3>

								{/* Description */}
								<motion.p
									className='text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3'
									initial={{ opacity: 0.8 }}
									whileHover={{ opacity: 1 }}
									transition={{
										duration: 0.2,
									}}
								>
									{feat.body}
								</motion.p>
							</motion.div>
						)
					)}
				</div>
			</section>
			<Ready />
		</div>
	);
};

export default Features;
