export interface StudentProfile {
  name: string;
  idNumber: string;
  program: string;
  yearLevel: string;
  /** Remote URL string, or local `require('./assets/...')` asset */
  avatarUrl: string | number;
  campus: string;
}

export interface StatusBadgeProps {
  isActive: boolean;
}
