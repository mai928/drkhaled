'use client'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const EmailForm = () => {
    const { t } = useTranslation()


    const [email, setEmail] = useState('')
    const [responseMessage, setResponseMessage] = useState('');

    const ResponseMessage = ({ message }) => {
        if (!message) return null;

        return (
            <div className="mt-6 text-center">
                <p className={`text-lg ${message === 'Message sent successfully!' ? 'text-green-900' : 'text-red-500'}`}>
                    {message}
                </p>
            </div>
        );
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://khcan.elnomrosyivf.com/api/messages/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            });

            const result = await response.json();
            // console.log(result.data)

            if (response.status && result.data) {
                setResponseMessage('Message sent successfully!');
                setEmail('');
            } else {
                setResponseMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            // console.error('Error submitting form:', error);
            setResponseMessage('An error occurred. Please try again.');
        }

        setTimeout(() => {
            setResponseMessage('')
        }, 3000)
    };
    return (
        <div className=" mt-10">
            <form className="flex items-center" onSubmit={handleSubmit}>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" block  w-[80%]  lg:w-[50%] py-3 px-0 md:px-10  lg:px-14 placeholder:ps-4 rounded-es-md rounded-ss-md   "
                    placeholder={t("Email")}
                />
                <button type='submit' className="p-4 rounded-ee-md rounded-se-md  bg-secondary-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-primary-500"
                        width={20}
                        height={20}
                        viewBox="0 0 512 512"
                    >
                        <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                    </svg>
                </button>
            </form>
            <ResponseMessage message={responseMessage} />


        </div>
    )
}

export default EmailForm