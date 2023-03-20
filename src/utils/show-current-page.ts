export const showCurrentPage = (path?: string): string => {
  let href = '404';
  const location = path ?? window.location.href;

  if (location.endsWith('/') || location.endsWith('main')) {
    href = 'Main';
  }
  if (location.endsWith('about')) {
    href = 'About Us';
  }

  return href;
};
