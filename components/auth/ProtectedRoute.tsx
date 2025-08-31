'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

type ProtectedRouteProps = {
  children: React.ReactNode;
  requiredRole?: 'user' | 'admin';
  redirectTo?: string;
};

export default function ProtectedRoute({ 
  children, 
  requiredRole = 'user',
  redirectTo = '/login' 
}: ProtectedRouteProps) {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Redirect to login if not authenticated
      if (!isAuthenticated) {
        router.push(redirectTo);
      } 
      // Redirect to home if user doesn't have required role
      else if (requiredRole === 'admin' && user?.role !== 'admin') {
        router.push('/');
      } else {
        setIsAuthorized(true);
      }
      setIsChecking(false);
    }
  }, [isAuthenticated, isLoading, router, requiredRole, user, redirectTo]);

  // Show loading state
  if (isLoading || isChecking) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-sm text-muted-foreground">
          {isLoading ? 'Loading...' : 'Checking permissions...'}
        </p>
      </div>
    );
  }

  // Render children only if authenticated and has required role
  if (isAuthorized && isAuthenticated && (requiredRole === 'user' || user?.role === 'admin')) {
    return <>{children}</>;
  }

  // Return null while redirecting
  return null;
}
