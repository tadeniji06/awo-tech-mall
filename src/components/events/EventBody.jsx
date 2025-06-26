import {
	o1, o2, o3, o4, o5, o6,
	n1, n2, n3, n4, n5, n6,
} from '../../assets';

const EventBody = () => {
	const oldImages = [o1, o2, o3, o4, o5, o6];
	const newImages = [n1, n2, n3, n4, n5, n6];

	return (
		<div className='flex flex-col px-4 sm:px-8 lg:px-16 py-10 gap-16'>
			{/* Intro */}
			<div className='flex flex-col gap-4 max-w-3xl mx-auto text-center'>
				<h2 className='text-2xl sm:text-3xl font-bold text-gray-800'>
					Our Journey Through Time
				</h2>
				<p className='text-gray-600 text-base sm:text-lg'>
					From handover to transformation, explore key moments in the evolution
					of Awolowo Tech Hub through this curated visual gallery.
				</p>
			</div>

			{/* OLD IMAGES */}
			<div className='flex flex-col items-center gap-4'>
				<span className='text-lg font-semibold text-gray-700'>
					Old Structure of the Building
				</span>
				<h3 className='text-primary-lemon-green text-2xl font-bold'>
					Awolowo Technology Building
				</h3>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl'>
					{oldImages.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Old structure ${index + 1}`}
							className='rounded-lg object-cover w-full h-52 sm:h-60 lg:h-64 transition-transform duration-300 hover:scale-105 shadow-sm'
						/>
					))}
				</div>
			</div>

			{/* NEW IMAGES */}
			<div className='flex flex-col items-center gap-4'>
				<span className='text-lg font-semibold text-gray-700'>
					Pictures from Handover Event
				</span>
				<h3 className='text-primary-lemon-green text-2xl font-bold'>
					Awolowo Technology Building
				</h3>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl'>
					{newImages.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Handover event ${index + 1}`}
							className='rounded-lg object-cover w-full h-52 sm:h-60 lg:h-64 transition-transform duration-300 hover:scale-105 shadow-sm'
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default EventBody;
