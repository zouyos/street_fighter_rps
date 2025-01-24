import style from './style.module.css';

type MoveHistoryProps = {
  playerHistory: (JSX.Element | string)[];
  opponentHistory: (JSX.Element | string)[];
};

export default function MoveHistory({
  playerHistory,
  opponentHistory,
}: MoveHistoryProps) {
  return (
    playerHistory &&
    opponentHistory && (
      <div className={style.history}>
        <p className={style.historyLabel}>HISTORY:</p>
        <div className={`${style.playerHistory}`}>
          PLAYER:
          <span className={style.playerIconContainer}>
            {playerHistory
              .slice(-3)
              .reverse()
              .map((item, index) => (
                <span key={index} className='icon-inline mx-1'>
                  {item}
                </span>
              ))}
          </span>
        </div>
        <div className={`${style.opponentHistory}`}>
          OPPONENT:
          <span className={`${style.opponentIconContainer}`}>
            {opponentHistory
              .slice(-3)
              .reverse()
              .map((item, index) => (
                <span key={index} className='icon-inline mx-1'>
                  {item}
                </span>
              ))}
          </span>
        </div>
      </div>
    )
  );
}
