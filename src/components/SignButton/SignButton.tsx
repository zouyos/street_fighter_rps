import style from './style.module.css';

type ButtonProps = {
  label: JSX.Element;
  color: string;
  onClick: (symbol: JSX.Element) => void;
  game: boolean;
};

export default function SignButton({
  label,
  color,
  onClick,
  game,
}: ButtonProps) {
  return (
    <button
      className={`rounded-pill p-2 mx-3 my-1 btn btn-${color} ${style.fit}`}
      onClick={() => onClick(label)}
      disabled={!game}
    >
      {label}
    </button>
  );
}
