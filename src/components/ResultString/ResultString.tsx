import style from './style.module.css';

type ResultStringProps = {
  resultString?: JSX.Element | string;
};

export default function ResultString({ resultString }: ResultStringProps) {
  return <p className={style.resultString}>{resultString}</p>;
}
