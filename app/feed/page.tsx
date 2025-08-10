'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Composer from '../components/feed/Composer';
import PostCard from '../components/feed/PostCard';
import LeftSidebar from '../components/feed/LeftSidebar';
import RightSidebar from '../components/feed/RightSidebar';

interface Post {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  reposts: number;
  comments: number;
}

export default function FeedPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    const checkAuth = () => {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        router.push('/login');
        return;
      }
      setIsAuthenticated(true);
      
      // Mock posts data
      setPosts([
        {
          id: '1',
          author: 'WhisperUser',
          content: 'This is my first post on the new dark glass UI! 🌙✨',
          timestamp: '2h',
          likes: 12,
          reposts: 3,
          comments: 5
        },
        {
          id: '2', 
          author: 'TechExplorer',
          content: 'The glassmorphism effect looks amazing on this feed. Great work!',
          timestamp: '4h',
          likes: 28,
          reposts: 8,
          comments: 12
        },
        {
          id: '3',
          author: 'DesignGuru',
          content: 'Dark themes are the future. This implementation is clean and modern.',
          timestamp: '6h',
          likes: 45,
          reposts: 15,
          comments: 20
        }
      ]);
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  const handleNewPost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: 'You',
      content,
      timestamp: 'now',
      likes: 0,
      reposts: 0,
      comments: 0
    };
    setPosts([newPost, ...posts]);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 flex items-center justify-center">
        <div className="glass-panel p-8 rounded-xl">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto"></div>
          <p className="text-white mt-4 text-center">Loading feed...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            <LeftSidebar />
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-6">
            <div className="space-y-6">
              {/* Page Title */}
              <div className="glass-panel p-6 rounded-xl">
                <h1 className="text-2xl font-bold text-white mb-2">Your Feed</h1>
                <p className="text-gray-300">Stay connected with the latest updates</p>
              </div>

              {/* Composer */}
              <Composer onPost={handleNewPost} />

              {/* Posts */}
              <div className="space-y-4">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Load more button */}
              <div className="text-center py-8">
                <button className="glass-panel px-8 py-3 rounded-xl text-white hover:bg-white/10 transition-all duration-300">
                  Load More Posts
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <RightSidebar />
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
