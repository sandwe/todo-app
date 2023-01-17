export const validateEmail = (email: string) => {
  return /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(email);
};

export const validatePassword = (password: string) => {
  return /.{8,}/g.test(password);
};
