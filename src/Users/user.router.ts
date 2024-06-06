import { Hono } from "hono";
import { createUser, getUser, listUsers, updateUser } from "./user.controller";
import {zValidator} from "@hono/zod-validator"
import { type Context } from "hono";
import { userSchema } from "../validators";

//creating hono instance

export const userRouter = new Hono();

//get all users      /api/users
  // creating routes
userRouter.get("/users", listUsers)

//get a single user    /users/1

userRouter.get("/users/:id", getUser)

//create a user

userRouter.post("/users",zValidator('json', userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)}
        }), createUser)

//update user

userRouter.put("/users/:id", updateUser)