import React, { useEffect, useState } from 'react';
import Form from '@/components/blocks/Form/Form';
import { AverageData } from '@/types/fetcher.type';
import List from '@/components/blocks/List/List';
import fetcher from '@/utils/fetcher';

export default function Averages() {
  const [list, setList] = useState<{ data: AverageData[]; loading: boolean }>({
    loading: false,
    data: [],
  });

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const target = e.target as typeof e.target & {
        number: { value?: string };
        isNegative: { checked: boolean };
        isFractional: { checked: boolean };
      };
      const variables = {
        number: target.number?.value,
        isNegative: target.isNegative.checked,
        isFractional: target.isFractional.checked,
      };

      if (variables.number === '') return;

      setList((prev) => ({ ...prev, loading: true }));
      const result = await fetcher<AverageData>({
        endpoint: '/averages',
        method: 'POST',
        variables,
      });

      setList((prev) => {
        if (result.hasOwnProperty('number')) {
          return { data: [...prev.data, result], loading: false };
        }
        return { ...prev, loading: false };
      });
    } catch (err) {
      console.log('Err at fetch averages', err);
    }
  };

  useEffect(() => {
    fetcher<AverageData[]>({ endpoint: '/history', method: 'GET' })
      .then((data) => setList({ data: [...data], loading: false }))
      .catch((err) => console.log('Err at fetch history', err));
  }, []);

  return (
    <>
      <section style={{ width: '50%' }}>
        <List>
          {list.data.map((item, index) => (
            <div key={`${item.number}-${index}`}>
              <p>
                <span>Number:</span> {item.isNegative && '-'}
                {item.number}
              </p>
              <p>
                <span>Result:</span> {item.result}
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
          <button disabled={list.loading} type={'submit'}>
            отправить и получить среднее
          </button>
        </Form>
      </section>
    </>
  );
}
