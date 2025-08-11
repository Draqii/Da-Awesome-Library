export interface TextareaProps  {
    value
    onChange
    placeholder
    theme: "light" | "dark"
    isPassword?
    className?: string
    rows
}