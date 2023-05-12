export const TokenAcces = (token) => {
  if (token) {
    const [, payload] = token.split('.')
    const decodedPayload = atob(payload)
    const datos = JSON.parse(decodedPayload)
    const { id, name, lastname, email } = datos
    return { id, name, lastname, email }
  } else {
    console.log('no datos')
  }
}
