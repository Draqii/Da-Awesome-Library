export interface LinkProps  {
    filename?: string
    copyLink?: string
    target?: "_blank" | "_self"
    children: any
    isInternal: boolean 
    to: any 
    theme: "light" | "dark"
    className?: string
}