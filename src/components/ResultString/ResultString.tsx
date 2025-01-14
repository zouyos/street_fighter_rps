import style from './style.module.css';

type ResultStringProps = {
  game: boolean;
  selectedSymbol: string | undefined;
  opponentChoice: string | undefined;
  symbolMap: Record<string, JSX.Element>;
  resultString: string;
};

export default function ResultString({
  game,
  selectedSymbol,
  opponentChoice,
  symbolMap,
  resultString,
}: ResultStringProps) {
  return (
    <p className={style.resultString}>
      {selectedSymbol && game ? (
        <>
          Your opponent plays{' '}
          <span className='icon-inline'>
            {opponentChoice && symbolMap[opponentChoice]}
          </span>{' '}
          {resultString}
        </>
      ) : (
        `${resultString}`
      )}
    </p>
  );
}
