import React from 'react'
import Header from './index'

export default {
  component: Header,
  title: 'Header',
}

const Template = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (    
    <>
      <a href='#'>Link 1</a>
      <a href='#'>Link 2</a>
      <a href='#'>Link 3</a>
    </>
  )
}