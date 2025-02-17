import dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });

export interface User {
  email: string;
  password: string;
  role: UserRole;
}

enum UserRole {
  standard = 'standard user',
  visual = 'visual user',
  locked = 'locked user',
}

// export const testUsers = {
//   standardUser: [
//     {
//       email: process.env.STANDARD_USER_EMAIL || '',
//       password: process.env.STANDARD_PASSWORD || '',
//       role: UserRole.standard,
//     },
//   ],
//   visualUser: [
//     {
//       email: process.env.VISUAL_USER_EMAIL || '',
//       password: process.env.VISUAL_USER_PASSWORD || '',
//       role: UserRole.visual,
//     },
//   ],
//   lockedUser: [
//     {
//       email: process.env.LOCKED_USER_EMAIL || '',
//       password: process.env.LOCKED_USER_PASSWORD || '',
//       role: UserRole.locked,
//     },
//   ],
// };

export const standardUser: User = {
  email: process.env.STANDARD_USER_EMAIL || '',
  password: process.env.STANDART_USER_PASSWORD || '',
  role: UserRole.standard,
};

export const visualUser: User = {
  email: process.env.VISUAL_USER_EMAIL || '',
  password: process.env.VISUAL_USER_PASSWORD || '',
  role: UserRole.visual,
};

export const lockedUser: User = {
  email: process.env.LOCKED_USER_EMAIL || '',
  password: process.env.LOCKED_USER_PASSWORD || '',
  role: UserRole.visual,
};

export function returnStandard(): User {
  return standardUser;
}

function returnVisual(): User {
  return visualUser;
}

export function returnLocked(): User {
  return lockedUser;
}

export const testUsers: Record<string, User> = {
  standardUser,
  visualUser,
  lockedUser,
};
