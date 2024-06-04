import React, { useRef } from 'react'
const Ref = () => {
    const nameRef = useRef()
    const usernameRef = useRef()
    const emailRef = useRef()

    const handleCreate = () => {
        const object = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            username: usernameRef.current.value,
        }
        console.log(object)
    }

    return (
        <div>
            <h1>FORM</h1>
            <div>
                <label>
                    Name:
                    <input type="text" ref={nameRef}/>
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" ref={emailRef}/>
                </label>
            </div>
            <div>
                <label>
                    Username:
                    <input type="text" ref={usernameRef}/>
                </label>
            </div>

            <button onClick={handleCreate}>Create</button>
        </div>
    );
};

export default Ref;
