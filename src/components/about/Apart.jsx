import { Icon } from '@iconify/react';

const Apart = () => {
	const perks = [
		{
			title: 'Iconic Location',
			icon: 'mingcute:location-2-fill',
			body: 'Positioned in the heart of Lagos’ most dynamic commercial district, Awolowo Tech Hub offers prime visibility, walkable proximity to government and corporate institutions, and easy access via major roads, public transport, and airports, placing your brand at the centre of opportunity.',
		},
		{
			title: 'Flexible Office Spaces',
			icon: 'guidance:office',
			body: `From modular co-working areas for freelancers to private, tech-enabled offices and soundproof meeting rooms, the hub provides adaptable spaces built for productivity, collaboration, and growth, no matter your business size or stage.`,
		},
		{
			title: 'Sustainable Design',
			icon: 'iconoir:leaf',
			body: `With energy-efficient design, lush landscaping, and nature-inspired aesthetics, Awo Tech champions sustainability. Our courtyards, terraces, and open-air areas promote environmental consciousness while fostering well-being.`,
		},
		{
			title: 'Designed for Networking',
			icon: 'carbon:network-3',
			body: `This is more than a building, it’s a community. Host or attend events, exhibitions, and tech meetups. Connect with startups, investors, creatives, and innovators, all within a purpose-built ecosystem that encourages partnership and idea exchange.`,
		},
	];

	return (
		<section className='container mt-20 mx-auto px-4 sm:px-8 mb-10'>
			{/* Heading */}
			<div className='flex flex-col items-center text-center gap-4 mb-12'>
				<h2 className='text-3xl sm:text-4xl font-bold text-gray-800'>
					What Sets Us Apart
				</h2>
				<p className='max-w-2xl text-gray-600 text-base sm:text-lg'>
					Every element of Awolowo Tech Hub
					is crafted to fuel ambition and
					support future-forward businesses.
				</p>
			</div>

			{/* Perks Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
				{perks.map((perk, index) => (
					<div
						key={index}
						className='flex flex-col gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300'
					>
						<div className='flex items-center gap-3'>
							<Icon
								icon={perk.icon}
								className='text-primary-lemon-green text-3xl'
							/>
							<h3 className='text-xl font-semibold text-gray-800'>
								{perk.title}
							</h3>
						</div>
						<p className='text-gray-600 text-sm sm:text-base leading-relaxed'>
							{perk.body}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Apart;
