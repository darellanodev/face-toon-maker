import React, { ComponentPropsWithRef } from "react";

interface RotatorButtonProps extends ComponentPropsWithRef<"button"> {
  text?: string;
}

const RotatorButton: React.FC<RotatorButtonProps> = ({
  text,
  children,
  ...props
}) => <button {...props}>{text || children}</button>;

export default RotatorButton;
