import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Loader, LoaderProps} from '../Loader';

export default {
    title: 'Components/Loader',
    component: Loader,
} as Meta;

const DefaultTemplate: Story<LoaderProps> = (args) => <Loader {...args} />;
export const Default = DefaultTemplate.bind({});

const SizeTemplate: Story<LoaderProps> = (args: any) => {
    return (
        <>
            <Loader {...args} size="s">
                xs
            </Loader>
            <span style={{margin: '16px'}} />
            <Loader {...args} size="m">
                s
            </Loader>
            <span style={{margin: '16px'}} />
            <Loader {...args} size="l">
                s
            </Loader>
        </>
    );
};

export const Size = SizeTemplate.bind({});