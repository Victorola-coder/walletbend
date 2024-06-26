declare module "*.json";

interface SVGProps {
  className?: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
}
