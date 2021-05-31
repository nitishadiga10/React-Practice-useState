import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
      <div className = {classes.backdrop} onClick = {props.cancel}>
    <Card className = {classes.modal}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button onClick = {props.cancel}>Close</Button>
      </footer>
    </Card>
    </div>
  );
};

export default ErrorModal;
