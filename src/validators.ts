import { z } from 'zod'


export const userSchema = z.object({
    id:z.number(),
    name:z.string(),
    contact_phone:z.number(),
    phone_verified:z.boolean(),
    email:z.string(),
    email_verified:z.boolean(),
    confirmation_code:z.string(),
    password:z.string(),
    created_at:z.date().optional(),
    updated_at:z.date().optional()
})