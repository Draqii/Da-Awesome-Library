export interface ParagraphProps  {
    size: "large" | "medium" | "small"
    children: any
    theme: "light" | "dark"
    onClick?
    className?: string
}