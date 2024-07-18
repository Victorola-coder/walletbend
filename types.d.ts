declare module "*.json";

interface SVGProps {
  className?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
}
