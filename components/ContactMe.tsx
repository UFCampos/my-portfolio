'use client'
import {Button, Input, Textarea} from "@nextui-org/react";
import React, { useState } from "react"

const ContactMe = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [errors, setErrors] = useState('');


    const validateEmail = (email : string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    const isInvalid = React.useMemo(() => {
		if (form.email === '') return false

		return !validateEmail(form.email)
	}, [form.email])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailValid = validateEmail(form.email);

        if (!emailValid) {
          setErrors("Please enter a valid email address.");
          return;
        }

        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .catch(error => console.log(error))
    
        setErrors('');
        setForm({
            name: "",
            email: "",
            message: ""
        })

        console.log(form)
    }
    
    return(
        <form className="w-full p-5 flex justify-center
        items-center text-center" 
        onSubmit={handleSubmit}
        >
            <div className="sm:w-1/3 h-2/3 flex justify-center flex-col border bg-card rounded-3xl p-5 gap-4">
                <h1 className="text-3xl font-mono">Contact me</h1>
                    <div className="flex flex-col justify-center items-center gap-4 p-5 m-5 h-full">

                        <Input label="Your name" value={form.name} size={'md'} className="rounded-lg" onChange={(e) => setForm({...form, name: e.target.value})}></Input>
                        <Input label="Email" size={'md'} value={form.email} isInvalid={isInvalid} color={isInvalid ? 'danger' : form.email === '' ? 'default' : 'success'} errorMessage={isInvalid && 'Please enter a valid email'}  className=" rounded-lg" onChange={(e) => setForm({...form, email: e.target.value})}></Input>

                        <Textarea
                            isRequired
                            label="Message"
                            labelPlacement="inside"
                            placeholder="Enter your message"
                            className="max-w-xs"
                            onChange={(e) => setForm({...form, message: e.target.value})}
                            value={form.message}
                        />

                        <Button  isDisabled={isInvalid || form.email === '' || form.message === '' || form.name === ''} type="submit" color="success" variant="shadow" className="w-1/3" >Send</Button>
                    </div>
                    

            </div>
        </form>
    )
}

export default ContactMe