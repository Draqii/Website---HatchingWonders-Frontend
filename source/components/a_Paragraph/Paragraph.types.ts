export interface ParagraphProps  {
    size: "large" | "medium" | "small"
    children: any
    language?: "english" | "german"
    theme?: "light" | "dark"
    className?: string
}