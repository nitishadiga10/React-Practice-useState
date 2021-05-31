import classes from "./Users.module.css";

const Users = (props) => {
  return (
    <ul className={classes.users}>
      {/* <li>Nitish (31 Years Old)</li>
        <li>Nitish (31 Years Old)</li> */}
      {props.userList.map((user) => (
        <li key={user.key}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default Users;
