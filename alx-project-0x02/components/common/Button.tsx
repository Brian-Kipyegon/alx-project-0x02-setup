import { ButtonProps } from "../../interfaces";

export default function Button({ size, shape, label, onClick }: ButtonProps) {
  let sizeClasses = "";
  switch (size) {
    case "small":
      sizeClasses = "px-2 py-1 text-sm";
      break;
    case "medium":
      sizeClasses = "px-4 py-2 text-base";
      break;
    case "large":
      sizeClasses = "px-6 py-3 text-lg";
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses} ${shape} shadow-md hover:bg-blue-700 transition`}
    >
      {label}
    </button>
  );
}
