import { HTMLAttributes, ReactNode } from "react"

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export function Alert({ className = "", children, ...props }: BaseProps) {
  return (
    <div 
      role="alert"
      className={`rounded-lg border p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function AlertDescription({ className = "", children, ...props }: BaseProps) {
  return (
    <div
      className={`text-sm text-gray-600 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}