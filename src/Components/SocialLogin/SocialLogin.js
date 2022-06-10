import React from "react";
import { useNavigate } from "react-router-dom";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import auth from "../../firebase.init";
import {
    useSignInWithGithub,
    useSignInWithGoogle,
    useSignInWithFacebook,
    useAuthState,
} from "react-firebase-hooks/auth";
import './SocialLogin.css';



const SocialLogin = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const [signInWithFacebook, user3, loading3, error3] = useSignInWithFacebook(auth);
    let errorElement;
    const handleGoogle = () => {
        signInWithGoogle();
    };

    const handleFacebook = () => {
        signInWithFacebook();
    };

    const handleGithub = () => {
        signInWithGithub();
    };
    // Errors
    if (error1 || error2 || error3) {
        errorElement = (
        <div>
            <p>
            Error: {error3?.message} {error2?.message} {error1?.message}
            </p>
        </div>
        );
    }
    if (loading1 || loading2 || loading3) {
    }
    
    if(user1 || user2 || user3){
        navigate("/");
    }
    return (
        <>
        <div className="social-container">
            <RiFacebookCircleLine className="social" onClick={handleFacebook}></RiFacebookCircleLine>
            <BsGithub className="social" onClick={handleGithub}></BsGithub>
            <FcGoogle className="social" onClick={handleGoogle}></FcGoogle>
        </div>
        {errorElement}
        </>
    );
};

export default SocialLogin;
