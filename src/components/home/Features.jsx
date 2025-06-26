import { motion } from 'framer-motion';
import { features } from '../../utils/data';

const Features = () => {
	// Animation variants for the section
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	// Animation variants for the header content
	const headerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};

	// Animation variants for feature cards
	const cardVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.9 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			},
		},
		hover: {
			y: -8,
			scale: 1.02,
			transition: {
				duration: 0.3,
				ease: 'easeInOut',
			},
		},
	};

	// Animation variants for the grid container
	const gridVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.3,
			},
		},
	};

	return (
		<motion.section 
			className='w-full py-8 sm:py-12 lg:py-16'
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={containerVariants}
		>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[130px]'>
				{/* Header Section */}
				<motion.div 
					className='flex flex-col gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16'
					variants={headerVariants}
				>
					<motion.h1 
						className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight'
						variants={headerVariants}
					>
						Key Features
					</motion.h1>
					
					<motion.div 
						className='text-gray-700 leading-relaxed max-w-[280px] sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] text-sm sm:text-base lg:text-lg'
						variants={headerVariants}
					>
						<p className='mb-2'>
							Discover a thoughtfully designed
							environment where global brands,
							tech startups, and lifestyle
							seekers converge.
						</p>
						<motion.button 
							className='text-primary-lemon-green font-medium hover:text-primary-lemon-green/80 transition-colors duration-200 cursor-pointer inline-flex items-center gap-1 group'
							whileHover={{ x: 5 }}
							transition={{ duration: 0.2 }}
						>
							Learn more
							<motion.span
								className='inline-block'
								animate={{ x: [0, 3, 0] }}
								transition={{ 
									duration: 1.5, 
									repeat: Infinity, 
									ease: "easeInOut" 
								}}
							>
								→
							</motion.span>
						</motion.button>
					</motion.div>
				</motion.div>

				{/* Features Grid */}
				<motion.div 
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'
					variants={gridVariants}
				>
					{features.map((feat, index) => (
						<motion.div
							key={index}
							className='group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary-lemon-green/20 transition-all duration-300 cursor-pointer'
							variants={cardVariants}
							whileHover="hover"
							layout
						>
							{/* Feature Image */}
							<motion.div 
								className='mb-4 sm:mb-6 overflow-hidden rounded-lg sm:rounded-xl'
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
							>
								<img 
									src={feat.img} 
									alt={feat.title}
									className='w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-500 group-hover:scale-110'
								/>
							</motion.div>
							
							{/* Feature Title */}
							<motion.h3 
								className='text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight'
								whileHover={{ color: '#8FBC8F' }}
								transition={{ duration: 0.2 }}
							>
								{feat.title}
							</motion.h3>
							
							{/* Feature Description */}
							<motion.p 
								className='text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3'
								initial={{ opacity: 0.8 }}
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.2 }}
							>
								{feat.body}
							</motion.p>

							{/* Hover indicator */}
							<motion.div
								className='mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
								initial={{ x: -10 }}
								whileHover={{ x: 0 }}
							>
								<span className='text-primary-lemon-green text-sm font-medium inline-flex items-center gap-1'>
									Learn more
									<motion.span
										animate={{ x: [0, 3, 0] }}
										transition={{ 
											duration: 1, 
											repeat: Infinity, 
											ease: "easeInOut" 
										}}
									>
										→
									</motion.span>
								</span>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Features;