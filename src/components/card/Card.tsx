import './Card.css';
import Loader from '../loader/Loader';

interface CardProps {
  data: Character;
  onClickHandler: (id: string) => void;
}

function Card({ data, onClickHandler }: CardProps) {
  return (
    <div className="card" onClick={() => onClickHandler(data.id)}>
      <div className="card-img">
        {/* <span className="card-img-loader"></span> */}
        <Loader />
        <img
          className="hidden"
          src={data.imgUrl}
          alt={`${data.firstName} ${data.lastName}`}
          onLoad={(e) => {
            const target = e.target;
            if (target instanceof HTMLImageElement) {
              target.classList.remove('hidden');
            }
          }}
        />
      </div>
      <div className="card-body">
        <div className="card-last-name">{data.lastName}</div>
        <div className="card-first-name">{data.firstName}</div>
        <div className="card-japan-name">{data.japanName}</div>
      </div>
    </div>
  );
}

export default Card;
