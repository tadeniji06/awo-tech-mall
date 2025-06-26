import { motion } from "framer-motion";
import { hero } from "../../assets";
import Button from "../ui/Button";
import Header from "../../layouts/Header";

const Hero = () => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const buttonVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
		hover: {
			scale: 1.05,
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		},
		tap: {
			scale: 0.95,
		},
	};

	const floatingVariants = {
		animate: {
			y: [0, -10, 0],
			transition: {
				duration: 3,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	};

	return (
		<section className="relative min-h-screen">
			{/* Header */}
			<div className="absolute top-0 left-0 w-full z-50">
				<Header />
			</div>

			<motion.section
				className="flex flex-col items-center justify-center gap-8 px-4 sm:px-6 lg:px-8 pt-24 md:pt-32"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
			{/* Hero Title */}
			<motion.h2
				className="text-3xl sm:text-4xl lg:text-5xl text-primary-lemon-green font-semibold text-center leading-tight"
				variants={itemVariants}
			>
				Where Legacy Meets Innovation
			</motion.h2>

			{/* Hero Description */}
			<motion.p
				className="text-base sm:text-lg lg:text-xl text-primary-gray-500 max-w-2xl text-center leading-relaxed px-4"
				variants={itemVariants}
			>
				Welcome to Awolowo Tech Hub, a bold transformation of the iconic
				Awolowo House into a future-ready ecosystem of luxury, business,
				and technology in the heart of Ikeja.
			</motion.p>

			{/* Primary CTA Button */}
			<motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
				<Button
					title="Book A Space"
					className="bg-primary-blue py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
				/>
			</motion.div>

			{/* Hero Image */}
			<motion.div
				className="container h-[300px] sm:h-[400px] lg:h-[500px] mx-auto px-4 sm:px-6 lg:px-8"
				variants={imageVariants}
			>
				<motion.div
					className="relative w-full h-full overflow-hidden rounded-xl"
					whileHover={{ scale: 1.02 }}
					transition={{ duration: 0.3 }}
				>
					<img
						className="w-full h-full object-cover"
						src={hero}
						alt="Awolowo Tech Hub"
					/>
					{/* Overlay gradient for better text readability if needed */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
				</motion.div>
			</motion.div>

			{/* Content Section */}
			<motion.div
				className="flex items-center justify-center gap-8 flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
				variants={containerVariants}
			>
				{/* Text Content */}
				<motion.div
					className="flex flex-col max-w-md lg:max-w-lg gap-5 text-center lg:text-left"
					variants={itemVariants}
				>
					<motion.h2
						className="text-xl sm:text-2xl lg:text-3xl text-primary-gray-500 font-semibold leading-tight"
						variants={itemVariants}
					>
						A Space Designed for Innovation, Growth, and Experience
					</motion.h2>

					<motion.p
						className="text-sm sm:text-base lg:text-lg text-primary-gray-500 leading-relaxed"
						variants={itemVariants}
					>
						The Awolowo Technology Hub is a transformative redevelopment
						initiative that seeks to repurpose the iconic Awolowo House,
						located in the heart of Ikeja's bustling commercial district,
						into a cutting-edge innovation and co-creation space. This
						project aims to breathe new life into the building by
						converting it into a vibrant technology and enterprise
						ecosystem that will foster creativity, digital
						entrepreneurship, and technological advancement. By leveraging
						the central location and historical significance of the
						existing structure, the project seeks to anchor a new wave of
						innovation that bridges legacy and future-forward thinking.
					</motion.p>

					<motion.div
						variants={buttonVariants}
						whileHover="hover"
						whileTap="tap"
						className="flex justify-center lg:justify-start"
					>
						<Button
							title="Learn More"
							className="bg-primary-blue py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
						/>
					</motion.div>
				</motion.div>

				{/* Side Image */}
				<motion.div
					className="w-full max-w-md lg:max-w-lg h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center"
					variants={imageVariants}
				>
					<motion.div
						className="relative w-full h-full overflow-hidden rounded-xl"
						variants={floatingVariants}
						animate="animate"
						whileHover={{ 
							scale: 1.05,
							rotateY: 5,
							transition: { duration: 0.3 }
						}}
					>
						<img
							className="w-full h-full object-cover"
							src={hero}
							alt="Awolowo Tech Hub Interior"
						/>
						{/* Subtle glow effect */}
						<div className="absolute inset-0 bg-gradient-to-br from-primary-lemon-green/10 to-primary-blue/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Decorative elements */}
			<motion.div
				className="absolute top-32 left-10 w-2 h-2 bg-primary-lemon-green rounded-full opacity-60 hidden lg:block z-10"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.6, 1, 0.6],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute top-52 right-20 w-3 h-3 bg-primary-blue rounded-full opacity-40 hidden lg:block z-10"
				animate={{
					scale: [1, 1.5, 1],
					opacity: [0.4, 0.8, 0.4],
				}}
				transition={{
					duration: 3,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
			/>
		</motion.section>
	</section>
	);
};

export default Hero;