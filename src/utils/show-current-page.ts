export const showCurrentPage = (): string => {
  let href = '404';
  const location = window.location.href;

  if (location.endsWith('/') || location.endsWith('main')) {
    href = 'Main';
  }
  if (location.endsWith('about')) {
    href = 'About Us';
  }

  return href;
};
