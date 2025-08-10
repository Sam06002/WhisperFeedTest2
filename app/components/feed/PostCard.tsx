'use client';

import { useState } from 'react';

interface Post {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  reposts: number;
  comments: number;
}

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isReposted, setIsReposted] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [repostsCount, setRepostsCount] = useState(post.reposts);
  const [showActions, setShowActions] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleRepost = () => {
    setIsReposted(!isReposted);
    setRepostsCount(prev => isReposted ? prev - 1 : prev + 1);
  };

  const handleComment = () => {
    // Implement comment functionality
    console.log('Comment clicked');
  };

  const handleShare = () => {
    // Implement share functionality
    console.log('Share clicked');
  };

  return (
    <div 
      className="glass-panel p-6 rounded-xl hover:bg-white/15 transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
            {post.author.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Author & Timestamp */}
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-white text-lg">{post.author}</h3>
            <span className="text-gray-400 text-sm">@{post.author.toLowerCase()}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-400 text-sm">{post.timestamp}</span>
            
            {/* More options button */}
            <button 
              className={`ml-auto p-2 rounded-full hover:bg-white/10 transition-all duration-200 ${
                showActions ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path d="M10 4a2 2 0 100-4 2 2 0 000 4z" />
                <path d="M10 20a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
          </div>

          {/* Post Content */}
          <div className="mb-4">
            <p className="text-gray-100 text-base leading-relaxed">
              {post.content}
            </p>
          </div>

          {/* Engagement Stats */}
          <div className="flex items-center gap-6 text-gray-400 text-sm mb-3 border-b border-white/5 pb-3">
            <span>{post.comments} comments</span>
            <span>{repostsCount} reposts</span>
            <span>{likesCount} likes</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            {/* Comment Button */}
            <button
              onClick={handleComment}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-200 text-gray-400 group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm font-medium">{post.comments}</span>
            </button>

            {/* Repost Button */}
            <button
              onClick={handleRepost}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 group ${
                isReposted 
                  ? 'text-green-400 bg-green-500/10' 
                  : 'text-gray-400 hover:bg-green-500/10 hover:text-green-400'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-sm font-medium">{repostsCount}</span>
            </button>

            {/* Like Button */}
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 group ${
                isLiked 
                  ? 'text-red-400 bg-red-500/10' 
                  : 'text-gray-400 hover:bg-red-500/10 hover:text-red-400'
              }`}
            >
              <svg className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-medium">{likesCount}</span>
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-200 text-gray-400 group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        
        .glass-panel:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
        }
      `}</style>
    </div>
  );
}
