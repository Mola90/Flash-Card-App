import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import  background  from "../../src/assets/images/background.jpg";

function Home() {
    return(
        <>
        <div className="inline-flex flex-row bg-white m-5 w-11/12 rounded-xl mb-3">
        <div className="flex justify-center flex-1 rounded-lg bg-white m-6 md:w-1/3 min-h-80vh">
            <div className="w-full p-4">
                <div>
                    <h1 className='text-2xl font-medium'>Sign In</h1>
                </div>
                <form className='space-y-4 flex flex-col items-start '>
                    <div className='flex flex-col w-full'>
                    <label className='inline-flex' htmlFor="email">Email</label>
                    <input
                    type='email'
                    id='email'
                    required
                    className='border-gray-600 bg-gray-200 rounded-md w-'
                    />
                    </div>

                    <div className='flex flex-col w-full'>
                    <label className='inline-flex' htmlFor="password">Password</label>
                    <input
                    type='password'
                    id='password'
                    required
                    className='border-gray-600 bg-gray-200 rounded-md w-full'
                    />
                    </div>
                    <button className='my-4 bg-indigo-500  hover:bg-indigo-400 rounded-md p-2' type='submit'>Sign In</button>

                    
                </form>

                <div className='flex justify-center my-8'> Or sign up</div>

                <div>
                    <h1 className='text-2xl font-medium'>Sign Up</h1>
                </div>
                <form className='space-y-4 flex flex-col items-start '>
                    <div className='flex flex-col w-full'>
                    <label className='inline-flex' htmlFor="email">Email</label>
                    <input
                    type='email'
                    id='email'
                    required
                    className='border-gray-600 bg-gray-200 rounded-md w-full'
                    />
                    </div>

                    <div className='flex flex-col w-full'>
                    <label className='inline-flex' htmlFor="password">Username</label>
                    <input
                    type='username'
                    id='username'
                    required
                    className='border-gray-600 bg-gray-200 rounded-md'
                    />
                    </div>
                    <div className='flex flex-col w-full'>
                    <label className='inline-flex' htmlFor="password">Password</label>
                    <input
                    type='password'
                    id='passwordsignup'
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