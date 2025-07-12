import React from "react";
import { UncontrolledAlert } from "reactstrap";

interface AlertProps {
  message: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  icon: string;
  className?: string;
  fade?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  message,
  color = "info",
  icon,
  className = "",
  fade = true,
}) => {
  return (
    <UncontrolledAlert
      color={color}
      className={`d-flex align-items-center ${className}`}
      fade={fade}
    >
      <span className="alert-inner--icon me-2">
        <i className={icon} />
      </span>
      <span className="alert-inner--text">
        <strong>{message}</strong>
      </span>
    </UncontrolledAlert>
  );
};

export default Alert;