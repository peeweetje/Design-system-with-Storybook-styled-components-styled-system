import React from 'react';

export const ButtonColorUsage = () => {
    return (
        <section className='space-y-4'>
            <h2 className='text-xl font-semibold'>Colors & Usage</h2>
            <div className='grid gap-4 md:grid-cols-2'>
                <div className='p-4 border border-grey-20 rounded bg-white'>
                    <h3 className='font-bold mb-2 flex items-center gap-2'>
                        <span className='w-4 h-4 rounded-full bg-blue-60'></span>
                        Info
                    </h3>
                    <p className='text-grey-80'>
                        Used for informational states. Blue conveys trust and reliability.
                        <br />
                        <code className='text-sm bg-grey-10 px-1 rounded'>bg-blue-60</code>
                    </p>
                </div>
                <div className='p-4 border border-grey-20 rounded bg-white'>
                    <h3 className='font-bold mb-2 flex items-center gap-2'>
                        <span className='w-4 h-4 rounded-full bg-green-60'></span>
                        Success
                    </h3>
                    <p className='text-grey-80'>
                        Used for positive actions like completion, confirmation, or saving data.
                        <br />
                        <code className='text-sm bg-grey-10 px-1 rounded'>bg-green-60</code>
                    </p>
                </div>
                <div className='p-4 border border-grey-20 rounded bg-white'>
                    <h3 className='font-bold mb-2 flex items-center gap-2'>
                        <span className='w-4 h-4 rounded-full bg-yellow-80'></span>
                        Warning
                    </h3>
                    <p className='text-grey-80'>
                        Used for actions that require caution but aren't destructive.
                        <br />
                        <code className='text-sm bg-grey-10 px-1 rounded'>bg-yellow-80</code>
                    </p>
                </div>
                <div className='p-4 border border-grey-20 rounded bg-white'>
                    <h3 className='font-bold mb-2 flex items-center gap-2'>
                        <span className='w-4 h-4 rounded-full bg-red-80'></span>
                        Delete / Critical
                    </h3>
                    <p className='text-grey-80'>
                        Used for destructive actions like deleting or removing items.
                        <br />
                        <code className='text-sm bg-grey-10 px-1 rounded'>bg-red-80</code>
                    </p>
                </div>
            </div>
        </section>
    );
};
