import { useContext } from 'react';
import { ThemeContext } from '../Contexts';

export default function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
