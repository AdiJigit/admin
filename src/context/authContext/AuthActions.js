export const loginStart = () => ({
  type: 'LOGIN_STARTS',
});
export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});
export const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
});