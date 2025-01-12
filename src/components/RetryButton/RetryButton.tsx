import style from './style.module.css';

type RetryButtonProps = {
  game: boolean;
  onClick: () => void;
};

export default function RetryButton({ game, onClick }: RetryButtonProps) {
  return (
    <div className={style.retryButtonContainer}>
      {!game && (
        <button className='btn btn-warning text-center my-2' onClick={onClick}>
          Retry?
        </button>
      )}
    </div>
  );
}
