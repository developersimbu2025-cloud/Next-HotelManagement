import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={`rounded-md px-4 py-2 ${className}`}>
      {children}
    </button>
  )
}

export default Button
