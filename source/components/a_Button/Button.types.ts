export interface ButtonProps  {
    isPrimary: boolean
    children: any
    onClick: any
    language?: "english" | "german"
    theme?: "light" | "dark"
    className?: string
}