import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Agregar tus propios colores aquí
                ...defaultTheme.colors,
                aprode1: '#051A5A',
                customBlue: '#0000FF',
                customGreen: '#00FF00',
                // Puedes agregar tantos colores como necesites
            },
        },
    },

    plugins: [forms],
};
