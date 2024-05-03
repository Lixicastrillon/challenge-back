import { Users } from "../../interfaces/users.interfaces";
import { Link } from "react-router-dom";
import "./CardUser.css";

const CardUser = ({ _id, name, age, sex, employee }: Users) => {
  return (
    <div className=" m-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-400 dark:hover:bg-gray-700 flex justify-center ">
      <Link to={"/detail/" + _id}>
        <div className="card-user">
          <p>Nombre:{name}</p>
          <p>Edad:{age}</p>
          {sex === "female" ? <p>Sexo:👩🏻‍🦰</p> : <p>Sexo:👨🏽</p>}
          {employee === true ? <p>Empleado:✅</p> : <p>Empleado:❌</p>}
        </div>
      </Link>
    </div>
  );
};

export default CardUser;
