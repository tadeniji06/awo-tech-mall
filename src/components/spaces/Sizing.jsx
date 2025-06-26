import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const floors = [
	{
		id: 1,
		label: 'Ground floor - shopping areas and parking spaces',
		bg: 'bg-gradient-to-r from-green-400 to-lime-500',
	},
	{
		id: 2,
		label: '1st to 3rd Floor – Premium Shopping Areas',
		bg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
	},
	{
		id: 3,
		label: '4th Floor – Business Offices & Meeting Areas',
		bg: 'bg-gradient-to-r from-green-500 to-emerald-600',
	},
	{
		id: 4,
		label: '5th Floor – Lifestyle & Wellness Zone',
		bg: 'bg-gradient-to-r from-primary-dark-green to-primary-blue',
		height: 'h-[160px]',
	},
];

const Sizing = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [isInView, controls]);

	return (
		<section className='flex flex-col container mx-auto mt-12 px-4 md:px-8'>
			{/* Header */}
			<div className='flex flex-col items-center text-center gap-4 mb-12'>
				<h1 className='text-3xl md:text-4xl font-bold text-gray-900 leading-snug'>
					Find the Perfect Space to <span className='text-primary-blue'>Grow Your Brand</span>
				</h1>
				<p className='text-sm md:text-base max-w-[600px] leading-relaxed text-gray-600'>
					Retail stores, business offices, wellness zones, and entertainment
					facilities all in one innovative, luxury environment.
				</p>
			</div>

			{/* Stacking Cards */}
			<div
				className='relative flex flex-col items-center w-full text-center'
				ref={ref}
			>
				{floors.map((floor, index) => {
					const randomX = Math.random() * (index % 2 === 0 ? -120 : 120);
					const randomY = Math.random() * 200 + 80;

					return (
						<motion.div
							key={floor.id}
							initial='hidden'
							animate={controls}
							variants={{
								hidden: {
									opacity: 0,
									x: randomX,
									y: -randomY,
									scale: 0.95,
								},
								visible: {
									opacity: 1,
									x: 0,
									y: 0,
									scale: 1,
								},
							}}
							whileHover={{
								scale: 1.02,
								rotate: index % 2 === 0 ? 1 : -1,
								boxShadow: '0px 10px 20px rgba(0,0,0,0.15)',
							}}
							transition={{
								duration: 0.7,
								delay: index * 0.25,
								ease: 'easeOut',
							}}
							className={`absolute w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl ${floor.bg} text-white py-5 px-6 sm:px-10 rounded-xl shadow-lg ring-1 ring-white/10 backdrop-blur-md hover:backdrop-blur-lg transition-all z-[${index}] ${
								floor.height || ''
							}`}
							style={{ top: `${index * 65}px` }}
						>
							<h1 className='text-lg md:text-xl font-semibold tracking-wide'>
								{floor.label}
							</h1>
						</motion.div>
					);
				})}

				{/* Spacer */}
				<div className='h-[400px] sm:h-[450px] md:h-[480px]'></div>
			</div>
		</section>
	);
};

export default Sizing;
