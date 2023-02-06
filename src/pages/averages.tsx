import React from 'react';
import Form from '@/components/blocks/Form/Form';

export default function Averages() {
  const onSubmit = async (e: React.SyntheticEvent) => {};

  return (
    <>
      <section style={{ width: '50%' }}>AveragesList</section>
      <section style={{ width: '50%' }}>
        <Form onSubmit={onSubmit}>
          <input
            type='number'
            name='number'
            placeholder='number'
            step='any'
            required
          />
          <div>
            <label htmlFor='checkbox_1'>
              <input type='checkbox' name='isNegative' id='checkbox_1' /> isNegative
            </label>
            <label htmlFor='checkbox_2'>
              <input type='checkbox' name='isFractional' id='checkbox_2' /> is
              Fractional
            </label>
          </div>
          <button type={'submit'}>отправить и получить среднее</button>
        </Form>
      </section>
    </>
  );
}
