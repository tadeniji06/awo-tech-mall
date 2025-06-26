import { motion } from 'framer-motion';
import { Icon } from '@iconify/react/dist/iconify.js';
import { whyUs } from '../../utils/data';

const WhyUs = () => {
	// Animation variants
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

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};

	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.9,
		},
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

	const iconVariants = {
		hidden: {
			scale: 0,
			rotate: -180,
		},
		visible: {
			scale: 1,
			rotate: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
				delay: 0.1,
			},
		},
		hover: {
			scale: 1.1,
			rotate: 5,
			transition: {
				duration: 0.2,
				ease: 'easeInOut',
			},
		},
	};

	const textVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
				delay: 0.2,
			},
		},
	};

	return (
		<section className='container mx-auto px-4 py-16 flex flex-col relative overflow-hidden'>
			{/* Background decorative elements */}
			<motion.div
				className='absolute top-20 left-5 w-20 h-20 bg-primary-lemon-green/5 rounded-full blur-xl'
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.6, 0.3],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
			<motion.div
				className='absolute bottom-20 right-10 w-32 h-32 bg-primary-blue/5 rounded-full blur-xl'
				animate={{
					scale: [1, 1.3, 1],
					opacity: [0.2, 0.5, 0.2],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 2,
				}}
			/>

			{/* Header Section */}
			<motion.div
				className='flex flex-col items-center mb-10 lg:mb-16 gap-4'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{
					once: true,
					amount: 0.3,
				}}
			>
				<motion.h2
					className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 leading-tight'
					variants={itemVariants}
				>
					Why Awolowo Technology Hub?
				</motion.h2>

				<motion.p
					className='leading-relaxed text-center text-base sm:text-lg text-gray-700 max-w-2xl px-4'
					variants={itemVariants}
				>
					Awolowo Technology Hub isn't just a
					physical location, it's a
					transformational ecosystem designed
					to inspire innovation,
					collaboration, and sustainable
					business growth right in the heart
					of Lagos.
				</motion.p>
			</motion.div>

			{/* Cards Grid */}
			<motion.div
				className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mx-auto max-w-6xl'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{
					once: true,
					amount: 0.2,
				}}
			>
				{whyUs.map((why, index) => (
					<motion.div
						className='group relative'
						key={index}
						variants={cardVariants}
						whileHover='hover'
						custom={index}
					>
						{/* Card Background with Gradient Border */}

						{/* Main Card Content */}
						<div className='relative bg-white/80 backdrop-blur-sm  rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:border-primary-lemon-green/20'>
							{/* Icon and Title Row */}
							<div className='flex items-start gap-4 sm:gap-6 mb-4'>
								<motion.div
									className='flex-shrink-0'
									variants={iconVariants}
									whileHover='hover'
								>
									<div className='relative'>
										{/* Icon background glow */}
										<div className='absolute inset-0 bg-primary-lemon-green/20 rounded-full blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

										<Icon
											className='relative text-primary-lemon-green text-2xl sm:text-3xl lg:text-4xl transition-all duration-300 group-hover:drop-shadow-lg'
											icon={why.icon}
										/>
									</div>
								</motion.div>

								<motion.div
									className='flex-1 min-w-0'
									variants={textVariants}
								>
									<h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight group-hover:text-primary-blue transition-colors duration-300'>
										{why.title}
									</h3>
								</motion.div>
							</div>

							{/* Description */}
							<motion.div
								variants={textVariants}
								className='ml-0 sm:ml-10 lg:ml-12'
							>
								<p className='leading-relaxed text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300'>
									{why.body}
								</p>
							</motion.div>

							{/* Hover indicator */}
							<motion.div
								className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
								initial={{ scale: 0 }}
								whileHover={{ scale: 1 }}
							>
								<div className='w-2 h-2 bg-primary-lemon-green rounded-full animate-pulse' />
							</motion.div>
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* Bottom decorative line */}
			<motion.div
				className='w-24 h-1 bg-gradient-to-r from-primary-lemon-green to-primary-blue mx-auto mt-12 rounded-full'
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.8,
					ease: 'easeOut',
					delay: 0.5,
				}}
			/>
		</section>
	);
};

export default WhyUs;
