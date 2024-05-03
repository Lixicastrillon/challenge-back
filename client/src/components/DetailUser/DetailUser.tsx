import { Users } from "../../interfaces/users.interfaces";

export const DetailUser = ({ name, age, sex, employee }: Users) => {
  return (
    <div>
      <div>
        <p>Nombre:{name}</p>
        <p>Edad:{age}</p>
        <p>Sexo:{sex}</p>
        <p>Empleado:{employee}</p>
      </div>
    </div>
  );
};
