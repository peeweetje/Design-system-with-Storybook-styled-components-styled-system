import React from 'react';
import { ButtonPropsTable } from './components/button/ButtonPropsTable';
import { ButtonColorUsage } from './components/button/ButtonColorUsage';
import { ButtonVariants } from './components/button/ButtonVariants';
import { ButtonSizes } from './components/button/ButtonSizes';

const ButtonPage = () => {
    return (
        <div className='p-4 space-y-8'>
            <h1 className='text-3xl font-bold mb-6'>Button Component</h1>
            <ButtonVariants />
            <ButtonSizes />
            <ButtonPropsTable />
            <ButtonColorUsage />
        </div>
    );
};

export default ButtonPage;
