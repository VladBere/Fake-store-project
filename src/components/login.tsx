import { Eye, EyeClosed } from 'lucide-react'
import React, { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { userAuthSchema } from './table/config/shemas'
import { useAuthUserMutation } from '@/api/users/users'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { routes } from '@/config/routes'

interface FormValues {
    username: string
    password: string
}

export const Login: React.FC = () => {
    const [passwordVisible, setPasswordVisilbe] = useState(false)

    const navigate = useNavigate()

    const [useAuth] = useAuthUserMutation()

    const form = useForm<FormValues>({
        resolver: zodResolver(userAuthSchema),
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        useAuth(data).then(
            response => {localStorage.setItem("AccessToken", response.data?.token)}
        )
        toast.success(`User authorized!`)
        navigate(routes.home)
    }

    return (
        <div className='flex h-screen w-screen flex-col items-center justify-center bg-yellow-800/20'>
            <div className='scale-125'>
                <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center'>
                    Login
                </h1>
                <div className='w-[400px]'>
                    <Form {...form}>
                        <form
                            className='space-y-5'
                            onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name='username'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='text'
                                                placeholder='John Doe'
                                                className='border border-yellow-700/30 bg-white/60'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='password'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your Password</FormLabel>
                                        <FormControl>
                                            <div className='flex'>
                                                <Input
                                                    type={cn(
                                                        !passwordVisible
                                                            ? 'password'
                                                            : 'text'
                                                    )}
                                                    placeholder='••••••••'
                                                    className='border border-yellow-800/30 bg-white/60'
                                                    {...field}
                                                />
                                                <Button
                                                className='hover:brightness-110 transition-all duration-300'
                                                    type='button'
                                                    onClick={() => {
                                                        setPasswordVisilbe(
                                                            !passwordVisible
                                                        )
                                                    }}>
                                                    {passwordVisible ? (
                                                        <Eye />
                                                    ) : (
                                                        <EyeClosed />
                                                    )}
                                                </Button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className='w-full hover:brightness-110 transition-all duration-300' type='submit'>Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}
