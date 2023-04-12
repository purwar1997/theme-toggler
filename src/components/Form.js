import Panel from './Panel';
import Button from './Button';

export default function Form() {
  return (
    <Panel title="Welcome">
      <div>
        <Button>Signup</Button>
        <Button>Login</Button>
      </div>
    </Panel>
  );
}
