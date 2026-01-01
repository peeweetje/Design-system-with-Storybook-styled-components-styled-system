import React from 'react';

export const ButtonPropsTable = () => {
    return (
        <section className='space-y-4'>
            <h2 className='text-xl font-semibold'>Props & API</h2>
            <div className='overflow-x-auto'>
                <table className='w-full text-left border-collapse'>
                    <thead>
                        <tr className='bg-grey-10 border-b border-grey-30'>
                            <th className='p-3'>Prop</th>
                            <th className='p-3'>Type</th>
                            <th className='p-3'>Default</th>
                            <th className='p-3'>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b border-grey-20'>
                            <td className='p-3 font-mono text-sm text-blue-80'>primary</td>
                            <td className='p-3 font-mono text-sm'>boolean</td>
                            <td className='p-3 font-mono text-sm'>false</td>
                            <td className='p-3'>Is this the principal call to action on the page?</td>
                        </tr>
                        <tr className='border-b border-grey-20'>
                            <td className='p-3 font-mono text-sm text-blue-80'>backgroundColor</td>
                            <td className='p-3 font-mono text-sm'>string</td>
                            <td className='p-3 font-mono text-sm'>-</td>
                            <td className='p-3'>What background color to use</td>
                        </tr>
                        <tr className='border-b border-grey-20'>
                            <td className='p-3 font-mono text-sm text-blue-80'>size</td>
                            <td className='p-3 font-mono text-sm'>'small' | 'medium' | 'large'</td>
                            <td className='p-3 font-mono text-sm'>'medium'</td>
                            <td className='p-3'>How large should the button be?</td>
                        </tr>
                        <tr className='border-b border-grey-20'>
                            <td className='p-3 font-mono text-sm text-blue-80'>variant</td>
                            <td className='p-3 font-mono text-sm'>'info' | 'success' | 'warning' | 'delete'</td>
                            <td className='p-3 font-mono text-sm'>-</td>
                            <td className='p-3'>Which semantic variant logic to use</td>
                        </tr>
                        <tr className='border-b border-grey-20'>
                            <td className='p-3 font-mono text-sm text-blue-80'>label</td>
                            <td className='p-3 font-mono text-sm'>string</td>
                            <td className='p-3 font-mono text-sm'>-</td>
                            <td className='p-3'>Button contents</td>
                        </tr>
                        <tr className='border-b border-grey-20'>
                            <td className='p-3 font-mono text-sm text-blue-80'>onClick</td>
                            <td className='p-3 font-mono text-sm'>() =&gt; void</td>
                            <td className='p-3 font-mono text-sm'>-</td>
                            <td className='p-3'>Optional click handler</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};
