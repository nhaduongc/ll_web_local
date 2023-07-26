export interface RootState {
    cookies: RootStateCookies
}

export interface RootStateCookies {
    marketingCookies: boolean,
    necessaryCookies: boolean,
    isAcceptanceWindowOpen: boolean
}
