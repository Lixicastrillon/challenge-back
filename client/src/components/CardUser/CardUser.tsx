import { Users } from "../../interfaces/users.interfaces";

const CardUser = ({ name, age, sex, employee }: Users) => {
  return (
    <div className="card-user">
      <p>Nombre:{name}</p>
      <p>Edad:{age}</p>
      <p>Sexo:{sex}</p>
      <p>Empleado:{employee}</p>
    </div>
  );
};

export default CardUser;
