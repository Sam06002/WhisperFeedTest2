import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

interface Post {
  id: number;
  username: string;
  userAvatar: string;
  timeAgo: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isBookmarked: boolean;
}

const samplePosts: Post[] = [
  {
    id: 1,
    username: "alex_dev",
    userAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    timeAgo: "2h",
    content:
      "Just shipped a new feature! The feeling of seeing your code come to life in production is unmatched. 🚀",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    likes: 42,
    comments: 8,
    shares: 3,
    isLiked: true,
    isBookmarked: false,
  },
  {
    id: 2,
    username: "sarah_designs",
    userAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    timeAgo: "4h",
    content:
      "Working on some new UI concepts. Clean, minimal, and user-focused. Sometimes less really is more.",
    likes: 89,
    comments: 12,
    shares: 7,
    isLiked: false,
    isBookmarked: true,
  },
  {
    id: 3,
    username: "tech_mike",
    userAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    timeAgo: "6h",
    content:
      "Coffee ☕ + Code 💻 + Good music 🎵 = Perfect morning! What's your ideal coding setup?",
    image:
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=600&h=400&fit=crop",
    likes: 156,
    comments: 23,
    shares: 11,
    isLiked: true,
    isBookmarked: false,
  },
  {
    id: 4,
    username: "lisa_startup",
    userAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b332c5f8?w=40&h=40&fit=crop&crop=face",
    timeAgo: "8h",
    content:
      "Celebrating a major milestone! Our app just hit 10K users. Thank you to everyone who believed in our vision from day one. 🎉",
    likes: 234,
    comments: 45,
    shares: 28,
    isLiked: false,
    isBookmarked: true,
  },
  {
    id: 5,
    username: "david_mobile",
    userAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    timeAgo: "1d",
    content:
      "Mobile-first design isn't just a trend, it's a necessity. Here's how we optimized our app for better performance on all devices.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    likes: 78,
    comments: 15,
    shares: 9,
    isLiked: true,
    isBookmarked: true,
  },
];

function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 mb-6">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4 pb-3">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image
              src={post.userAvatar}
              alt={`${post.username} avatar`}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">
              {post.username}
            </h3>
            <p className="text-gray-500 text-xs">{post.timeAgo} ago</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 leading-relaxed">{post.content}</p>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="px-4 pb-3">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt="Post content"
              width={600}
              height={400}
              className="w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      )}

      {/* Post Actions */}
      <div className="flex items-center justify-between p-4 pt-3 border-t border-gray-50">
        <div className="flex items-center space-x-6">
          <button
            className={`flex items-center space-x-2 group ${
              post.isLiked ? "text-red-500" : "text-gray-500 hover:text-red-500"
            } transition-colors`}
          >
            <Heart
              className={`w-5 h-5 ${
                post.isLiked ? "fill-current" : ""
              } group-hover:scale-110 transition-transform`}
            />
            <span className="text-sm font-medium">{post.likes}</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors group">
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{post.comments}</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors group">
            <Share className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{post.shares}</span>
          </button>
        </div>

        <button
          className={`p-2 rounded-full transition-all ${
            post.isBookmarked
              ? "text-yellow-500 bg-yellow-50 hover:bg-yellow-100"
              : "text-gray-500 hover:text-yellow-500 hover:bg-yellow-50"
          }`}
        >
          <Bookmark
            className={`w-5 h-5 ${post.isBookmarked ? "fill-current" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Feed</h1>
          <p className="text-gray-600">
            Discover what&apos;s happening in your network
          </p>
        </div>

        {/* Create Post Card */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm mb-6 p-4">
          <div className="flex items-center space-x-3">
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
              alt="Your avatar"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div className="flex-1">
              <input
                type="text"
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 bg-gray-50 rounded-full border-none outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-3 py-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                <Image
                  width={20}
                  height={20}
                  src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%234F46E5'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z' /%3e%3c/svg%3e"
                  alt="Photo"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Photo</span>
              </button>

              <button className="flex items-center space-x-2 px-3 py-2 text-green-500 hover:bg-green-50 rounded-lg transition-colors">
                <Image
                  width={20}
                  height={20}
                  src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%2310B981'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' d='M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.008H9.375V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.008h-.008V9.75Z' /%3e%3c/svg%3e"
                  alt="Feeling"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Feeling</span>
              </button>
            </div>

            <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-medium">
              Post
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-0">
          {samplePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all font-medium">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
}
