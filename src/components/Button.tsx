import "./Button.css";

type ButtonProps = {
  text: string;
  color?: string;
  onClick?: () => void;
};

export default function Button({ text, color, onClick }: ButtonProps) {
  return <button className="btn" style={{backgroundColor: color}} onClick={onClick}>{text}</button>;
}
