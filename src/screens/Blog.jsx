import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import { getBlogPosts, searchPosts, urlFor } from '../utils/sanity';

const Blog = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');
	const [isSearching, setIsSearching] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const postsPerPage = 6;

	// Load initial posts
	useEffect(() => {
		loadPosts();
	}, []);

	const loadPosts = async (page = 1, search = '') => {
		try {
			setLoading(true);
			const offset = (page - 1) * postsPerPage;

			let fetchedPosts;
			if (search) {
				fetchedPosts = await searchPosts(search);
				setHasMore(false); // Search returns all results
			} else {
				fetchedPosts = await getBlogPosts(postsPerPage, offset);
				setHasMore(fetchedPosts.length === postsPerPage);
			}

			if (page === 1) {
				setPosts(fetchedPosts);
			} else {
				setPosts((prev) => [...prev, ...fetchedPosts]);
			}
		} catch (error) {
			console.error('Error loading posts:', error);
		} finally {
			setLoading(false);
			setIsSearching(false);
		}
	};

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!searchTerm.trim()) {
			setCurrentPage(1);
			loadPosts(1);
			return;
		}

		setIsSearching(true);
		setCurrentPage(1);
		await loadPosts(1, searchTerm);
	};

	const handleLoadMore = () => {
		const nextPage = currentPage + 1;
		setCurrentPage(nextPage);
		loadPosts(nextPage);
	};

	const clearSearch = () => {
		setSearchTerm('');
		setCurrentPage(1);
		loadPosts(1);
	};

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	const BlogCard = ({ post }) => (
		<article className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
			<Link to={`/blog/${post.slug.current}`} className='block'>
				<div className='aspect-video overflow-hidden'>
					{post.mainImage ? (
						<img
							src={urlFor(post.mainImage)
								.width(400)
								.height(240)
								.url()}
							alt={post.title}
							className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
						/>
					) : (
						<div className='w-full h-full bg-gray-200 flex items-center justify-center'>
							<Icon
								icon='tabler:photo'
								className='text-4xl text-gray-400'
							/>
						</div>
					)}
				</div>

				<div className='p-6'>
					<div className='flex items-center gap-4 text-sm text-gray-600 mb-3'>
						<span className='flex items-center gap-1'>
							<Icon icon='tabler:calendar' className='text-base' />
							{formatDate(post.publishedAt)}
						</span>
						<span className='flex items-center gap-1'>
							<Icon icon='tabler:clock' className='text-base' />
							{post.estimatedReadingTime || 1} min read
						</span>
					</div>

					<h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary-blue transition-colors'>
						{post.title}
					</h3>

					{post.body && post.body[0] && (
						<p className='text-gray-600 line-clamp-3 mb-4'>
							{post.body[0].children?.[0]?.text || ''}
						</p>
					)}

					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-2'>
							{post.author?.image && (
								<img
									src={urlFor(post.author.image)
										.width(32)
										.height(32)
										.url()}
									alt={post.author.name}
									className='w-8 h-8 rounded-full object-cover'
								/>
							)}
							<span className='text-sm font-medium text-gray-700'>
								{post.author?.name || 'Anonymous'}
							</span>
						</div>

						{post.categories && post.categories.length > 0 && (
							<div className='flex flex-wrap gap-1'>
								{post.categories
									.slice(0, 2)
									.map((category, index) => (
										<span
											key={index}
											className='px-2 py-1 text-xs bg-primary-lemon-green/10 text-primary-lemon-green rounded-full'
										>
											{category.title}
										</span>
									))}
							</div>
						)}
					</div>
				</div>
			</Link>
		</article>
	);

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header Section */}
				<div className='text-center mb-12'>
					<h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
						Our Blog
					</h1>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						Discover insights, stories, and updates from our community
					</p>
				</div>

				{/* Search Section */}
				<div className='max-w-2xl mx-auto mb-12'>
					<form onSubmit={handleSearch} className='relative'>
						<div className='relative'>
							<Icon
								icon='tabler:search'
								className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl'
							/>
							<input
								type='text'
								placeholder='Search articles...'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className='w-full pl-12 pr-24 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all'
							/>
							{searchTerm && (
								<button
									type='button'
									onClick={clearSearch}
									className='absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
								>
									<Icon icon='tabler:x' className='text-xl' />
								</button>
							)}
							<button
								type='submit'
								disabled={isSearching}
								className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-blue text-white px-6 py-2 rounded-full hover:bg-primary-blue/90 transition-colors disabled:opacity-50'
							>
								{isSearching ? (
									<Icon
										icon='tabler:loader-2'
										className='animate-spin'
									/>
								) : (
									'Search'
								)}
							</button>
						</div>
					</form>
				</div>

				{/* Content Section */}
				{loading && posts.length === 0 ? (
					<div className='flex justify-center items-center py-20'>
						<div className='text-center'>
							<Icon
								icon='tabler:loader-2'
								className='animate-spin text-4xl text-primary-blue mb-4'
							/>
							<p className='text-gray-600'>Loading articles...</p>
						</div>
					</div>
				) : posts.length === 0 ? (
					<div className='text-center py-20'>
						<Icon
							icon='tabler:article-off'
							className='text-6xl text-gray-400 mb-4'
						/>
						<h3 className='text-2xl font-semibold text-gray-700 mb-2'>
							{searchTerm
								? 'No articles found'
								: 'No articles available'}
						</h3>
						<p className='text-gray-500'>
							{searchTerm
								? `Try searching for something else or browse all articles.`
								: 'Check back later for new content.'}
						</p>
						{searchTerm && (
							<button
								onClick={clearSearch}
								className='mt-4 bg-primary-blue text-white px-6 py-2 rounded-full hover:bg-primary-blue/90 transition-colors'
							>
								View All Articles
							</button>
						)}
					</div>
				) : (
					<>
						{/* Results Info */}
						<div className='mb-8'>
							<p className='text-gray-600'>
								{searchTerm ? (
									<>
										Found {posts.length} article
										{posts.length !== 1 ? 's' : ''} for "{searchTerm}"
										<button
											onClick={clearSearch}
											className='ml-2 text-primary-blue hover:underline'
										>
											Clear search
										</button>
									</>
								) : (
									`Showing ${posts.length} article${
										posts.length !== 1 ? 's' : ''
									}`
								)}
							</p>
						</div>

						{/* Blog Grid */}
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
							{posts.map((post) => (
								<BlogCard key={post._id} post={post} />
							))}
						</div>

						{/* Load More Button */}
						{hasMore && !searchTerm && (
							<div className='text-center'>
								<button
									onClick={handleLoadMore}
									disabled={loading}
									className='bg-primary-blue text-white px-8 py-3 rounded-full hover:bg-primary-blue/90 transition-colors disabled:opacity-50 inline-flex items-center gap-2'
								>
									{loading ? (
										<>
											<Icon
												icon='tabler:loader-2'
												className='animate-spin'
											/>
											Loading...
										</>
									) : (
										<>
											Load More Articles
											<Icon icon='tabler:arrow-down' />
										</>
									)}
								</button>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default Blog;
