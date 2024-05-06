import { Request, Response } from "express";
import usersModel from "../models/users.model";
import { SearchQuery, queryUsers } from "../intefaces/users.interfaces";

export const getUsers = async (
  req: Request<{}, {}, {}, queryUsers>,
  res: Response
) => {
  try {
    const {
      searchName,
      filterBySex,
      pageSize = "10",
      page = "0",
      filterByEmployee,
    } = req.query; // page #pagina - pagesize #elementos

    const total = await usersModel.countDocuments(); //cuenta los usuarios
    const query: SearchQuery = {};
    if (searchName) {
      query.name = new RegExp(searchName, "i");
    }
    if (filterBySex) {
      query.sex = filterBySex;
    }
    if (filterByEmployee) {
      query.employee = filterByEmployee === "true";
    }
    //cuantos se va saltar
    const skip = parseInt(page) * parseInt(pageSize);

    const users = await usersModel.aggregate([
      // match : filtrar // lo que sea igual a ...
      { $match: query },
      // facet :organizar datos , como devolver los datos.
      {
        $facet: {
          result: [{ $skip: skip }, { $limit: parseInt(pageSize) }], // cuantos se va saltar, cuantos va enviar
          count: [
            {
              $count: "count",
            },
          ],
        },
      },
    ]);
    return res.json({
      totalUsers: total,
      totalFoundUsers: users[0].count[0].count,
      users: users[0].result,
      totalPages: Math.ceil(users[0].count[0].count / parseInt(pageSize)),
    });
  } catch (error) {
    console.log(`message : ${error}`);
    return res.status(500).send("Server Error!");
  }
};
export const getUserById = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    if (!_id) return res.status(400).send("invalid id");

    const userById = await usersModel.findById(_id);
    if (!userById) return res.status(404).send("User not found.");
    return res.json(userById);
  } catch (error) {
    console.log(`message : ${error}`);
    return res.status(500).send("invalid id");
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, sex, age, employee } = req.body;
    const newUser = new usersModel({ name, sex, age, employee });
    const createdUser = await newUser.save();
    res.json(createdUser);
  } catch (error) {
    console.log(`message : ${error}`);
    return res.status(500).send("Server Error!");
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, sex, age, employee } = req.body;
    const _id = req.params.id;
    if (!_id) return res.status(400).send("invalid id");
    await usersModel.updateOne({ _id }, { name, sex, age, employee }); // 1 - filtrar , 2- datos actualizar
    return res.json({ updated: true });
  } catch (error) {
    console.log(`Error in updating the user : ${error}`);
    return res.status(500).send("Server Error!");
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    if (!_id) return res.status(400).send("invalid id");
    await usersModel.findByIdAndDelete(_id);
    return res.json({ deleted: true });
  } catch (error) {
    console.log(`message : ${error}`);
    return res.status(500).send("Server Error!");
  }
};
