import { useContext } from 'react';
import { ThemeContext } from '../Context';
import Form from './Form';

export default function Panel({ title }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;

  return (
    <section className={`panel ${className}`}>
      <h1>{title}</h1>
      <Form />
    </section>
  );
}
