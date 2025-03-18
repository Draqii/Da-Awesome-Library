export interface TextboxProps  {
    value
    onChange
    placeholder
    theme: "light" | "dark"
    isPassword?
    className?: string
}