export const LINKDIN_URL = '';
export const GITHUB_URL = '';
export const MAIL = '';
export const RESUME = '';

export type lottieConfig = {
  link: string;
  path: string;
  title: string;
};
export const socialsLotties: lottieConfig[] = [
  { link: LINKDIN_URL, path: '/lotties/linkedin.json', title: 'LinkedIn' },
  { link: GITHUB_URL, path: '/lotties/github.json', title: 'GitHub' },
  { link: MAIL, path: '/lotties/email.json', title: 'Email' },
  { link: RESUME, path: '/lotties/file.json', title: 'Resume' },
];
