import { Link } from "react-router";



function SignUp(){


    return(
        <>
    <body class="bg-blue-50 flex items-center justify-center min-h-screen">
    <div class="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h2 class="text-3xl font-semibold mb-6 text-center text-gray-800">Create an Account</h2>
        <form action="#" method="POST">
            <div class="mb-5">
                <label for="name" class="block text-gray-700 font-medium mb-2">Full Name</label>
                <input type="text" id="name" name="name" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div class="mb-5">
                <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" id="email" name="email" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div class="mb-5">
                <label for="password" class="block text-gray-700 font-medium mb-2">Password</label>
                <input type="password" id="password" name="password" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div class="mb-5">
                <label for="confirm_password" class="block text-gray-700 font-medium mb-2">Confirm Password</label>
                <input type="password" id="confirm_password" name="confirm_password" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div class="flex items-center mb-5">
                <input type="checkbox" id="terms" name="terms" class="mr-2"/>
                <label for="terms" class="text-gray-700">I agree to the <a href="#" class="text-blue-500 hover:underline">terms and conditions</a></label>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300">Register</button>
        </form>
        <p class="mt-6 text-center text-gray-600">Already have an account? 
        <Link to={'/'}><a href="#" class="text-blue-500 hover:underline">Sign in</a></Link>
        </p>
    </div>
</body>
        </>
    )
}

export default SignUp;