import React from 'react';
import { Link, Outlet } from 'react-router';


function Dashboard() {
  return (
  
    
        
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 font-bold text-purple-700 text-2xl"><img src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_original/purple-monster-education-logo-design-template-7z0ho7a870e95a.webp" alt="logo" width={55} /></div>
        <nav className="mt-8">
        <Link to="/dashboard" className="block py-3 px-6 text-gray-700 hover:bg-purple-100">Accueil</Link>
        <Link to="/dashboard/classes" className="block py-3 px-6 text-gray-700 hover:bg-purple-100">Classes</Link>
        <Link to="/dashboard/profile" className="block py-3 px-6 text-gray-700 hover:bg-purple-100">Profile</Link>
        <Link to="/" className="block py-3 px-6 hover:bg-purple-100 text-red-600">Logout</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-700">Dashboard</h1>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-lg" />
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">SR</div>
          </div>
        </header>

        {/* Content */}
       
        <Outlet />
    
          <footer className="bg-white p-4 mt-10 text-center text-sm text-gray-400 border-t">
            © 2025 Student management. All rights reserved.
          </footer>
      </div>
    </div>
    
  );
}

export default Dashboard;
