import { Hono } from "hono";
import { createCity, getSingleCity, listCity, updateCity } from "./city.controller";
import {zValidator} from "@hono/zod-validator"
import { type Context } from "hono";
import { citySchema } from "../validators";



//creating hono instance

export const cityRouter = new Hono();

//get states
cityRouter.get("/cities", listCity)

//get a single city    

cityRouter.get("/cities/:id", getSingleCity)



//create State

cityRouter.post("/cities", zValidator('json', citySchema, (results, c) => {
  if (!results.success){
      return c.json(results.error, 400)
  }
}) ,createCity)

//update State

cityRouter.put("/states/:id", updateCity)