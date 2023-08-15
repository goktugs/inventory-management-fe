import { useForm, SubmitHandler } from "react-hook-form"

type LoginFormData = {
    username: string;
    password: string;
};

export default function LoginPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    const onSubmit: SubmitHandler<LoginFormData> = data => console.log(data)


    return (

        <main className='w-full h-screen flex items-center justify-center '>
            <form className="flex flex-col gap-8 border py-10 px-20" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-2" >
                    <label htmlFor="username-input">Kullanıcı Adı</label>
                    <input className="border border-slate-700 py-2 pl-4 w-80 " id="username-input" type="text" {...register("username", (
                        {
                            minLength: 3,
                            maxLength: 10
                        }
                    ))} />
                </div>
                <div className="flex flex-col space-y-2" >
                    <label htmlFor="password-input" >Şifre</label>
                    <input className="border border-slate-700 py-2 pl-4 w-80 " id="password-input" type="password"  {...register("password")} />
                </div>
                {
                    errors.username && <span>this filed is w</span>
                }
                <button type="submit" className="bg-slate-400 text-white py-4" >Gönder</button>
            </form>
        </main>
    )


}
