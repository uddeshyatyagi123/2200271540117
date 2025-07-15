export const validateUrl = (url) => {
  try {
    const fixed = url.startsWith('http') ? url : `https://${url}`;
    new URL(fixed);
    return true;
  } catch {
    return false;
  }
};

export const generateShortcode = () => {
  return Math.random().toString(36).substring(2, 8);
};
