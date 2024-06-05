import { Hono } from "hono";
import { type Context } from "hono";


//creating hono instance

export const userRouter = new Hono();



const users =[
    {
        id:1,
      name: 'John Doe',
      contact_phone: '123-456-7890',
      phone_verified: true,
      email: 'john.doe@example.com',
      email_verified: true,
      confirmation_code: 'CONF123456',
      password: 'hashed_password_1',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
        id: 2,
      name: 'Jane Smith',
      contact_phone: '987-654-3210',
      phone_verified: false,
      email: 'jane.smith@example.com',
      email_verified: false,
      confirmation_code: 'CONF654321',
      password: 'hashed_password_2',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
        id: 3,
      name: 'Alice Johnson',
      contact_phone: '555-666-7777',
      phone_verified: true,
      email: 'alice.johnson@example.com',
      email_verified: true,
      confirmation_code: 'CONF112233',
      password: 'hashed_password_3',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
        id: 4,
      name: 'Bob Brown',
      contact_phone: '111-222-3333',
      phone_verified: true,
      email: 'bob.brown@example.com',
      email_verified: true,
      confirmation_code: 'CONF445566',
      password: 'hashed_password_4',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
        id: 5,
      name: 'Charlie Davis',
      contact_phone: '444-555-6666',
      phone_verified: false,
      email: 'charlie.davis@example.com',
      email_verified: false,
      confirmation_code: 'CONF778899',
      password: 'hashed_password_5',
      created_at: new Date(),
      updated_at: new Date()
}
  ];

  interface TUser{

  }
//get all users      /api/users
  // creating routes
userRouter.get("/users", (c: Context) =>{
    return c.json(users, 200);
})

//get a single user    /users/1

userRouter.get("/users/:id", (c: Context) => {
   const id = Number(c.req.param("id"));
//    console.log(id)
//    return c.text(`User id is ${id}`, 200);
   const user = users.find((user) => user.id ===id);
//    catching error

   if (!user){
    return c.text("User not Found", 404)
   }
   return c.json(user, 200);
})

//create a user


userRouter.post("/users", async (c: Context) => {
    const user = await c.req.json();
    console.log(user)
    users.push(user);
    return c.json(user, 201);
})

//update user

userRouter.put("/users/:id", async (c: Context) => {
    const id = Number(c.req.param("id"));
    const user = await c.req.json();
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
        return c.text("User not found", 404);
    }
    users[index] = user;
    // const foundUser = users.find((user) => user.id === id);
    // if (!foundUser) {
    //     return c.text("User not found", 404);
    // }
    // Object.assign(foundUser, user);  //update the user
    return c.json(user, 200);
})