import { KeyboardEvent, useEffect, useState } from "react";
import { IRatingProps } from "./Rating.props";
import styles from "./Rating.module.scss";
import StarIcon from "./star.svg";
import clsx from "clsx";

const Rating = ({
  rating,
  isEditable = false,
  setRating,
  ...rest
}: IRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  const handleClick = (rate: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(rate);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, rate: number) => {
    if (!isEditable || !setRating) return;
    if (event.key === " ") setRating(rate);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((rate: JSX.Element, idx: number) => {
      return (
        <span
          key={idx}
          className={clsx(styles.star, {
            [styles.fill]: idx < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(idx + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => handleClick(idx + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<HTMLElement>) =>
              handleKeyDown(e, idx + 1)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };
  const changeDisplay = (rat: number) => {
    if (!isEditable) return;
    constructRating(rat);
  };
  return (
    <div {...rest}>
      {ratingArray.map((element, idx) => (
        <span key={idx}>{element}</span>
      ))}
    </div>
  );
};

export default Rating;
