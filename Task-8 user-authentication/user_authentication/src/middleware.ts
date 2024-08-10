// import middleware from 'next-auth/middleware'
// export default middleware

export { default } from 'next-auth/middleware'

export const config = {
    // * - zero or more
    // + - one or more
    // ? - zore or one
    matcher: ['/jobs']
}