import { Props } from '@/types/props.type';
import s from './List.module.css';

const List: React.FC<Props> = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default List;
