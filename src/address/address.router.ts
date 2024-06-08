import { Hono } from "hono";
import { createAddress, getSingleAddress, listAddress, updateAddress, deleteAddress } from "./address.controller";
import {zValidator} from "@hono/zod-validator"
import { type Context } from "hono";
import { addressSchema } from "../validators";



//creating hono instance

export const addressRouter = new Hono();

//get states
addressRouter.get("/addresses", listAddress)

//get a single city    

addressRouter.get("/addresses/:id", getSingleAddress)



//create State

addressRouter.post("/addresses", zValidator('json', addressSchema, (results, c) => {
  if (!results.success){
      return c.json(results.error, 400)
  }
}) ,createAddress)

//update City

addressRouter.put("/addresses/:id", updateAddress)

// delete city
addressRouter.delete("/addresses/:id", deleteAddress)