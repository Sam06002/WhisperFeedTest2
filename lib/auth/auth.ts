/**
 * Authentication Service
 * 
 * Handles user authentication, session management, and provides test credentials for development.
 * In a production environment, this would connect to a backend authentication service.
 */

// User type
export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface UserWithPassword extends User {
  password: string;
}

type LoginResponse = {
  success: boolean;
  user?: User;
  error?: string;
};

// Test user credentials (for development only)
const TEST_USERS: UserWithPassword[] = [
  {
    id: '1',
    username: 'testuser',
    password: 'password123',
    name: 'Test User',
    email: 'test@example.com',
    role: 'user'
  },
  {
    id: '2',
    username: 'admin',
    password: 'admin123',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin'
  }
];

// Session storage key
const SESSION_KEY = 'auth_session';



/**
 * Simulates an API call to authenticate a user
 * @deprecated Use loginUser instead
 */
export const login = async (username: string, password: string): Promise<LoginResponse> => {
  return loginUser(username, password);
};

/**
 * Authenticates a user with username and password
 */
export const loginUser = async (username: string, password: string): Promise<LoginResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Find user by username
  const user = TEST_USERS.find(u => u.username === username);
  
  // Check if user exists and password matches
  if (!user || user.password !== password) {
    return {
      success: false,
      error: 'Invalid username or password'
    };
  }
  
  // Create user session (without password)
  const { password: _, ...userData } = user;
  const session = { user: userData, expires: Date.now() + 24 * 60 * 60 * 1000 }; // 24 hours
  
  // Store session in localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
  
  return {
    success: true,
    user: userData
  };
};

/**
 * Logs out the current user
 */
export const logout = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(SESSION_KEY);
  }
};

/**
 * Gets the current authenticated user
 */
export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  
  const sessionStr = localStorage.getItem(SESSION_KEY);
  if (!sessionStr) return null;
  
  try {
    const session = JSON.parse(sessionStr);
    // Check if session is expired
    if (session.expires < Date.now()) {
      logout();
      return null;
    }
    return session.user;
  } catch (e) {
    console.error('Failed to parse auth session', e);
    return null;
  }
};

/**
 * Checks if the current user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

/**
 * Checks if the current user has admin role
 */
export const isAdmin = (): boolean => {
  const user = getCurrentUser();
  return user?.role === 'admin';
};
