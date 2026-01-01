import React from 'react';
import { Button } from '@/components/button/Button';

export const ButtonSizes = () => {
    return (
        <section className='space-y-4'>
            <h2 className='text-xl font-semibold'>Sizes</h2>
            <div className='flex items-center gap-8 flex-wrap'>
                <Button label="Small Button" size="small" />
                <Button label="Medium Button" size="medium" />
                <Button label="Large Button" size="large" />
            </div>
        </section>
    );
};
