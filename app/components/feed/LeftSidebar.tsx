'use client';

export default function LeftSidebar() {
  return (
    <nav className="sticky top-4 rounded-2xl border border-neutral-800/60 bg-neutral-900/40 backdrop-blur-md p-4 text-neutral-200">
      <div className="mb-4 font-semibold text-neutral-100">WhisperFeed</div>
      <ul className="space-y-1">
        <li><a className="block rounded-lg px-3 py-2 hover:bg-white/5" href="/feed">Home</a></li>
        <li><a className="block rounded-lg px-3 py-2 hover:bg-white/5" href="/explore">Explore</a></li>
        <li><a className="block rounded-lg px-3 py-2 hover:bg-white/5" href="/messages">Messages</a></li>
        <li><a className="block rounded-lg px-3 py-2 hover:bg-white/5" href="/profile">Profile</a></li>
        <li><a className="block rounded-lg px-3 py-2 hover:bg-white/5" href="/settings">Settings</a></li>
      </ul>
      <button className="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">
        New Post
      </button>
    </nav>
  );
}
