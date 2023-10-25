"use client"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { onContactRequest } from "./actions";

const contactRequestSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().min(2),
    message: z.string().min(2),
})

type FormData = z.infer<typeof contactRequestSchema>

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(contactRequestSchema)
    })

    const onSubmit = ( data: FormData ) => {
        onContactRequest(data)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Contactez-nous</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <div>
                    <input type="text" placeholder="Nom" {...register("lastName")} />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <div>
                    <input type="text" placeholder="Prénom" {...register("firstName")} />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div>
                    <input type="email" placeholder="Email" {...register("email")} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <textarea placeholder="Message" {...register("message")} />
                    {errors.message && <p>{errors.message.message}</p>}
                </div>
                <div>
                    <button type="submit">Envoyer</button>
                </div>
            </form>
            <p id="validation"></p>
        </main>
    );
}