import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, index) =>
        onClick ? (
          <span key={index} onClick={() => onClick(index + 1)} style={style}>
            {rating > index ? (
              <AiFillStar fontSize={15} />
            ) : (
              <AiOutlineStar fontSize={15} />
            )}
          </span>
        ) : (
          <span key={index} style={style}>
            {rating > index ? (
              <AiFillStar fontSize={15} />
            ) : (
              <AiOutlineStar fontSize={15} />
            )}
          </span>
        )
      )}
    </>
  );
};

export default Rating;
