import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Button } from '@mui/material';

// Configure Firebase.
const config = {
    apiKey: 'AIzaSyDukaZiy3kKh5WhyEcv6W3HZw0avukY49Q',
    authDomain: 'practice-reactjs-a98b0.firebaseapp.com',
    // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
    },
};

function FirebaseSingIn() {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

    const [isSingOut, setIsSingOut] = useState(false);
    console.log(isSignedIn);

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    useEffect(() => {
        if (isSingOut) {
            const log = async () => {
                await firebase
                    .auth()
                    .signOut()
                    .then(function () {
                        sessionStorage.clear();
                        localStorage.clear();
                        console.log('clear');
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            };
            log();
        }
    }, [isSingOut]);

    const handleLogout = () => {
        setIsSingOut(true);
    };

    if (!isSignedIn) {
        return (
            <div>
                <h1>Login to join AITechchannel</h1>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    }
    return (
        <div>
            <h1>Welcome to AITechchannel, Tuananh Doan will contact with you soon!</h1>
            <p>Login complete! </p>
            <p>Welcome {firebase.auth().currentUser.displayName}!</p>
            <p>Please fill out the form below to apply team AITechchannel</p>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <Button variant="outlined" onClick={() => firebase.auth().signOut()}>
                Sign-out
            </Button>
        </div>
    );
}

export default FirebaseSingIn;
