import { useState, isValidElement, cloneElement, Children, ReactElement, HTMLAttributes, ReactNode, ButtonHTMLAttributes } from 'react'

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

interface TabsProps {
  defaultValue: string;
  children?: ReactNode;
  className?: string;
}

interface TabsListProps extends BaseProps {
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}

interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
  children?: ReactNode;
  className?: string;
}

interface TabsContentProps extends BaseProps {
  value: string;
  activeTab?: string;
}

export function Tabs({ defaultValue, children, className = "" }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)
  
  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement, { activeTab, setActiveTab })
    }
    return child
  })
  
  return <div className={className}>{childrenWithProps}</div>
}

export function TabsList({ className = "", children, activeTab, setActiveTab }: TabsListProps) {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement, { activeTab, setActiveTab })
        }
        return child
      })}
    </div>
  )
}

export function TabsTrigger({ 
  value, 
  className = "", 
  children, 
  activeTab, 
  setActiveTab,
  ...props 
}: TabsTriggerProps) {
  const isActive = activeTab === value
  
  return (
    <button
      type="button"
      className={`px-3 py-1 rounded-md ${isActive ? 'bg-gray-100' : ''} ${className}`}
      onClick={() => setActiveTab?.(value)}
      {...props}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, className = "", children, activeTab }: TabsContentProps) {
  if (activeTab !== value) return null
  
  return (
    <div className={`mt-4 ${className}`}>
      {children}
    </div>
  )
}