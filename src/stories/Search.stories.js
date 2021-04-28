import React from 'react';
import Search from '../components/Search/Search';

export default {
    title: 'Components/Search',
    component: Search,
    parameters: {
        backgrounds: {
          values: [
            { name: 'Dark theme', value: '#242c37' },
            { name: 'Light theme', value: '#ffffff' }
          ],
        },
    },
}

const Template = (args) => <Search {...args} />

export const SearchField = Template.bind({})
SearchField.args = {
    iconRight: false
}