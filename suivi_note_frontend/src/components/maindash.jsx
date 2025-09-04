import { useSelector } from "react-redux";


function Maindash(){
  const classes = useSelector((state)=>state.classes.list)
  const Nclasses = classes.length;

    return(
        <main className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Total des classes</p>
              <h2 className="text-3xl font-bold text-purple-700 mt-2">{Nclasses}</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm text-gray-500">Total des eleves</p>
              <h2 className="text-3xl font-bold text-blue-600 mt-2">0</h2>
            </div>
            {/* <div className="bg-white p-10 rounded-lg shadow-md"> */}
              {/* <p className="text-sm text-gray-500">les classes</p> */}
              <button className="bg-green-600 text-white py-3 rounded-lg shadow hover:bg-green-700">Ajouter une classe</button>
              {/* <h2 className="text-3xl font-bold text-blue-600 mt-2">320</h2> */}
            {/* </div> */}
            {/* <div className="bg-white p-6 rounded-lg shadow-md"> */}
              {/* <p className="text-sm text-gray-500">Pending Tickets</p> */}
            <button className="bg-red-600 text-white py-3 rounded-lg shadow hover:bg-red-700">Supprimer Une classe</button>
              {/* <h2 className="text-3xl font-bold text-red-500 mt-2">12</h2> */}
            {/* </div> */}
          </div>


          {/* <!-- Hero Section --> */}
<section class="bg-indigo-600 text-white py-20 px-4">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
            <h2 class="text-4xl font-bold leading-tight mb-4">Welcome Mr.</h2>
            <p class="text-xl mb-4">students management app.</p>
            {/* <button class="bg-white text-indigo-600 font-bold py-3 px-6 rounded hover:bg-indigo-600 hover:text-white">Get Started</button> */}
        </div>
        <div class="md:w-1/2">
            <img src="https://img.freepik.com/photos-gratuite/livre-fond-tableau-vert_1150-3837.jpg?semt=ais_hybrid&w=740&q=80" alt="Hero Image" class="w-full rounded-xl"/>
        </div>
    </div>
</section>


        {/* Add class */}
        {/* <div class="min-h-screen bg-gray-100 flex items-center justify-center">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
                <h1 class="text-center text-2xl font-bold mb-6">Ajouter une classe</h1>
                <form>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" >
                            nom du classe
                        </label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="" />
                    </div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                        Ajouter
                    </button>
                </form>
            </div>
        </div> */}

          {/* <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b font-bold text-purple-700">User List</div>
            <table className="w-full text-left">
              <thead className="bg-purple-50">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4">John Doe</td>
                  <td className="p-4">john@example.com</td>
                  <td className="p-4">Admin</td>
                  <td className="p-4 text-green-600 font-bold">Active</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Jane Smith</td>
                  <td className="p-4">jane@example.com</td>
                  <td className="p-4">Editor</td>
                  <td className="p-4 text-yellow-500 font-bold">Pending</td>
                </tr>
              </tbody>
            </table>
          </div> */}

          <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700">Add classes</button>
            <button className="bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700">Export Data</button>
            <button className="bg-green-600 text-white py-3 rounded-lg shadow hover:bg-green-700">Generate Report</button>
            <button className="bg-red-600 text-white py-3 rounded-lg shadow hover:bg-red-700">Delete Records</button>
          </div>

          {/* <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
            <img src="https://i.pravatar.cc/100" alt="Profile" className="w-20 h-20 rounded-full shadow" />
            <div>
              <h3 className="text-xl font-bold text-purple-700">Sophia Ray</h3>
              <p className="text-gray-500">Administrator</p>
              <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700">Edit Profile</button>
            </div>
          </div> */}
        </main>
    )
}


export default Maindash;