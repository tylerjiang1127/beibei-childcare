export const getImagePath = (path) => {
  const isProduction = import.meta.env.PROD;
  const cleanPath = path.replace('/public/', '');
  return isProduction ? cleanPath : `public/${cleanPath}`;
}; 