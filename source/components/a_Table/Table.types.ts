export interface TableProps  {
    data: DataProps
    theme: "light" | "dark"
    className?: string
}

interface DataProps {
    headings: string[]
    rows: RowProps[]
}

interface RowProps {
    columns: any[]
}