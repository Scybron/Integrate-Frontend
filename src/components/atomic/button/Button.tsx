'use client';

import { useRouter } from 'next/navigation';
import ButtonProps from './types';

const Button = ({
    children,
    type = 'primary',
    className,
    onClick,
    isLink = false,
    href,
}: ButtonProps) => {
    const router = useRouter();
    const buttonStyle = {
        outline: 'border border-white text-white hover:border-primary hover:bg-primary',
        primary:
            'border border-primary bg-primary text-white hover:border-white hover:bg-transparent hover:text-white',
    };

    const handleOnClick = () => {
        onClick && onClick();
        isLink && href && router.push(href);
    };

    return (
        <div
            onClick={handleOnClick}
            className={`${buttonStyle[type]} transition-colors duration-700  font-bold py-2  px-4 rounded-md text-center h-[100%] w-[100%] cursor-pointer ${className}`}
        >
            {children}
        </div>
    );
};

export default Button;
