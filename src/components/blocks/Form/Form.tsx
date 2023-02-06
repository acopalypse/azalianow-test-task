import { Props } from '@/types/props.type';

import s from './Form.module.css';

interface FormProps extends Props {
  onSubmit: (e: React.SyntheticEvent) => void;
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  const submitHandler = async (e: React.SyntheticEvent) => {
    onSubmit(e);
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={submitHandler}>{children}</form>
    </div>
  );
};

export default Form;
