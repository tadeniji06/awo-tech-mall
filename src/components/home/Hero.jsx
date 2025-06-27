import { useState, useEffect } from 'react';
import {
	motion,
	AnimatePresence,
} from 'framer-motion';
import Button from '../ui/Button';
import Header from '../../layouts/Header';
import { hero, story } from '../../assets';

const Hero = () => {
	const slides = [
		{
			img: hero,
			title: 'Where Legacy Meets Innovation',
			body: `Welcome to Awolowo Tech Hub, a bold transformation of the iconic Awolowo House into a future-ready ecosystem of luxury, business, and technology in the heart of Ikeja.`,
			accent: 'Now Selling',
			bgGradient:
				'from-primary-lemon-green to-primary-blue',
		},
		{
			img: story,
			title:
				'Designing for Future-Thinking Minds',
			body: `This is not just a property; it’s a purpose-built space where startups, tech firms, and creatives thrive. Join the evolution.`,
			accent: 'Limited Spaces',
			bgGradient:
				'from-primary-lemon-green to-primary-blue',
		},
	];

	const [currentSlide, setCurrentSlide] =
		useState(0);
	const [isAutoPlaying, setIsAutoPlaying] =
		useState(true);

	useEffect(() => {
		if (!isAutoPlaying) return;
		const interval = setInterval(() => {
			setCurrentSlide(
				(prev) => (prev + 1) % slides.length
			);
		}, 6000);
		return () => clearInterval(interval);
	}, [isAutoPlaying]);

	const changeSlide = (newIndex) => {
		setCurrentSlide(newIndex);
		setIsAutoPlaying(false);
		setTimeout(
			() => setIsAutoPlaying(true),
			8000
		);
	};

	return (
		<section className='relative h-screen w-full overflow-hidden'>
			<div className='absolute top-0 left-0 w-full z-50'>
				<Header />
			</div>

			<AnimatePresence mode='wait'>
				<motion.div
					key={currentSlide}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.6 }}
					className='absolute inset-0 z-0'
				>
					<img
						src={slides[currentSlide].img}
						alt={slides[currentSlide].title}
						className='w-full h-full object-cover'
					/>
					<div className='absolute inset-0 bg-black/60'></div>
					<div
						className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgGradient} opacity-30`}
					></div>
				</motion.div>
			</AnimatePresence>

			<div className='relative z-10 h-full flex items-center'>
				<div className='max-w-7xl mx-auto px-6 sm:px-12 w-full'>
					<div className='grid lg:grid-cols-2 gap-12 items-center h-full'>
						<motion.div
							key={`content-${currentSlide}`}
							initial={{
								x: -30,
								opacity: 0,
							}}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className='text-white space-y-6 md:space-y-8'
						>
							<motion.div
								initial={{
									scale: 0.9,
									opacity: 0,
								}}
								animate={{
									scale: 1,
									opacity: 1,
								}}
								transition={{
									duration: 0.3,
									delay: 0.1,
								}}
								className='inline-block'
							>
								<span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-black/40 backdrop-blur-sm border border-white/30 text-white'>
									{
										slides[currentSlide]
											.accent
									}
								</span>
							</motion.div>
							<motion.h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'>
								{slides[currentSlide].title}
							</motion.h1>
							<motion.p className='text-lg text-gray-100 max-w-2xl leading-relaxed'>
								{slides[currentSlide].body}
							</motion.p>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='pt-4'
							>
								<Button
									title='Book A Space'
									className='px-8 py-4 text-lg font-semibold shadow-lg bg-primary-blue hover:shadow-xl'
								/>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ x: 30, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className='hidden lg:flex justify-center items-center'
						>
							<div className='relative w-72 h-72 lg:w-96 lg:h-96'>
								<motion.div
									animate={{
										y: [-8, 8, -8],
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
									}}
									className='absolute -top-10 -left-10 bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl'
								>
									<div className='text-2xl font-bold text-white'>
										100%
									</div>
									<div className='text-sm text-gray-200'>
										Flexibility
									</div>
								</motion.div>

								<motion.div
									animate={{ y: [8, -8, 8] }}
									transition={{
										duration: 3,
										repeat: Infinity,
									}}
									className='absolute -bottom-10 -right-10 bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl'
								>
									<div className='text-2xl font-bold text-white'>
										100%
									</div>
									<div className='text-sm text-gray-200'>
										Sustainability
									</div>
								</motion.div>

								<div className='absolute inset-0 flex items-center justify-center'>
									<div className='w-32 h-32 lg:w-40 lg:h-40 border-2 border-white/20 rounded-full animate-pulse'></div>
									<div className='absolute w-16 h-16 lg:w-20 lg:h-20 border border-white/30 rounded-full animate-ping'></div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			{isAutoPlaying && (
				<div className='absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20'>
					<motion.div
						key={currentSlide}
						initial={{ width: '0%' }}
						animate={{ width: '100%' }}
						transition={{
							duration: 6,
							ease: 'linear',
						}}
						className='h-full bg-gradient-to-r from-blue-400 to-purple-500'
					/>
				</div>
			)}
		</section>
	);
};

export default Hero;
