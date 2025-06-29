import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

// Using your imported assets
import {
	ATM,
	gen,
	bFly,
	b1,
	b2,
	b3,
	cFly,
	jFly,
	cl1,
	cl2,
	cl3,
	cl4,
	j1,
	j2,
	j3,
	aFly,
	a1,
	a2,
} from '../../assets';

const WhoWeAre = () => {
	const [activeProject, setActiveProject] = useState(0);
	const [selectedMedia, setSelectedMedia] = useState(null);
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);
	const [previewMedia, setPreviewMedia] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);

	// Project data with your actual media arrays
	const bitekMedia = [bFly, b1, b2, b3];
	const jubileeMedia = [jFly, j1, j2, j3];
	const clintonMedia = [cFly, cl1, cl2, cl3, cl4];
	const awoMedia = [aFly, a1, a2];
	const awoVid = ATM;
	const mainFlyer = gen;

	const projects = [
		{
			id: 1,
			title: 'Awolowo Technology Mall',
			location: 'Ikeja, Lagos State',
			description:
				'A limited collection of distinctive commercial and multi-purpose spaces exceptionally designed for modern businesses.',
			type: 'Commercial',
			status: 'Ongoing',
			media: awoMedia,
			video: awoVid,
			features: [
				'Commercial Spaces',
				'Multi-purpose',
				'Modern Design',
				'Tech Hub',
			],
			year: '2024',
		},
		{
			id: 3,
			title: "Clinton's Castle",
			location: 'Asokoro, Abuja',
			description:
				"Luxury castles by the Villa, just three minutes drive from Aso Rock presidential Villa. Four bedroom castle with a Boy's Quarter.",
			type: 'Luxury Residential',
			status: 'Completed',
			media: clintonMedia,
			features: [
				'4 Bedrooms',
				"Boy's Quarter",
				'Premium Location',
				'Luxury Finishes',
			],
			year: '2023',
		},
		{
			id: 2,
			title: 'Jubilee Flats and Terraces',
			location: 'Abraham Adesanya, Ajah, Lagos',
			description:
				'Affordable estate in partnership with Lagos State Government comprising 167 units of 1, 2 and 3 bedroom apartments.',
			type: 'Mass Housing',
			status: 'Completed',
			media: jubileeMedia,
			features: [
				'167 Units',
				'1-3 Bedrooms',
				'Government Partnership',
				'Affordable Housing',
			],
			year: '2022',
		},

		{
			id: 4,
			title: 'Bitek Pacesetter Estate',
			location: 'Jericho, Ibadan, Oyo State',
			description:
				'Premium residential development offering modern living spaces with quality infrastructure and amenities.',
			type: 'Residential',
			status: 'Ongoing',
			media: bitekMedia,
			features: [
				'Modern Homes',
				'Quality Infrastructure',
				'Prime Location',
				'Premium Amenities',
			],
			year: '2024',
		},
	];

	const services = [
		{
			title: 'Real Estate Management',
			icon: 'mdi:home-group',
			description:
				'Comprehensive property management and investment solutions',
		},
		{
			title: 'Mass Housing',
			icon: 'mdi:city',
			description:
				'Large-scale residential developments for communities',
		},
		{
			title: 'Infrastructure & General Construction',
			icon: 'mdi:hammer-wrench',
			description:
				'Complete construction and infrastructure development services',
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 12,
			},
		},
	};

	const handleMediaPreview = (media, isVideo = false) => {
		setPreviewMedia({ src: media, isVideo });
		setIsPreviewOpen(true);
	};

	const closePreview = () => {
		setIsPreviewOpen(false);
		setPreviewMedia(null);
		setIsPlaying(false);
	};

	const cardVariants = {
		hidden: { scale: 0.8, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 120,
				damping: 15,
			},
		},
		hover: {
			scale: 1.02,
			y: -8,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 20,
			},
		},
	};

	return (
		<section className='py-20 bg-gradient-to-br from-slate-50 to-blue-50'>
			<div className='container mx-auto px-4 sm:px-8'>
				{/* Header Section */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					className='text-center mb-16'
				>
					<motion.div variants={itemVariants} className='mb-6'>
						<span className='text-primary-lemon-green font-semibold text-lg'>
							Our Excellence
						</span>
					</motion.div>
					<motion.h2
						variants={itemVariants}
						className='text-4xl md:text-6xl font-bold text-gray-800 mb-6'
					>
						Transforming Visions Into
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-lemon-green'>
							{' '}
							Reality
						</span>
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className='max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed'
					>
						With over 11,000 homes delivered across Nigeria, El-Salem
						continues to set new standards in luxury development, mass
						housing, and innovative infrastructure solutions.
					</motion.p>
				</motion.div>

				{/* Services Section */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'
				>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover='hover'
							className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'
						>
							<div className='flex items-center gap-4 mb-4'>
								<div className='p-3 bg-gradient-to-br from-primary-blue/10 to-primary-lemon-green/10 rounded-xl'>
									<Icon
										icon={service.icon}
										className='text-3xl text-primary-blue'
									/>
								</div>
								<h3 className='text-xl font-bold text-gray-800'>
									{service.title}
								</h3>
							</div>
							<p className='text-gray-600'>{service.description}</p>
						</motion.div>
					))}
				</motion.div>

				{/* Projects Navigation */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='flex flex-wrap justify-center gap-4 mb-12'
				>
					{projects.map((project, index) => (
						<motion.button
							key={project.id}
							onClick={() => setActiveProject(index)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
								activeProject === index
									? 'bg-gradient-to-r from-primary-blue to-primary-lemon-green text-white shadow-lg'
									: 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
							}`}
						>
							{project.title}
						</motion.button>
					))}
				</motion.div>

				{/* Active Project Display */}
				<AnimatePresence mode='wait'>
					<motion.div
						key={activeProject}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5, ease: 'easeInOut' }}
						className='bg-white rounded-3xl shadow-2xl overflow-hidden'
					>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
							{/* Media Section */}
							<div className='relative'>
								<div className='aspect-video relative overflow-hidden'>
									{projects[activeProject].video &&
									selectedMedia === 'video' ? (
										<div className='w-full h-full relative'>
											<video
												src={projects[activeProject].video}
												controls
												autoPlay
												muted
												className='w-full h-full object-cover'
												onPlay={() => setIsPlaying(true)}
												onPause={() => setIsPlaying(false)}
											/>
											<button
												onClick={() =>
													handleMediaPreview(
														projects[activeProject].video,
														true
													)
												}
												className='absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors'
											>
												<Icon
													icon='mdi:fullscreen'
													className='text-xl'
												/>
											</button>
										</div>
									) : (
										<div className='relative w-full h-full'>
											<motion.img
												initial={{ scale: 1.1 }}
												animate={{ scale: 1 }}
												transition={{ duration: 0.6 }}
												src={
													selectedMedia ||
													projects[activeProject].media[0]
												}
												alt={projects[activeProject].title}
												className='w-full h-full object-cover cursor-pointer'
												onClick={() =>
													handleMediaPreview(
														selectedMedia ||
															projects[activeProject].media[0]
													)
												}
											/>
											<button
												onClick={() =>
													handleMediaPreview(
														selectedMedia ||
															projects[activeProject].media[0]
													)
												}
												className='absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors opacity-0 hover:opacity-100'
											>
												<Icon
													icon='mdi:magnify-plus'
													className='text-xl'
												/>
											</button>
										</div>
									)}

									<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />

									{/* Status Badge */}
									<div className='absolute top-4 right-4'>
										<span
											className={`px-3 py-1 rounded-full text-sm font-semibold ${
												projects[activeProject].status === 'Completed'
													? 'bg-green-500 text-white'
													: 'bg-orange-500 text-white'
											}`}
										>
											{projects[activeProject].status}
										</span>
									</div>
								</div>

								{/* Media Thumbnails */}
								<div className='absolute bottom-4 left-4 right-4'>
									<div className='flex gap-2 overflow-x-auto pb-2'>
										{projects[activeProject].media.map(
											(media, index) => (
												<motion.button
													key={index}
													whileHover={{ scale: 1.1 }}
													whileTap={{ scale: 0.95 }}
													onClick={() => {
														setSelectedMedia(media);
														handleMediaPreview(media);
													}}
													className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
														(selectedMedia ||
															projects[activeProject].media[0]) ===
														media
															? 'border-primary-lemon-green shadow-lg'
															: 'border-white/50'
													}`}
												>
													<img
														src={media}
														alt=''
														className='w-full h-full object-cover'
													/>
												</motion.button>
											)
										)}
										{projects[activeProject].video && (
											<motion.button
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.95 }}
												onClick={() => setSelectedMedia('video')}
												className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all bg-gray-900 flex items-center justify-center ${
													selectedMedia === 'video'
														? 'border-primary-lemon-green shadow-lg'
														: 'border-white/50'
												}`}
											>
												<Icon
													icon='mdi:play'
													className='text-white text-xl'
												/>
											</motion.button>
										)}
									</div>
								</div>
							</div>

							{/* Content Section */}
							<div className='p-8 lg:p-12'>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
									className='h-full flex flex-col justify-center'
								>
									<div className='mb-6'>
										<div className='flex items-center gap-3 mb-3'>
											<span className='text-primary-lemon-green font-semibold'>
												{projects[activeProject].type}
											</span>
											<span className='text-gray-400'>•</span>
											<span className='text-gray-600'>
												{projects[activeProject].year}
											</span>
										</div>
										<h3 className='text-3xl font-bold text-gray-800 mb-2'>
											{projects[activeProject].title}
										</h3>
										<div className='flex items-center gap-2 text-gray-600 mb-4'>
											<Icon
												icon='mdi:map-marker'
												className='text-primary-blue'
											/>
											<span>{projects[activeProject].location}</span>
										</div>
									</div>

									<p className='text-gray-600 text-lg leading-relaxed mb-8'>
										{projects[activeProject].description}
									</p>

									{/* Features */}
									<div className='mb-8'>
										<h4 className='font-semibold text-gray-800 mb-4'>
											Key Features
										</h4>
										<div className='grid grid-cols-2 gap-3'>
											{projects[activeProject].features.map(
												(feature, index) => (
													<motion.div
														key={index}
														initial={{ opacity: 0, x: -20 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: 0.3 + index * 0.1 }}
														className='flex items-center gap-2'
													>
														<Icon
															icon='mdi:check-circle'
															className='text-primary-lemon-green text-sm'
														/>
														<span className='text-gray-600 text-sm'>
															{feature}
														</span>
													</motion.div>
												)
											)}
										</div>
									</div>

									{/* CTA Button */}
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className='bg-gradient-to-r from-primary-blue to-primary-lemon-green text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300'
									>
										View Project Details
									</motion.button>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>

				{/* Company Stats */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='mt-20 bg-white rounded-3xl p-8 shadow-xl'
				>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
						{[
							{ number: '11,000+', label: 'Homes Delivered' },
							{ number: '27+', label: 'Years Experience' },
							{ number: '4', label: 'Major Cities' },
							{ number: '100%', label: 'Client Satisfaction' },
						].map((stat, index) => (
							<motion.div
								key={index}
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true }}
								transition={{
									delay: index * 0.1,
									type: 'spring',
									stiffness: 150,
								}}
								className='space-y-2'
							>
								<div className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-lemon-green'>
									{stat.number}
								</div>
								<div className='text-gray-600 font-medium'>
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>

			{/* Media Preview Modal */}
			<AnimatePresence>
				{isPreviewOpen && previewMedia && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
						onClick={closePreview}
					>
						<motion.div
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
							className='relative max-w-4xl max-h-full'
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={closePreview}
								className='absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors'
							>
								<Icon icon='mdi:close' className='text-3xl' />
							</button>

							{previewMedia.isVideo ? (
								<video
									src={previewMedia.src}
									controls
									autoPlay
									className='max-w-full max-h-full rounded-lg'
								/>
							) : (
								<img
									src={previewMedia.src}
									alt='Preview'
									className='max-w-full max-h-full rounded-lg'
								/>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default WhoWeAre;
