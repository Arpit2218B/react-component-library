import React from 'react';
import TestComponent from '../components/TestComponent/TestComponent';


export default {
    title: 'Components/TestComponent',
    component: TestComponent,
    parameters: {
        backgrounds: {
          values: [
            { name: 'red', value: '#f00' },
            { name: 'green', value: '#0f0' },
            { name: 'blue', value: '#00f' },
          ],
        },
    },
}

const Template = (args) => <TestComponent {...args} />

export const Primary = Template.bind({})
Primary.args = {
    name: 'Arpit'
}

export const Secondary = Template.bind({})
Secondary.args = {
    name: 'Rathi'
}

console.log('I am loading');