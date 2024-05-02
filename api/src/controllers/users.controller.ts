import { Request, Response } from "express";
import usersModel from "../models/users.model";
import { SearchQuery } from "../intefaces/users.interfaces";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const { searchName }: { searchName: String } = req.query;
    const total = await usersModel.countDocuments();
    const query: SearchQuery = {};
    if (searchName) {
      query.name = new RegExp(searchName, "i");
    }
    console.log(query);
    const users = await usersModel.find(query);
    return res.json({ users, total });
  } catch (error) {
    console.log(`Error in updating the user : ${error}`);
    return res.status(500).send("Server Error!");
  }
};
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, sex, age } = req.body;
    const newUser = new usersModel({ name, sex, age });
    const createdUser = await newUser.save();
    res.json(createdUser);
  } catch (error) {
    console.log(`Error in updating the user : ${error}`);
    return res.status(500).send("Server Error!");
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, sex, age } = req.body;
    const _id = req.params.id;
    if (!_id) return res.status(400).send("invalid id");
    await usersModel.updateOne({ _id }, { name, sex, age }); // 1 - filtrar , 2- datos actualizar
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
    console.log(`Error in updating the user : ${error}`);
    return res.status(500).send("Server Error!");
  }
};
