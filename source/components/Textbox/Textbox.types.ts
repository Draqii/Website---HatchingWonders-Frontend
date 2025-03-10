export interface TextboxProps  {
    value
    onChange
    placeholder
    language?: "english" | "german"
    theme?: "light" | "dark"
    className?: string
}