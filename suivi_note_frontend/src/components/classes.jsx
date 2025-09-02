import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { RemoveClass } from "../features/classSlice";



function Classes(){

    const classes = useSelector((state)=>state.classes.list)
    const dispatch = useDispatch();

    return(
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-center mb-8"> Votre Classes</h1>

        {/* <!-- Search and Add User (Static) --> */}
        <div class="flex flex-col md:flex-row justify-between items-center mb-6">
            <div class="w-full md:w-1/3 mb-4 md:mb-0">
                <input type="text" placeholder="Search users..." class="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <Link to={'/dashboard/addclass'}>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Ajouter une classe</button>
           </Link>
        </div>

        {/* <!-- User Table --> */}
        <div class="overflow-x-auto bg-white rounded-lg shadow">
            <table class="w-full table-auto">
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left">Nom du classe</th>
                        <th class="py-3 px-6 text-left">Nº d'eleves</th>
                        <th class="py-3 px-6 text-left">Nº de cycle</th>
                        <th class="py-3 px-6 text-left">Nº de semaines par cycle</th>
                        <th class="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody class="text-gray-600 text-sm">
                {classes.map((classe)=>(
                    <tr key={classe.id} class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left">{classe.name}</td>
                        <td class="py-3 px-6 text-left">28</td>
                        <td class="py-3 px-6 text-left">{classe.Ncycle}</td>
                        <td class="py-3 px-6 text-left">{classe.Nsemaine}</td>
                        <td class="py-3 px-6 text-center">
                            <div class="flex item-center justify-center">
                                <button class="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </button>
                                <button onClick={()=>{dispatch(RemoveClass(classe.id))}} class="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                                <Link to={"/dashboard/studentlist"} >
                                <button class="w-4 mr-2 transform hover:text-green-500 hover:scale-110">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" className="w-4.5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                                </Link>
                            </div>
                        </td>
                                       
                    </tr>
                ))}                  
                </tbody>
            </table>
        </div>

        {/* <!-- Static Pagination --> */}
        <div class="flex justify-between items-center mt-6">
            <div>
                <span class="text-sm text-gray-700">
                    Showing 1 to 5 of 5 entries
                </span>
            </div>
            <div class="flex space-x-2">
                            <a href="https://abhirajk.vercel.app/" target="blank">

                <button class="px-3 py-1 rounded-md bg-gray-200 text-gray-700 opacity-50">
                    Previous
                </button>
                  </a>
                            <a href="https://abhirajk.vercel.app/" target="blank">

                <button class="px-3 py-1 rounded-md bg-gray-200 text-gray-700 opacity-50">
                    Next
                </button>
                            </a>
            </div>
        </div>
        
    </div>

    





        // {/* Add class */}
        //  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        //     <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        //         <h1 class="text-center text-2xl font-bold mb-6">Ajouter une classe</h1>
        //         <form>
        //             <div class="mb-4">
        //                 <label class="block text-gray-700 font-bold mb-2" >
        //                     nom du classe :
        //                 </label>
        //                 <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="" />
        //             </div>
        //             <div>
        //                 <label for="cycles" class="text-gray-700 font-bold mb-2">Nº de cycles :</label><select name="cycles" id="cycles" class="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"><option value="" selected="">1</option><option value="2">2</option><option value="3">3</option></select>
        //             </div>
        //             <div>
        //                 <label for="weeks" class="block text-gray-700 font-bold mb-2 ">Nº de semaines par cycle :</label><select name="weeks" id="weeks" class="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2 mb-4"><option value="1" selected="">1</option><option value="2">2</option><option value="3">3</option></select>
        //             </div>
        //             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
        //                 Ajouter
        //             </button>
                    
        //         </form>
        //     </div>
        // </div>

    )
}

export default Classes;