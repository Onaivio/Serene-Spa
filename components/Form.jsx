import React from 'react'

const Form = () => {
  return (
    <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Full Name' className='input' />
        <input type="text" placeholder='Email address' className='input' />
        <input type="text" placeholder='Phone number' className='input' />
        <input type='text' className='input' placeholder='Your Message'/>
        <button type='submit' className='btn self-start'>Send Message</button>
    </form>
  )
}

export default Form