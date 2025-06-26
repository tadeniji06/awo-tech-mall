import { story } from '../../assets';

const Story = () => {
	return (
		<section className='bg-primary-lemon-green/10 py-12 sm:py-20'>
			<div className='container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10'>
				{/* Left - Text */}
				<div className='flex-1'>
					<h2 className='text-primary-lemon-green text-xl sm:text-2xl font-semibold mb-2'>
						The Story Behind Awolowo Tech Hub
					</h2>
					<h3 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-4'>
						Reviving a Landmark, Inspiring the Future
					</h3>
					<div className='text-gray-700 text-sm sm:text-base leading-relaxed space-y-4'>
						<p>
							Located in the iconic Awolowo House, a symbol of heritage and purpose in Lagos, Awolowo Tech Hub represents the bold reimagination of space and significance.
						</p>
						<p>
							Once a symbol of administrative authority, the structure has now evolved into a modern centre of innovation, commerce, and community.
						</p>
						<p>
							Strategically situated in Ikeja’s commercial district, it bridges past and future, offering a world-class destination where start-ups, tech leaders, creatives, and enterprises thrive.
						</p>
						<p>
							Awolowo Tech Hub isn’t just a building, it’s a movement of minds and makers — breathing new life into a legendary space, and igniting the future of business and technology in Nigeria and beyond.
						</p>
					</div>
				</div>

				{/* Right - Image */}
				<div className='flex-1'>
					<img
						src={story}
						alt='Awolowo Tech Hub illustration'
						className='w-full h-auto rounded-xl shadow-lg'
					/>
				</div>
			</div>
		</section>
	);
};

export default Story;
