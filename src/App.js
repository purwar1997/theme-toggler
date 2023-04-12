import { useState } from 'react';
import { ThemeContext } from './Context';
import Panel from './components/Panel';
import Button from './components/Button';
import './App.css';
import './Themes.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Panel title="Welcome" />
      </ThemeContext.Provider>
      <Button
        onClick={() => {
          theme === 'light'
            ? setTheme('dark')
            : theme === 'dark'
            ? setTheme('dim')
            : setTheme('light');
        }}
      >
        Toggle Theme
      </Button>
    </>
  );
}
