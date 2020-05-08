import md5 from 'md5'

const gravatar = email => {
  const baseUrl = 'https://gravatar.com/avatar/'
  const formattedEmail = email.trim().toLowerCase()
  const hash = md5(formattedEmail, {encoding: 'binary'})

  return `${baseUrl}${hash}`
}

export default gravatar