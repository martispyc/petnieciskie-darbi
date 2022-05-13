const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : process.env.VERCEL_URL

export const mainTheme = {
    colors: {
        body: 'white',

        secondary: '#1762A7',
        secondaryHalf: 'rgba(23, 98, 167, .5)',

        tertiary: '#BC3A80',
        tertiaryHalf: 'rgba(188, 58, 128, .2)',


        gray: '#f1f1f1',
  }
}