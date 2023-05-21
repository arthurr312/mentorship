interface IButtonProps {
  text: string;
  disabled: boolean;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
}

export function Button({ text, disabled, type, onClick }: IButtonProps) {
  const buttonStyle =
    "font-bold text-white text-lg p-1 px-4 bg-blue-primary m-2 rounded-md duration-300 hover:bg-blue-dark";
  const isDisabled =
    "bg-gray-200 my-1 rounded-lg text-white p-2 duration-300 font-bold text-white text-lg m-2 rounded-lg";
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={disabled ? isDisabled : buttonStyle}
    >
      {text}
    </button>
  );
}
