import React from 'react';
import AvatarGroup from '../components/AvatarGroup/AvatarGroup';

export default {
    title: 'Components/AvatarGroup',
    parameters: {
        backgrounds: {
            values: [
                { name: 'Dark theme', value: '#242c37' },
                { name: 'Light theme', value: '#ffffff' }
            ],
        },
    },
}

const Template = (args) => <AvatarGroup {...args} />

export const Normal = Template.bind({})
Normal.args = {
    users: [
        {
            label: 'John Doe',
            src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
            label: 'John Doe',
            src: 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70',
        },
        {
            label: 'John Doe',
            src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
            label: 'John Doe',
            src: 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70',
        }
    ],
    size: 'small',
}

export const WithoutSourceImage = Template.bind({})
WithoutSourceImage.args = {
    users: [
        {
            label: 'John Doe',
            src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
            label: 'John Doe'
        },
        {
            label: 'John Doe',
            src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
            label: 'John Doe'
        },
        {
            label: 'John Doe',
            src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
            label: 'John Doe',
            src: 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70',
        }
    ],
    size: 'small',
}