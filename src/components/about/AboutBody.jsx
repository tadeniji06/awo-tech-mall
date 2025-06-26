import { Icon } from '@iconify/react';

const AboutBody = () => {
	const aim = [
		{
			title: 'Our Vision',
			icon: 'hugeicons:vision',
			body: 'To be West Africa’s leading innovation and lifestyle hub, empowering entrepreneurs, creators, and global businesses in a space where legacy and future thrive together.',
		},
		{
			title: 'Our Mission',
			icon: 'ant-design:aim-outlined',
			body: `We are transforming a historic landmark into a fully integrated, tech-enabled ecosystem that supports business growth, collaboration, creativity, and urban luxury.`,
		},
	];

	return (
		<div className='container mx-auto px-4 mt-10 flex justify-center'>
			<div className='flex flex-col md:flex-row gap-8 flex-wrap justify-center'>
				{aim.map((aims, index) => (
					<div
						key={index}
						className='flex flex-col gap-8 max-w-md border p-6 mb-6 shadow-md rounded-xl bg-white'
					>
						<div className='flex items-center gap-3'>
							<Icon
								className='text-3xl text-primary-lemon-green'
								icon={aims.icon}
							/>
							<h2 className='text-xl font-semibold'>
								{aims.title}
							</h2>
						</div>
						<p className='text-gray-700 text-sm md:text-base'>
							{aims.body}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutBody;
