import { Icon } from '@iconify/react/dist/iconify.js';
import Ready from '../components/home/Ready';
import Header from '../layouts/Header';

const Contact = () => {
	return (
		<section className='relative min-h-screen bg-pink-50'>
			<div className='absolute top-0 left-0 w-full z-50'>
				<Header />
			</div>
			{/* contact details */}
			<section className='flex flex-col container mx-auto gap-8 px-3 sm:px-6 lg:px-8 pt-24 md:pt-32'>
				<div className='flex flex-col gap-3'>
					<h1 className='text-2xl font-semibold'>
						Let's Work Together
					</h1>
					<p className='leading-tight max-w-[450px] text-base'>
						Reach out to learn more about our
						spaces, book a tour, or explore
						partnership opportunities.
					</p>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					<div className='border border-gray-300 rounded-lg flex flex-col gap-4 p-6 bg-white shadow-sm'>
						<div className='flex gap-4 items-center'>
							<Icon
								className='text-primary-lemon-green text-3xl'
								icon={'ic:baseline-phone'}
							/>
							<p className='text-xl font-medium'>
								Reach out to us:
							</p>
						</div>
						<div className='flex flex-col gap-2 pl-2'>
							<p>+(234) 70 234 5678</p>
							<p>+(234) 70 234 5678</p>
						</div>
					</div>
					<div className='border border-gray-300 rounded-lg flex flex-col gap-4 p-6 bg-white shadow-sm'>
						<div className='flex gap-4 items-center'>
							<Icon
								className='text-primary-lemon-green text-3xl'
								icon={'ic:baseline-email'}
							/>
							<p className='text-xl font-medium'>
								Send us a message:
							</p>
						</div>
						<div className='flex flex-col gap-2 pl-2'>
							<p>theawotech@gmail.com</p>
							<p>support@awotech.com</p>
						</div>
					</div>
					<div className='border border-gray-300 rounded-lg flex flex-col gap-4 p-6 bg-white shadow-sm'>
						<div className='flex gap-4 items-center'>
							<Icon
								className='text-primary-lemon-green text-3xl'
								icon={
									'ic:baseline-location-on'
								}
							/>
							<p className='text-xl font-medium'>
								Visit Us:
							</p>
						</div>
						<div className='flex flex-col gap-2 pl-2'>
							<p>
								24, Computer Village, Allen
								avenue, Ikeja, Lagos state,
								Nigeria.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* form */}
			<form
				className='bg-white border border-gray-200 rounded-lg shadow-lg container mx-auto mt-10 p-6'
				onSubmit={(e) => e.preventDefault()}
			>
				<p className='text-sm font-medium text-gray-800 mb-6'>
					Send Us A Message
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{/* Left Column */}
					<div className='flex flex-col gap-4'>
						<div>
							<label
								htmlFor='name'
								className='text-sm font-medium text-gray-700'
							>
								Name
							</label>
							<input
								id='name'
								name='name'
								type='text'
								required
								className='w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'
								placeholder='Your Name'
							/>
						</div>

						<div>
							<label
								htmlFor='email'
								className='text-sm font-medium text-gray-700'
							>
								Email Address
							</label>
							<input
								id='email'
								name='email'
								type='email'
								required
								className='w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'
								placeholder='thebloomingdesigner@gmail.com'
							/>
						</div>

						<div>
							<label
								htmlFor='phone'
								className='text-sm font-medium text-gray-700'
							>
								Phone Number
							</label>
							<input
								id='phone'
								name='phone'
								type='tel'
								required
								className='w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'
								placeholder='+234 789090678'
							/>
						</div>
					</div>

					{/* Right Column */}
					<div>
						<label
							htmlFor='subject'
							className='text-sm font-medium text-gray-700'
						>
							Subject
						</label>
						<textarea
							id='subject'
							name='subject'
							rows='7'
							required
							className='w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm resize-none placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'
							placeholder='Your message here...'
						/>
					</div>
				</div>

				{/* Button */}
				<div className='flex justify-end mt-6'>
					<button
						type='submit'
						className='bg-gradient-to-r from-[#153E52] to-[#3AB54A] text-white font-semibold px-6 py-2 rounded-md shadow-md hover:opacity-90 transition'
					>
						Send Message
					</button>
				</div>
			</form>
			<div className='mt-8'>
				<Ready />
			</div>
		</section>
	);
};
export default Contact;
