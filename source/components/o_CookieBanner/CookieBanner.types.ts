export interface CookieBannerProps  {
    cookieConsent?
    id?
    source?
    onConsentChange: any
    language?: "english" | "german"
    theme?: "light" | "dark"
    className?: string
}