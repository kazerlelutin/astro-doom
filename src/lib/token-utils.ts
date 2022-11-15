const TOKEN_NAME = 'nswd__token'

export const getToken = (): string => {
  return localStorage.getItem(TOKEN_NAME)
}

export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_NAME, token)
}
