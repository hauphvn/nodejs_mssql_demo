export const PATH_API = {
    SIGN_UP: '/signUp',
    SIGN_IN: '/signIn',
    SIGN_OUT: '/signOut',
    REFRESH_TOKEN: '/',
    CATEGORY: '/category',
    CATEGORY_ADD: '/add',
    CATEGORY_GET: '/',
    TOKEN_ACCESS_REGISTRY_FROM_POS: '/token-access-registry-from-pos',
    TOKEN_ACCESS_REGISTRY_FROM_POS_ADD_ONE: '/add',
    TOKEN_ACCESS_REGISTRY_FROM_POS_DEL_ONE: '/delete',
    TOKEN_ACCESS_REGISTRY_FROM_POS_GET_ONE: '/get',
    CUSTOMER: '/customers',
    CUSTOMER_GET_ONE: '/:id',
    CUSTOMER_GET_ALL: '/',
    CUSTOMER_ADD_ONE: '/add',
}
export const CODE_BE = {
    PHONE_EXISTS: '001',
    WRONG_CREATE_USER: '002',
    PHONE_NOT_EXISTS: '003',
    WRONG_PASS: '004',
    WRONG_REFRESH_TOKEN: '005',
    USER: {
        NOT_FOUND: '1000',
        WRONG_PASS: '1001',
        WRONG_REFRESH_TOKEN: '1002',
        WRONG_CREATE_USER: '1003',
        PHONE_EXISTS: '1004',
        PHONE_NOT_EXISTS: '1005',
        EMAIL_EXISTS: '1006',
        EMAIL_NOT_EXISTS: '1007',
    }
}
export const MSG_BE = {
    CREATE_USER_SUCCESS: 'CREATE NEW USER SUCCESSFUL',
    WRONG_REFRESH_TOKEN: 'WRONG REFRESH TOKEN',
    SIGN_OUT_SUCCESS: 'SIGN OUT SUCCESSFUL',
}

export const PERCENT_MEMBER = {
    VIP: 10, DIAMOND: 15
}
export const RANGE_UP_TO_LEVEL_MEMBER = {
    TO_VIP: 300, TO_DIAMOND: 2000
}
export const LEVEL_MEMBER = {
    STANDARD: 1, VIP: 2, DIAMOND: 3,
}

export const ERROR_SERVER = {
    DUPLICATE_PHONE_NUMBER: 'error_001',
    DUPLICATE_EMAIL: 'error_002',
    DUPLICATE_CODE_ID: 'error_003',
}
export const CUSTOMER_STATUS = {
    PENDING: 'PENDING',
    DENIED: 'DENIED',
    ACTIVE: 'ACTIVE',
}
