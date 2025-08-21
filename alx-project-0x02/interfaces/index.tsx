// Example placeholder interface
export interface ExampleProps {
  title: string;
  content: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  label: string;
  onClick?: () => void;
}
