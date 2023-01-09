import { useState } from "react";
import Button from "../components/Button/Button";
import HTag from "../components/HTag/HTag";
import Paragraph from "../components/Paragraph/Paragraph";
import Rating from "../components/Rating/Rating";
import Tag from "../components/Tag/Tag";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(2);
  return (
    <>
      <HTag children='Title' tag='h3' />
      <Button
        children='Кнопка'
        isPrimary={false}
        isArrow={true}
        arrowDirection='bottom'
      />
      <Button children='Кнопка' isPrimary={true} isArrow={true} />
      <Paragraph children='lorem ipsum' fontSize='18px' />
      <Tag children='HH.ru' color='red' size='m' />
      <Tag children='Мал' color='green' size='s' href='hh.ru' />
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
