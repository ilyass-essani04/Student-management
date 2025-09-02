


function Profile(){

    return(
        <section class="py-10 my-auto dark:bg-gray-900">
    <div class="lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex gap-4">
        <div
            class="lg:w-[88%] sm:w-[88%] w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            
            <div class="py-4">
                <form>
                    {/* <!-- Cover Image --> */}
                    <div
                        class="w-full rounded-lg bg-[url('https://wallpapers.com/images/hd/teacher-background-2tdjqh0pgbvtelo1.jpg')] bg-cover bg-center bg-no-repeat items-center">
                        {/* <!-- Profile Image --> */}
                        <div
                            class="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg')] bg-cover bg-center bg-no-repeat">

                            <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">

                                <input type="file" name="profile" id="upload_profile" hidden required/>

                                <label for="upload_profile">
                                        <svg data-slot="icon" class="w-6 h-5 text-blue-700" fill="none"
                                            stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                            </path>
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                            </path>
                                        </svg>
                                    </label>
                            </div>
                        </div>
                        <div class="flex justify-end">
                            
                            <input type="file" name="profile" id="upload_cover" hidden required/>

                            <div
                                class="bg-white flex items-center gap-2 rounded-tl-md px-2 text-center font-semibold">
                                <label for="upload_cover" class="inline-flex items-center gap-1 cursor-pointer">Cover
                                    
                                <svg data-slot="icon" class="w-6 h-5 text-blue-700" fill="none" stroke-width="1.5"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                    </path>
                                </svg>
                                </label>
                            </div>

                        </div>
                    </div>
                    <h2 class="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile and Cover Image
                    </h2>
                    <div class="flex flex-col lg:flex-row gap-2 justify-center w-full">
                        <div class="w-full  mb-4 mt-6">
                            <label for="" class="mb-2 dark:text-gray-300">First Name</label>
                            <input type="text"
                                    class="mt-2 px-4 py-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="First Name"/>
                        </div>
                        <div class="w-full  mb-4 lg:mt-6">
                            <label for="" class=" dark:text-gray-300">Last Name</label>
                            <input type="text"
                                    class="mt-2 px-4 py-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Last Name"/>
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row  gap-2 justify-center w-full">
                        <div class="w-full">
                            <h3 class="dark:text-gray-300 mb-2">Sex</h3>
                            <select
                                    class="w-full text-grey border-2 rounded-lg px-4 py-3 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800">
                                    <option disabled value="">Select Sex</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                        </div>
                        <div class="w-full">
                            <h3 class="dark:text-gray-300 mb-2">Date Of Birth</h3>
                            <input type="date"
                                    class="text-grey px-4 py-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"/>
                        </div>
                    </div>
                    <div class="w-full flex justify-end  mt-4 text-white text-lg font-semibold">
                        <button type="submit" class="rounded-lg w-1/3 p-4 bg-blue-500">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
    )

}


export default Profile;