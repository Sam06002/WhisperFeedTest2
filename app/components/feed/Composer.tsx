'use client';

import { useState } from 'react';

interface ComposerProps {
  onPost: (content: string) => void;
}

export default function Composer({ onPost }: ComposerProps) {
  const [content, setContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const maxChars = 280;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || isPosting) return;
    
    setIsPosting(true);
    
    // Simulate posting delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onPost(content.trim());
    setContent('');
    setIsPosting(false);
  };

  const remainingChars = maxChars - content.length;
  const isOverLimit = remainingChars < 0;
  const canPost = content.trim().length > 0 && !isOverLimit && !isPosting;

  return (
    <div className="glass-panel p-6 rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* User Avatar & Input Area */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold">
              U
            </div>
          </div>
          
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full bg-transparent text-white placeholder-gray-400 resize-none border-none outline-none text-lg"
              rows={3}
              disabled={isPosting}
            />
            
            {/* Character Counter */}
            <div className="flex items-center justify-between mt-2">
              <div className="text-sm text-gray-400">
                Share your thoughts with the community
              </div>
              <div className={`text-sm font-medium ${
                isOverLimit 
                  ? 'text-red-400' 
                  : remainingChars < 50 
                    ? 'text-yellow-400' 
                    : 'text-gray-400'
              }`}>
                {remainingChars}
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          {/* Media Options */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
              disabled={isPosting}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">Photo</span>
            </button>
            
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
              disabled={isPosting}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v8.586l-1.293-1.293a1 1 0 00-1.414 0L12 14.586l-2.293-2.293a1 1 0 00-1.414 0L7 13.586V4z" />
              </svg>
              <span className="text-sm">GIF</span>
            </button>
            
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
              disabled={isPosting}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4v16l5-3 5 3V4" />
              </svg>
              <span className="text-sm">Poll</span>
            </button>
          </div>

          {/* Post Button */}
          <button
            type="submit"
            disabled={!canPost}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              canPost
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isPosting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Posting...</span>
              </div>
            ) : (
              'Post'
            )}
          </button>
        </div>
      </form>

      <style jsx>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
      `}</style>
    </div>
  );
}
