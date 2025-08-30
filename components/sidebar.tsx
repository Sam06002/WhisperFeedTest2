import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input
          type="search"
          placeholder="Search"
          className="w-full rounded-full bg-gray-100 pl-10 focus-visible:ring-2 focus-visible:ring-brand"
        />
      </div>
      
      {/* Trending Section */}
      <div className="rounded-xl bg-gray-50 p-4">
        <h2 className="text-xl font-bold mb-4">What&apos;s happening</h2>
        
        {[1, 2, 3].map((item) => (
          <div key={item} className="py-3 border-b border-gray-200 last:border-0 last:pb-0">
            <p className="text-xs text-gray-500">Trending in Technology</p>
            <h3 className="font-bold">#WhisperFeed</h3>
            <p className="text-sm text-gray-500">2,345 posts</p>
          </div>
        ))}
        
        <Button variant="ghost" className="text-brand hover:bg-transparent hover:text-brand-dark mt-2 px-0">
          Show more
        </Button>
      </div>
      
      {/* Who to follow */}
      <div className="rounded-xl bg-gray-50 p-4">
        <h2 className="text-xl font-bold mb-4">Who to follow</h2>
        
        {[1, 2].map((item) => (
          <div key={item} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0 last:pb-0">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
                <h3 className="font-bold text-sm">User {item}</h3>
                <p className="text-sm text-gray-500">@user{item}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="rounded-full">
              Follow
            </Button>
          </div>
        ))}
        
        <Button variant="ghost" className="text-brand hover:bg-transparent hover:text-brand-dark mt-2 px-0">
          Show more
        </Button>
      </div>
      
      {/* Footer Links */}
      <div className="text-xs text-gray-500 space-x-2 flex flex-wrap">
        <span>Terms of Service</span>
        <span>•</span>
        <span>Privacy Policy</span>
        <span>•</span>
        <span>Cookie Policy</span>
        <span>•</span>
        <span>Accessibility</span>
        <span>•</span>
        <span>© 2025 WhisperFeed</span>
      </div>
    </div>
  );
}
