require('dotenv').config()

const config = {
  DEV: process.env.NODE_ENV !== 'production',
  PORT: process.env.PORT || 3000
}

module.exports = config