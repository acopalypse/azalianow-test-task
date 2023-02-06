import React, { useEffect, useState } from 'react';
import Form from '@/components/blocks/Form/Form';
import { AverageData } from '@/types/fetcher.type';
import List from '@/components/blocks/List/List';
import fetcher from '@/utils/fetcher';

export default function Averages() {
  const [list, setList] = useState<AverageData[]>([]);
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const target = e.target as typeof e.target & {
        number: { value?: number };
        isNegative: { checked: boolean };
        isFractional: { checked: boolean };
      };
      const variables = {
        number: target.number?.value,
        isNegative: target.isNegative.checked,
        isFractional: target.isFractional.checked,
      };
      const result = await fetcher<AverageData>({
        endpoint: '/averages',
        method: 'POST',
        variables,
      });

      setList((prev) => [...prev, result]);
    } catch (err) {}
  };

  useEffect(() => {}, []);

  return (
    <>
      <section style={{ width: '50%' }}>
        <List>
          {list.map((item, index) => (
            <div key={`${item.number}-${index}`}>
              <p>
                <span>Number:</span> {item.isNegative && '-'}
                {item.number}
                <span>Result:</span> {item.result || 'empty'}
              </p>
            </div>
          ))}
        </List>
      </section>
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
