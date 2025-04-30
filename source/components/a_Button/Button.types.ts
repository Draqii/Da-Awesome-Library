export interface ButtonProps  {
    isEnabled: boolean
    children: any
    isPrimary: boolean
    theme: "light" | "dark"
    onClick: any
    className?: string
}