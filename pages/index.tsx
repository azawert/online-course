import Button from "../components/Button/Button";
import HTag from "../components/HTag/HTag";
import Paragraph from "../components/Paragraph/Paragraph";
import Tag from "../components/Tag/Tag";

export default function Home(): JSX.Element {
  return (
    <div>
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
    </div>
  );
}
