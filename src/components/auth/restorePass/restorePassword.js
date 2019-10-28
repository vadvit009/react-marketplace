import React, { useRef, useEffect } from 'react';

function RestorePassword() {
    const focusEmail = useRef();

    useEffect(() => {
        focusEmail.current.focus();
    }, []);

    return (
        <main className="container my-5">
            <div className="container col-md-5 border border-muted rounded">
                <div className="container text-center pb-3">
                    <h3>Restore Password</h3>
                </div>
                <div className="container">
                    <p>EMAIL</p>
                    <input ref={focusEmail} type="email" className="form-control" placeholder="Example@gmail.com" /><br />
                    <button className="btn btn-info w-100 py-3">Continue</button>
                </div>
            </div>

        </main>
    )
}

export default RestorePassword;