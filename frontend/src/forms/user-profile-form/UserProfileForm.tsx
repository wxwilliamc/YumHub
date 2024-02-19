import LoadingBtn from '@/components/LoadingBtn';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { User } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod'

const formSchema = z.object({
    name: z.string().min(1, "name is required"),
    email: z.string().optional(),
    addressLine1: z.string().min(10, "address is required"),
    city: z.string().min(1, "city is required"),
    country: z.string().min(1, "country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
    onSave: (userProfileDate: UserFormData) => void;
    isLoading: boolean;
    currentUser: User;
}

const UserProfileForm = ({ onSave, isLoading, currentUser }:Props) => {

    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentUser,
    });

    useEffect(() => {
        // call the function again once we made any changes to the form
        form.reset(currentUser); 
    }, [currentUser, form])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSave)} className='space-y-4 bg-gray-50 rounded-lg md:p-10'>
                <div>
                    <h2 className='text-2xl font-bold'>
                        User Profile Details
                    </h2>
                    <FormDescription>
                        Check and update your profile information here
                    </FormDescription>
                </div>

                <FormField 
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} disabled className='bg-white'/>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField 
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} disabled={isLoading} className='bg-white'/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className='flex flex-col md:flex-row gap-4'>
                    <FormField 
                        control={form.control}
                        name="city"
                        render={({field}) => (
                            <FormItem className='flex-1'>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input {...field} disabled={isLoading} className='bg-white'/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField 
                        control={form.control}
                        name="addressLine1"
                        render={({field}) => (
                            <FormItem className='flex-1'>
                                <FormLabel>Address Line 1</FormLabel>
                                <FormControl>
                                    <Input {...field} disabled={isLoading} className='bg-white'/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField 
                        control={form.control}
                        name="country"
                        render={({field}) => (
                            <FormItem className='flex-1'>
                                <FormLabel>Country</FormLabel>
                                <FormControl>
                                    <Input {...field} disabled={isLoading} className='bg-white'/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {isLoading ? <LoadingBtn /> : <Button type='submit' className='bg-orange-500'>{currentUser ? "Update" : "Submit"}</Button>}
            </form>
        </Form>
    )
}

export default UserProfileForm;
