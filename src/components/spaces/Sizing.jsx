import {
	motion,
	useAnimation,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const floors = [
	{
		id: 1,
		label:
			'Ground floor - shopping areas and parking spaces',
		bg: 'bg-primary-lemon-green/35',
	},
	{
		id: 2,
		label:
			'1st to 3rd Floor – Premium Shopping Areas',
		bg: 'bg-primary-blue/35',
	},
	{
		id: 3,
		label:
			'4th Floor – Business Offices & Meeting Areas',
		bg: 'bg-primary-lemon-green',
	},
	{
		id: 4,
		label:
			'5th Floor – Lifestyle & Wellness Zone',
		bg: 'bg-primary-blue/80',
		height: 'h-[150px]',
	},
];

const Sizing = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
	});
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [isInView, controls]);

	return (
		<section className='flex flex-col container mx-auto mt-8 mb-20 px-4 md:px-8'>
			{/* Header */}
			<div className='flex flex-col items-center text-center gap-3 mb-10'>
				<h1 className='text-2xl md:text-3xl font-semibold leading-snug'>
					Find the Perfect Space to Grow Your
					Brand
				</h1>
				<p className='text-sm md:text-base max-w-[600px] leading-relaxed text-gray-700'>
					Retail stores, business offices,
					wellness zones, and entertainment
					facilities all in one innovative,
					luxury environment.
				</p>
			</div>

			{/* Stacking Cards */}
			<div
				className='relative flex flex-col items-center w-full text-center'
				ref={ref}
			>
				{floors.map((floor, index) => {
					const randomX =
						Math.random() *
						(index % 2 === 0 ? -120 : 120);
					const randomY =
						Math.random() * 200 + 80;

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
									scale: 0.9,
								},
								visible: {
									opacity: 1,
									x: 0,
									y: 0,
									scale: 1,
								},
							}}
							transition={{
								duration: 0.7,
								delay: index * 0.25,
								ease: 'easeOut',
							}}
							className={`absolute w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl ${
								floor.bg
							} py-4 px-4 sm:px-8 rounded-xl shadow-md z-[${index}] ${
								floor.height || ''
							}`}
							style={{
								top: `${index * 60}px`,
							}}
						>
							<h1 className='text-base md:text-lg font-medium text-gray-900'>
								{floor.label}
							</h1>
						</motion.div>
					);
				})}
				{/* Spacer div for layout height */}
				<div className='h-[380px] sm:h-[400px] md:h-[420px]'></div>
			</div>
		</section>
	);
};

export default Sizing;
