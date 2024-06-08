import { z } from 'zod'


export const userSchema = z.object({
    id:z.number(),
    name:z.string(),
    contact_phone:z.number(),
    phone_verified:z.boolean(),
    email:z.string().email(),
    email_verified:z.boolean(),
    confirmation_code:z.number(),
    password:z.string(),
    // created_at: z.number(),
    // updated_at: z.number()
    
})
export const stateSchema = z.object({
    id:z.number(),
    name:z.string(),
    code:z.string(),
        
})

export const citySchema = z.object({
    id:z.number(),
    name:z.string(),
    state_id:z.number()
    
    
})
export const driverSchema = z.object({
    
})