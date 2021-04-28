import React from 'react';
import Button from '../components/Button/Button';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        backgrounds: {
          values: [
            { name: 'Dark theme', value: '#242c37' },
            { name: 'Light theme', value: '#ffffff' }
          ],
        },
    },
}

const Template = (args) => <Button {...args} />

export const Normal = Template.bind({})
Normal.args = {
    text: 'Register',
    loading: false
}

export const NormalError = Template.bind({})
NormalError.args = {
    text: 'Register',
    type: 'error',
    loading: false
}

export const Ghost = Template.bind({})
Ghost.args = {
    text: 'Register',
    variant: 'ghost',
    loading: false
}

export const GhostError = Template.bind({})
GhostError.args = {
    text: 'Register',
    variant: 'ghost',
    type: 'error',
    loading: false
}

export const Link = Template.bind({})
Link.args = {
    text: 'Register',
    variant: 'link',
    loading: false
}