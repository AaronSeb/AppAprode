import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen min-w-screen flex flex-col sm:flex-row items-stretch">
            {/* Bloque con color de fondo rojo */}
            <div className="flex-1 flex justify-center items-center bg-aprode1">
                <div>
                    <h1 className="text-6xl  text-center text-white font-bold pb-10">Bienvenido</h1>
                    <img src="assets/img/logo-Aprode.png" alt="logo" />
                </div>

            </div>

            {/* Bloque con color de fondo azul y el formulario de login */}
            <div className="flex-1 bg-gray-200 flex justify-center items-center">
                <div className="w-full sm:max-w-md mx-auto px-6 py-4 bg-white shadow-md sm:rounded-lg">
                    {/* Aquí colocarías el contenido del formulario de login */}
                    {children}
                </div>
            </div>
        </div>
    );
}
