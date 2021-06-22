import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./inputForm.module.css";

const InputForm = (props) => {
  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const ageRef = useRef();
  const userRef = useRef();

  useEffect(() => {
    console.log(enteredUserName);
    console.log(enteredAge);
    if (enteredUserName.length > 0 && enteredAge > 0) {
      props.addUser({
        key: Math.random().toString(),
        name: enteredUserName,
        age: enteredAge,
      });
    }
  }, [enteredUserName, enteredAge]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const refUserName = userRef.current.value;
    const refAgeName = ageRef.current.value;

    console.log(refUserName, refAgeName);

    setenteredUserName(refUserName);
    setenteredAge(refAgeName);

    //   if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
    //     props.addError("Wrong Name and Age!", "Enter valid Name and Age");
    //     return;
    //   }

    //   if (+enteredAge < 1) {
    //     props.addError("Wrong Age!", "Enter valid Age");
    //     return;
    //   }

    // props.addUser({
    //   key: Math.random().toString(),
    //   name: enteredUserName,
    //   age: enteredAge,
    // });
    //   setenteredUserName("");
    //   setenteredAge("");
  };

  const usernameHandler = (event) => {
    setenteredUserName(event.target.value);
    console.log(enteredUserName);
  };
  const ageHandler = (event) => {
    setenteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">User Name</label>
        <input
          ref={userRef}
          type="text"
          id="username"
          // onChange={usernameHandler}
          // value={enteredUserName}
        ></input>
        <label htmlFor="age">Age (Years) </label>
        <input
          ref={ageRef}
          type="number"
          id="age"
          // onChange={ageHandler}
          // value={enteredAge}
        ></input>
        <Button type="submit">Add user</Button>
      </form>
      {/* {`Latest State is ${enteredAge} and ${enteredUserName}`}   */}
    </Card>
  );
};

export default InputForm;
