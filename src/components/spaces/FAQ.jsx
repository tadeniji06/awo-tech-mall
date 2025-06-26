import { Icon } from '@iconify/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQs } from '../../utils/data';

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleIndex = (i) =>
		setActiveIndex(activeIndex === i ? null : i);

	return (
		<div className='flex flex-col justify-center items-center gap-10 px-4 md:px-0 py-16'>
			{/* Header */}
			<div className='text-center max-w-xl'>
				<h2 className='text-3xl font-bold mb-2'>FAQ</h2>
				<p className='text-gray-600 text-base'>
					Get answers to frequently asked questions about getting a space in
					Awolowo Technology Mall
				</p>
			</div>

			{/* FAQ List */}
			<div className='w-full max-w-3xl flex flex-col gap-4'>
				{FAQs.map((faq, i) => (
					<div
						key={i}
						className='border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm'
					>
						{/* Question Header */}
						<div
							className='flex items-start justify-between p-4 cursor-pointer transition-all hover:bg-gray-50'
							onClick={() => toggleIndex(i)}
						>
							<div className='flex items-start gap-4'>
								<span className='text-lg font-semibold text-gray-500 min-w-[30px]'>
									{faq.no}
								</span>
								<span className='text-base font-medium text-gray-800'>
									{faq.title}
								</span>
							</div>
							<Icon
								icon={
									activeIndex === i
										? 'mdi:chevron-up'
										: 'mdi:chevron-down'
								}
								className='text-2xl text-gray-600'
							/>
						</div>

						{/* Answer */}
						<AnimatePresence initial={false}>
							{activeIndex === i && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.8 }}
									className='px-4 pb-4 text-gray-700 text-sm leading-relaxed'
								>
									{faq.ans}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
