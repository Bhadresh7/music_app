import React from 'react';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../context/AuthContext'

function Home() {
    const { googleSignIn } = UserAuth();

    const { currentUser, logOut } = UserAuth();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {
                currentUser ? <p><button onClick={handleLogOut}>Logout</button></p> : <GoogleButton onClick={handleGoogleSignIn} />
            }
        </>
    )
}

export default Home;
