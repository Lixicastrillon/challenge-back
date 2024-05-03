import { Users } from "../../interfaces/users.interfaces";
import CardUser from "../CardUser/CardUser";

const ListUsers = ({ users }: { users: Users[] }) => {
  console.log(users);
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-center text-4xl font-extrabold dark:text-black">
          Usuarios
        </h1>
        {users.map((user) => (
          <CardUser
            _id={user._id}
            name={user.name}
            age={user.age}
            sex={user.sex}
            employee={user.employee}
          />
        ))}
      </div>
    </div>
  );
};

export default ListUsers;
