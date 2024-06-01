import {useState} from "react";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
//import SignUpForm from "./components/SignUpForm";

function SignUp () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        try {
            const auth = getAuth
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error)
    }

    return (
        <div><h2>Sign up</h2></div>
        <form>
            <input type="email" placeholder="write your email here" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            <input type="password" placeholder="write your password here" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
            <button type="submit" onClick={handleSignUp}>Sign up</button>
        </form>
    )
}

export default SignUp