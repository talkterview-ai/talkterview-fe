export const getClientToken = () => {
  if (typeof document === 'undefined') return null;
  
  return document.cookie
    .split('; ')
    .find(row => row.startsWith('token='))
    ?.split('=')[1] || null;
};

export const setClientToken = (token: string) => {
  if (typeof document === 'undefined') return;
  
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  document.cookie = `token=${token}; Path=/${secure}`;
};

export const removeClientToken = () => {
  if (typeof document === 'undefined') return;
  
  document.cookie = `token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};