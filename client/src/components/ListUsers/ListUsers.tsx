import { Users } from "../../interfaces/users.interfaces";
import CardUser from "../CardUser/CardUser";

const ListUsers = ({ users }: { users: Users[] }) => {
  console.log(users);
  return (
    <div>
      <h1 className="text-center">Usuarios</h1>
      {users.map((user) => (
        <CardUser
          name={user.name}
          age={user.age}
          sex={user.sex}
          employee={user.employee}
        />
      ))}
    </div>
  );
};

export default ListUsers;
