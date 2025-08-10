export default function RightSidebar() {
  return (
    <div className="w-80 h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
      <div className="space-y-6">
        {/* Trending Section */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Trending Topics</h3>
          <div className="space-y-3">
            <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
              #trending1
            </div>
            <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
              #trending2
            </div>
            <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
              #trending3
            </div>
          </div>
        </div>

        {/* Suggested Users Section */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Suggested Users</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <div>
                  <div className="text-white font-medium">User 1</div>
                  <div className="text-gray-400 text-sm">@user1</div>
                </div>
              </div>
              <button className="px-3 py-1 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
                Follow
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                <div>
                  <div className="text-white font-medium">User 2</div>
                  <div className="text-gray-400 text-sm">@user2</div>
                </div>
              </div>
              <button className="px-3 py-1 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
