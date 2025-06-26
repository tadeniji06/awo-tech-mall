const Button = ({
	className,
	onClick,
	isLoading,
	title,
}) => {
	return (
		<button
			className={`text-white font-normal py-2 px-4 rounded-xl ${className} cursor-pointer`}
			onClick={onClick}
			disabled={isLoading}
		>
			{isLoading ? "Loading..." : title}
		</button>
	);
};
export default Button;
