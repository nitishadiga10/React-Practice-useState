import "./App.css";
import Button from "./Button";
import InputForm from "./InputForm";
import Users from "./Users";
import { useState } from "react";
import ErrorModal from "./ErrorModal";

function App() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState();

  const addUserToListHandler = (user) => {
    setUserList((prevstate) => [...prevstate, user]);
  };

  const cancelModalHandler = () => {
    setError(null);
  };

  const errorHandler = (title1, message1) => {
    setError({ title: title1, message: message1 });
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          cancel={cancelModalHandler}
        ></ErrorModal>
      )}
      <InputForm
        addUser={addUserToListHandler}
        addError={errorHandler}
      ></InputForm>
      <Users userList={userList}></Users>
    </div>
  );
}

export default App;
