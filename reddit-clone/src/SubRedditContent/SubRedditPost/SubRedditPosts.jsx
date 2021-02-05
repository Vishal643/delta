import React from 'react';
import './SubRedditPosts.css';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, upvotePost } from '../../Redux/home/action';
import { Link } from 'react-router-dom';

export default function Posts() {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.home.data);
	React.useEffect(() => {
		dispatch(getPost());
	}, [dispatch]);
	const handleClick = (id, upvotes, subreddit, change) => {
		dispatch(upvotePost({ id, upvotes: upvotes + change, subreddit }));
		dispatch(getPost());
	};
	return (
		<div className='posts-wrapper'>
			{posts?.map((post, index) => (
				<div key={`${post.subreddit}/${post.id}`} className='post'>
					<div className='post-sidebar'>
						<ArrowUpwardIcon
							className='upvote'
							onClick={(e) =>
								handleClick(post.id, post.upvotes, post.subreddit, 1)
							}
						/>
						<span>{post.upvotes}</span>
						<ArrowDownwardIcon
							className='downvote'
							onClick={(e) =>
								handleClick(post.id, post.upvotes, post.subreddit, -1)
							}
						/>
					</div>
					<div className='post-title'>
						<img src='assets/images/subreddit.jpg' alt='' />
						<span className='subreddit-name'>r/{post.subreddit}</span>
						<span className='post-user'>Posted by</span>
						<span className='post-user underline'>u/{post.username}</span>
						<div className='spacer'></div>
						{/* <Button label="+ JOIN" /> */}
						<Button className='button-font' color='primary'>
							+JOIN
						</Button>
					</div>
					<div className='post-body'>
						<span className='title'>{post.title}</span>
						{post.image_src && <img src={post.image_src} alt='' />}
						{post.video_src && <video></video>}
						{post.description && (
							<span className='description'>{post.description}</span>
						)}
					</div>
					<div className='post-footer'>
						<div className='comments footer-action'>
							<Link
								className='link'
								to={`/comment/${post.subreddit}/${post.id}`}
							>
								<ModeCommentIcon className='comment-icon' />
								<span>{post.comment_count} Comments</span>
							</Link>
						</div>
						<div className='share footer-action'>
							<ShareIcon />
							<span>Share</span>
						</div>
						<div className='save footer-action'>
							<BookmarkIcon />
							<span>Save</span>
						</div>
						<MoreHorizIcon className='more-icon footer-action' />
					</div>
				</div>
			))}
		</div>
	);
}
