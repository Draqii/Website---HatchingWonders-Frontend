export interface TableProps  {
    data: DataProps
    language?: "english" | "german"
    theme?: "light" | "dark"
    className?: string
}

interface DataProps {
    headings: string[]
    rows: RowProps[]
}

interface RowProps {
    columns: any[]
}