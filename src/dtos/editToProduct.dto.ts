import z from 'zod'
export interface EditProductInputDTO{
    
    idToEdit: string,
    id?: string,
    name?: string,
    price?: number
    
}

export interface EditProductOutputDTO{
    message: string,
      product: {
        id: string,
        name: string,
        price: number,
        createdAt: string
      }
}

export const editProductSchema = z.object({
    idToEdit: z.string(),
    id: z.string().optional(),
    name: z.string({invalid_type_error: "name precisa ser string"}).min(2).optional(),
    price: z.number({invalid_type_error: "price precisa ser um número"}).positive().min(1).optional()
}).transform(data => data as EditProductInputDTO)