import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const publicPaths = [
    '/',
    '/login',
    '/signup',
    '/api/auth/login',
    '/api/auth/signup',
    '/_next',
    '/favicon.ico'
  ];

  // Check if the path is public
  const isPublicPath = publicPaths.some(publicPath => 
    path.startsWith(publicPath)
  );

  // Get the token from the request cookies
  const token = request.cookies.get('token')?.value || '';

  // If trying to access a protected route without a token, redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If trying to access login/signup with a valid token, redirect to feed
  if ((path === '/login' || path === '/signup') && token) {
    return NextResponse.redirect(new URL('/feed', request.url));
  }

  // If trying to access root with a valid token, redirect to feed
  if (path === '/' && token) {
    return NextResponse.redirect(new URL('/feed', request.url));
  }

  // Continue with the request
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
