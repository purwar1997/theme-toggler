import { useContext } from 'react';
import { ThemeContext } from '../Contexts';

export default function Panel({ children, title }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
