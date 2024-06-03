import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import { QUERY_GETUSER } from '../utils/queries';
import  background  from "../../src/assets/images/background.jpg";

function Home() {

const [signUpData, setSignUpData] = useState({ name: "", email: "", password: "" });
const [signInData, setSignInData] = useState({ email: "", password: ""});
const [userId, setUserId] = useState(null);
const [isLoggedIn, setIsLoggedIn] = useState(false);

const [createUser] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
        if(data && data.addUser){
            setIsLoggedIn(true);
            setUserId(data.addUser.id);
        }
    }
});

const { loading, data } = useQuery(QUERY_GETUSER, {
    variables: { email: signInData.email },
    skip: !signInData.email,
    onCompleted: (data) => {
        if(data && data.userByEmail && data.userByEmail.password === signInData.password){
            setIsLoggedIn(true);
            setUserId(data.userByEmail.id)
            alert("you are logged in");
        }else{
            alert("Wrong username or password");
        }
    }

});

const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
};

const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try{
        await createUser({variables: { ...signUpData }});
        alert("Account created");
    }catch(error){
        console.log("we have and error creating an account", error);
    }
};

const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
};

const handleSignInSubmit = (e) => {
    e.preventDefault();
}

    return(
        <>
        <div className="inline-flex flex-row bg-white m-5 w-11/12 rounded-xl mb-3">
        <div className="flex justify-center flex-1 rounded-lg bg-white m-6 md:w-1/3 min-h-80vh">
            <div className="w-full p-4">
                <div>
                    <h1 className='text-2xl font-medium'>Sign In</h1>
                </div>
                <form className='space-y-4 flex flex-col items-start' onSubmit={handleSignInSubmit}>
                    <div className='flex flex-col w-full'>
                    <label className='inline-flex' htmlFor="email">Email</label>
                    <input
                    type='email'
                    id='email'
                    name='email'
                    value={signInData.email}
                    onChange={handleSignInChange}
                    required
                    className='border-gray-600 bg-gray-200 rounded-md w-full'
                    />
                    </div>

                    <div className='flex flex-col w-full'>
                    <label className='inline-flex' htmlFor="password">Password</label>
                    <input
                    type='password'
                    id='password'
                    name='password'
                    value={signInData.password}
                    onChange={handleSignInChange}
                    required
                    className='border-gray-600 bg-gray-200 rounded-md w-full'
                    />
                    </div>
                    <button className='my-4 bg-indigo-500  hover:bg-indigo-400 rounded-md p-2' type='submit'> Sign In </button>

                    
                </form>

                {isLoggedIn && (<button className='my-4 bg-indigo-500  hover:bg-indigo-400 rounded-md p-2' onClick={() => setIsLoggedIn(false)}> Logout</button>)}

                <div className='flex justify-center my-8'> Or sign up</div>

                <div>
                    <h1 className='text-2xl font-medium'>Sign Up</h1>
                </div>
                <form className='space-y-4 flex flex-col items-start' onSubmit={handleSignUpSubmit}>
                    <div className='flex flex-col w-full'>
                    <label className='inline-flex' htmlFor="email">Email</label>
                    <input
                    type='email'
                    id='email'
                    name='email'
                    value={signUpData.email}
                    onChange={handleSignUpChange}
                    required
                    className='border-gray-600 bg-gray-200 rounded-md w-full'
                    />
                    </div>

                    <div className='flex flex-col w-full'>
                    <label className='inline-flex' htmlFor="name">Username</label>
                    <input
                    type='text'
                    id='name'
                    name='name'
                    value={signUpData.name}
                    onChange={handleSignUpChange}
                    required
                    className='border-gray-600 bg-gray-200 rounded-md'
                    />
                    </div>
                    <div className='flex flex-col w-full'>
                    <label className='inline-flex' htmlFor="password">Password</label>
                    <input
                    type='password'
                    id='passwordsignup'
                    name='password'
                    value={signUpData.password}
                    onChange={handleSignUpChange}
                    required
                    className='border-gray-600 bg-gray-200 rounded-md w-full'
                    />
                    </div>
                    <button className='my-4 bg-indigo-500  hover:bg-indigo-400 rounded-md p-2' type='submit'>Sign Up</button>

                    
                </form>

            </div>
            

        </div>
        <div className='w-2/3 text-white inline-flex bg-white m-6 bg-cover bg-center' style={{ backgroundImage: `url(${background})`, borderTopRightRadius: "16px", borderBottomRightRadius: "16px"}}> 
           
        </div> 
        </div>
        </>
    );
}

export default Home; 