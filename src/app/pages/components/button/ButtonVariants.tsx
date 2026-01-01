import React from 'react';
import { Button } from '@/components/button/Button';

export const ButtonVariants = () => {
    return (
        <section className='space-y-4'>
            <h2 className='text-xl font-semibold'>Variants</h2>
            <div className='flex gap-8 flex-wrap'>
                <Button label="Default Button" />
                <Button label="Primary Button" primary />
                <Button label="Info Variant" variant="info" />
                <Button label="Success Variant" variant="success" />
                <Button label="Warning Variant" variant="warning" />
                <Button label="Delete Variant" variant="delete" />
            </div>
        </section>
    );
};
