import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
	getBlogPost,
	getRelatedPosts,
	urlFor,
} from '../utils/sanity';
import { PortableText } from '@portabletext/react';

const ViewBlog = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const [post, setPost] = useState(null);
	const [relatedPosts, setRelatedPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (slug) {
			loadBlogPost();
		}
	}, [slug]);

	const loadBlogPost = async () => {
		try {
			setLoading(true);
			setError(null);

			const blogPost = await getBlogPost(slug);

			if (!blogPost) {
				setError('Blog post not found');
				return;
			}

			setPost(blogPost);

			// Load related posts
			if (blogPost.categories && blogPost.categories.length > 0) {
				const related = await getRelatedPosts(
					blogPost.categories,
					blogPost._id
				);
				setRelatedPosts(related);
			}
		} catch (err) {
			console.error('Error loading blog post:', err);
			setError('Failed to load blog post');
		} finally {
			setLoading(false);
		}
	};

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	// Custom components for PortableText
	const portableTextComponents = {
		types: {
			image: ({ value }) => {
				return (
					<div className='my-8'>
						<img
							src={urlFor(value).width(800).url()}
							alt={value.alt || 'Blog image'}
							className='w-full rounded-lg shadow-md'
						/>
						{value.caption && (
							<p className='text-sm text-gray-600 text-center mt-2 italic'>
								{value.caption}
							</p>
						)}
					</div>
				);
			},
		},
		block: {
			h1: ({ children }) => (
				<h1 className='text-3xl font-bold text-gray-900 mt-8 mb-4'>
					{children}
				</h1>
			),
			h2: ({ children }) => (
				<h2 className='text-2xl font-bold text-gray-900 mt-8 mb-4'>
					{children}
				</h2>
			),
			h3: ({ children }) => (
				<h3 className='text-xl font-bold text-gray-900 mt-6 mb-3'>
					{children}
				</h3>
			),
			h4: ({ children }) => (
				<h4 className='text-lg font-semibold text-gray-900 mt-6 mb-3'>
					{children}
				</h4>
			),
			normal: ({ children }) => (
				<p className='text-gray-700 leading-relaxed mb-4'>
					{children}
				</p>
			),
			blockquote: ({ children }) => (
				<blockquote className='border-l-4 border-primary-blue pl-6 py-2 my-6 bg-gray-50 italic text-gray-700'>
					{children}
				</blockquote>
			),
		},
		list: {
			bullet: ({ children }) => (
				<ul className='list-disc list-inside mb-4 space-y-2 text-gray-700'>
					{children}
				</ul>
			),
			number: ({ children }) => (
				<ol className='list-decimal list-inside mb-4 space-y-2 text-gray-700'>
					{children}
				</ol>
			),
		},
		listItem: {
			bullet: ({ children }) => <li className='ml-4'>{children}</li>,
			number: ({ children }) => <li className='ml-4'>{children}</li>,
		},
		marks: {
			strong: ({ children }) => (
				<strong className='font-semibold text-gray-900'>
					{children}
				</strong>
			),
			em: ({ children }) => <em className='italic'>{children}</em>,
			code: ({ children }) => (
				<code className='bg-gray-100 px-2 py-1 rounded text-sm font-mono text-primary-blue'>
					{children}
				</code>
			),
			link: ({ children, value }) => (
				<a
					href={value.href}
					target='_blank'
					rel='noopener noreferrer'
					className='text-primary-blue hover:underline'
				>
					{children}
				</a>
			),
		},
	};

	const RelatedPostCard = ({ post }) => (
		<article className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
			<Link to={`/blog/${post.slug.current}`} className='block'>
				<div className='aspect-video overflow-hidden'>
					{post.mainImage ? (
						<img
							src={urlFor(post.mainImage)
								.width(300)
								.height(180)
								.url()}
							alt={post.title}
							className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
						/>
					) : (
						<div className='w-full h-full bg-gray-200 flex items-center justify-center'>
							<Icon
								icon='tabler:photo'
								className='text-3xl text-gray-400'
							/>
						</div>
					)}
				</div>

				<div className='p-4'>
					<h4 className='font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary-blue transition-colors'>
						{post.title}
					</h4>
					<div className='flex items-center text-sm text-gray-600'>
						<span>{formatDate(post.publishedAt)}</span>
						<span className='mx-2'>•</span>
						<span>{post.estimatedReadingTime || 1} min read</span>
					</div>
				</div>
			</Link>
		</article>
	);

	if (loading) {
		return (
			<div className='min-h-screen bg-gray-50 flex justify-center items-center'>
				<div className='text-center'>
					<Icon
						icon='tabler:loader-2'
						className='animate-spin text-4xl text-primary-blue mb-4'
					/>
					<p className='text-gray-600'>Loading article...</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className='min-h-screen bg-gray-50 flex justify-center items-center'>
				<div className='text-center max-w-md mx-auto px-4'>
					<Icon
						icon='tabler:alert-circle'
						className='text-6xl text-red-500 mb-4'
					/>
					<h2 className='text-2xl font-bold text-gray-900 mb-2'>
						Article Not Found
					</h2>
					<p className='text-gray-600 mb-6'>
						The article you're looking for doesn't exist or has been
						removed.
					</p>
					<div className='space-x-4'>
						<button
							onClick={() => navigate(-1)}
							className='bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors'
						>
							Go Back
						</button>
						<Link
							to='/blog'
							className='bg-primary-blue text-white px-6 py-2 rounded-full hover:bg-primary-blue/90 transition-colors inline-block'
						>
							View All Articles
						</Link>
					</div>
				</div>
			</div>
		);
	}

	if (!post) {
		return null;
	}

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Breadcrumb */}
			<div className='bg-white border-b'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
					<nav className='flex items-center space-x-2 text-sm'>
						<Link
							to='/'
							className='text-primary-blue hover:underline'
						>
							Home
						</Link>
						<Icon
							icon='tabler:chevron-right'
							className='text-gray-400'
						/>
						<Link
							to='/blog'
							className='text-primary-blue hover:underline'
						>
							Blog
						</Link>
						<Icon
							icon='tabler:chevron-right'
							className='text-gray-400'
						/>
						<span className='text-gray-600 truncate'>
							{post.title}
						</span>
					</nav>
				</div>
			</div>

			<article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{/* Article Header */}
				<header className='mb-8'>
					{/* Categories */}
					{post.categories && post.categories.length > 0 && (
						<div className='flex flex-wrap gap-2 mb-4'>
							{post.categories.map((category, index) => (
								<span
									key={index}
									className='px-3 py-1 text-sm bg-primary-lemon-green/10 text-primary-lemon-green rounded-full'
								>
									{category.title}
								</span>
							))}
						</div>
					)}

					{/* Title */}
					<h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6'>
						{post.title}
					</h1>

					{/* Meta Information */}
					<div className='flex flex-wrap items-center gap-6 text-gray-600 mb-8'>
						{/* Author */}
						<div className='flex items-center gap-3'>
							{post.author?.image && (
								<img
									src={urlFor(post.author.image)
										.width(48)
										.height(48)
										.url()}
									alt={post.author.name}
									className='w-12 h-12 rounded-full object-cover'
								/>
							)}
							<div>
								<p className='font-medium text-gray-900'>
									{post.author?.name || 'Anonymous'}
								</p>
								{post.author?.bio && (
									<p className='text-sm text-gray-600 line-clamp-1'>
										{post.author.bio[0]?.children?.[0]?.text || ''}
									</p>
								)}
							</div>
						</div>

						<div className='flex items-center gap-4 text-sm'>
							<span className='flex items-center gap-1'>
								<Icon icon='tabler:calendar' />
								{formatDate(post.publishedAt)}
							</span>
							<span className='flex items-center gap-1'>
								<Icon icon='tabler:clock' />
								{post.estimatedReadingTime || 1} min read
							</span>
						</div>
					</div>

					{/* Featured Image */}
					{post.mainImage && (
						<div className='aspect-video overflow-hidden rounded-lg shadow-lg mb-8'>
							<img
								src={urlFor(post.mainImage)
									.width(800)
									.height(450)
									.url()}
								alt={post.title}
								className='w-full h-full object-cover'
							/>
						</div>
					)}
				</header>

				{/* Article Content */}
				<div className='prose prose-lg max-w-none'>
					{post.body && (
						<PortableText
							value={post.body}
							components={portableTextComponents}
						/>
					)}
				</div>

				{/* Article Footer */}
				<footer className='mt-12 pt-8 border-t border-gray-200'>
					<div className='flex items-center justify-between flex-wrap gap-4'>
						<button
							onClick={() => navigate(-1)}
							className='flex items-center gap-2 text-primary-blue hover:underline'
						>
							<Icon icon='tabler:arrow-left' />
							Back to previous page
						</button>

						<Link
							to='/blog'
							className='bg-primary-blue text-white px-6 py-2 rounded-full hover:bg-primary-blue/90 transition-colors'
						>
							View All Articles
						</Link>
					</div>
				</footer>
			</article>

			{/* Related Posts */}
			{relatedPosts && relatedPosts.length > 0 && (
				<section className='bg-white py-16'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
							Related Articles
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{relatedPosts.map((relatedPost) => (
								<RelatedPostCard
									key={relatedPost._id}
									post={relatedPost}
								/>
							))}
						</div>
					</div>
				</section>
			)}
		</div>
	);
};

export default ViewBlog;
