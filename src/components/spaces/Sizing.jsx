import { useState } from 'react';
import { g1, g2, g3, g4 } from '../../assets';

const floors = [
	{
		id: 1,
		label: 'Ground Floor',
		img: g4,
		extra: `Ground Floor – Retail + Parking

Type: Street-level shopping spaces and dedicated parking

Ideal For: High-traffic retail, convenience stores, banks, supermarkets

Price: ₦7,000,000

Notes: Offers maximum visibility and accessibility`,
	},
	{
		id: 2,
		label: '1st to 3rd Floor',
		img: g2,
		extra: `Type: Spacious indoor shopping units

Ideal For: Boutiques, showrooms, branded stores

Pricing:
• 1st Floor: ₦5,000,000
• 2nd Floor: ₦4,500,000
• 3rd Floor: ₦4,000,000`,
	},
	{
		id: 3,
		label: '4th Floor',
		img: g3,
		extra: `Type: Office suites, shared meeting rooms

Ideal For: Startups, legal firms, consultants, IT agencies

Price: ₦4,000,000

Highlights: Private workspaces and client-ready meeting zones`,
	},
	{
		id: 4,
		label: '5th Floor',
		img: g1,
		extra: `Type: Cinema, spa, salon, sauna, rooftop restaurant

Ideal For: Wellness brands, restaurateurs, lifestyle investors

Price: To be negotiated with the MD/CEO

Notes: Premium location with terrace views and exclusive experience offering`,
	},
];

const Sizing = () => {
	const [activeFloor, setActiveFloor] = useState(floors[0]);

	return (
		<section className='py-12 px-4 md:px-8'>
			{/* Tabs */}
			<div className='flex flex-wrap justify-center gap-4 mb-10'>
				{floors.map((floor) => (
					<button
						key={floor.id}
						onClick={() => setActiveFloor(floor)}
						className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
							${
								activeFloor.id === floor.id
									? 'bg-white text-black shadow-md ring-2 ring-primary-blue'
									: 'bg-transparent text-gray-800 hover:text-black'
							}`}
					>
						{floor.label}
					</button>
				))}
			</div>

			{/* Floor Display */}
			<div className='flex flex-col md:flex-row gap-8 items-start max-w-6xl mx-auto'>
				{/* Image */}
				<div className='w-full md:w-1/2'>
					<img
						src={activeFloor.img}
						alt={activeFloor.label}
						className='rounded-2xl shadow-lg object-cover w-full h-full max-h-[400px]'
					/>
				</div>

				{/* Info */}
				<div className='flex-1 space-y-4 text-gray-900 text-base leading-relaxed p-6 md:p-8 font-medium'>
					{activeFloor.extra.split('\n\n').map((section, idx) => (
						<div key={idx}>
							{section.split('\n').map((line, i) => (
								<p
									key={i}
									className={`${
										line.toLowerCase().includes('price') ||
										line.toLowerCase().includes('ideal for') ||
										line.toLowerCase().includes('type') ||
										line.toLowerCase().includes('notes') ||
										line.toLowerCase().includes('highlights')
											? 'font-semibold'
											: ''
									} ${line.startsWith('•') ? 'ml-4 list-disc' : ''}`}
								>
									{line}
								</p>
							))}
						</div>
					))}

					{/* CTA */}
					<div className='pt-4'>
						<button className='bg-gradient-to-r from-yellow-400 to-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform'>
							Get This Space
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sizing;
