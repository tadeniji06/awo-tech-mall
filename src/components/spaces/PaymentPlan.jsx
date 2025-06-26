import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const stages = [
	{
		stage: 'Initial Down Payment',
		percent: '35%',
		note: 'To reserve the space',
	},
	{
		stage: 'After 6 Months',
		percent: '35%',
		note: 'Mid-term installment',
	},
	{
		stage: 'Final Payment (6 Months)',
		percent: '30%',
		note: 'Completion of total payment',
	},
];

const rowVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.2 },
	}),
};

const PaymentPlan = () => {
	return (
		<div className='container flex flex-col gap-10 mx-auto px-4 md:px-0 py-12'>
			{/* Header */}
			<div className='flex flex-col gap-2 text-center md:text-left'>
				<h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
					Flexible Payment Options to Fit
					Your Business Goals
				</h2>
				<p className='text-base text-gray-600 max-w-2xl'>
					Secure your space with a flexible,
					investor-friendly installment plan.
				</p>
			</div>

			{/* Table */}
			<div className='w-full flex justify-center'>
				<div className='w-full max-w-5xl overflow-x-auto rounded-xl shadow-lg'>
					<table className='table-auto w-full border-collapse'>
						<thead className='bg-gradient-to-r from-primary-lemon-green to-primary-blue text-white text-left'>
							<tr className='text-sm md:text-base'>
								<th className='py-3 px-4'>
									Stage
								</th>
								<th className='py-3 px-4'>
									Payment %
								</th>
								<th className='py-3 px-4'>
									Notes
								</th>
							</tr>
						</thead>
						<tbody>
							{stages.map((item, i) => (
								<motion.tr
									key={item.stage}
									variants={rowVariant}
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									custom={i}
									className='odd:bg-white even:bg-gray-50 hover:bg-primary-lemon-green/20 transition-all'
								>
									<td className='py-4 px-4 text-sm md:text-base font-medium text-gray-800'>
										{item.stage}
									</td>
									<td className='py-4 px-4 text-sm md:text-base text-green-700 font-semibold'>
										{item.percent}
									</td>
									<td className='py-4 px-4 text-sm text-gray-600'>
										{item.note}
									</td>
								</motion.tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* Summary Note */}
			<div className='flex flex-col justify-between md:flex-row items-start md:items-center gap-4 mt-6 px-4 md:px-0'>
				<div className='flex items-center gap-3 bg-green-50 border border-green-200 px-4 py-3 rounded-lg shadow-sm'>
					<Icon
						icon='mdi:check-circle'
						className='text-green-600 text-xl'
					/>
					<span className='text-sm md:text-base font-medium text-green-700'>
						Total Duration:{' '}
						<strong>12 months</strong>
					</span>
				</div>
				<p className='text-sm md:text-base text-gray-700 max-w-md'>
					Custom plans may be arranged upon
					request for bulk or long-term
					leases.
				</p>
			</div>
		</div>
	);
};

export default PaymentPlan;
