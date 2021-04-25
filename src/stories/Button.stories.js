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

export const General = Template.bind({})
General.args = {
    text: 'Register'
}

export const Ghost = Template.bind({})
Ghost.args = {
    text: 'Register',
    ghost: true
}

export const Link = Template.bind({})
Link.args = {
    text: 'Register',
    link: true
}