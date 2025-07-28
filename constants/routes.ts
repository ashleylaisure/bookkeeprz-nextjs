const ROUTES = {
    HOME: '/',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',

    FEATURES: '/features',
    PRICING: '/pricing',
    ABOUT: '/about',

    DASHBOARD: '/dashboard',
    BOOK: (bookId: string) => `/books/${bookId}`,
    TAGS: (tagId: string) => `/tags/${tagId}`,
}

export default ROUTES;