import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
            <div>
                    <InputLabel htmlFor="email" value="" />
                        <div className='flex items-center'>
                            <img src="assets/img/user.png" alt="user" />
                            <span className='mr-2'>Correo</span>
                        </div>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="ingrese su correo"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    /> 

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-8">
                    <InputLabel htmlFor="password" value="" />
                        <div className='flex items-center'>
                            <img src="assets/img/lock.png" alt="" />
                            <span className='mr-2'>Contraseña</span>
                        </div>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        placeholder="ingrese su contraseña"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Recordar</span>
                    </label>
                </div>

                <div className="flex flex-col items-start mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Olvidaste la contraseña?
                        </Link>
                    )}

                    <PrimaryButton className="mt-4 self-center" disabled={processing}>
                        ingresar
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
