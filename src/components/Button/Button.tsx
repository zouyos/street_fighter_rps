import style from './style.module.css';

type ButtonProps = {
  label: JSX.Element;
  color: string;
  onClick: (symbol: JSX.Element) => void;
  game: boolean;
};

export default function Button({ label, color, onClick, game }: ButtonProps) {
  return (
    <button
      className={`mx-3 my-1 btn btn-${color} ${style.fit}`}
      onClick={() => onClick(label)}
      disabled={!game}
    >
      {label}
    </button>
  );
}
