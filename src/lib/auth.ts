// Demo authentication system with hardcoded credentials

import { DEMO_USER } from './mockData';

export interface User {
  email: string;
  name: string;
  isDemo: boolean;
}

export const authenticateUser = (email: string, password: string): User | null => {
  if (email === DEMO_USER.email && password === DEMO_USER.password) {
    return {
      email: DEMO_USER.email,
      name: DEMO_USER.name,
      isDemo: true
    };
  }
  return null;
};

export const loginAsGuest = (): User => {
  return {
    email: DEMO_USER.email,
    name: DEMO_USER.name,
    isDemo: true
  };
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('secondshift_user');
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};

export const saveUser = (user: User): void => {
  localStorage.setItem('secondshift_user', JSON.stringify(user));
};

export const logout = (): void => {
  localStorage.removeItem('secondshift_user');
  localStorage.removeItem('secondshift_onboarding_complete');
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

export const hasCompletedOnboarding = (): boolean => {
  return localStorage.getItem('secondshift_onboarding_complete') === 'true';
};

export const markOnboardingComplete = (): void => {
  localStorage.setItem('secondshift_onboarding_complete', 'true');
};
