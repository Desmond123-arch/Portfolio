export const LINKDIN_URL =
  'https://www.linkedin.com/in/desmond-mends-061321241';
export const GITHUB_URL = 'https://github.com/Desmond123-arch';
export const MAIL = 'mailto:desmondmends27@gmail.com';
export const RESUME =
  'https://drive.google.com/file/d/1djKIGRw-BEtOa9bz0nw0c7lQR00KGQ6u/view?usp=sharing';

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
