import { useState } from 'react';
import { ThemeContext } from './Contexts';
import Form from './components/Form';
import Button from './components/Button';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  function changeTheme() {
    switch (theme) {
      case 'light':
        setTheme('dark');
        return;

      case 'dark':
        setTheme('dim');
        return;

      default:
        setTheme('light');
    }
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <Button onClick={changeTheme}>Toggle Theme</Button>
    </>
  );
}
