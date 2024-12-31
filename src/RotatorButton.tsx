import React, { ComponentPropsWithRef } from 'react'

interface RotatorButtonProps extends ComponentPropsWithRef<'button'> {
  text?: string
}

const RotatorButton: React.FC<RotatorButtonProps> = ({
  text,
  children,
  ...props
}) => <button {...props}>{text || children || 'Default text'}</button>

export default RotatorButton
