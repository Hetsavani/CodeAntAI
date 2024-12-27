'use client'

import { useState, useEffect } from 'react'
import { RefreshCw, Search, Home, Code2, Shield, FileText, Settings, Phone, LogOut, PlusCircle, Menu, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const repositories = [
  {
    name: "design-system",
    isPublic: true,
    language: "React",
    size: "2.6 MB",
    updatedAt: "3 days ago",
  },
  {
    name: "codeant-ci-app",
    isPublic: false,
    language: "Javascript",
    size: "1.2 MB",
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    isPublic: true,
    language: "Python",
    size: "4521 KB",
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    isPublic: false,
    language: "Swift",
    size: "4.6 MB",
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-website",
    isPublic: false,
    language: "React",
    size: "2.6 MB",
    updatedAt: "3 days ago",
  },
  {
    name: "blog-website",
    isPublic: true,
    language: "Javascript",
    size: "16120 KB",
    updatedAt: "4 days ago",
  },
  {
    name: "social-network",
    isPublic: false,
    language: "PHP",
    size: "5432 KB",
    updatedAt: "3 days ago",
  },
]

const languageColors = {
  React: "bg-blue-500",
  Javascript: "bg-yellow-500",
  Python: "bg-green-500",
  Swift: "bg-orange-500",
  PHP: "bg-purple-500",
}

export default function Repository() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selected, setSelected] = useState("Repositories")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const nav = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768
      setIsMobile(isMobileView)
      setSidebarOpen(!isMobileView)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const SidebarContent = ({ onClose }) => (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="CodeAnt AI Logo"
            className="h-8 w-8"
          />
          <span className="font-semibold">CodeAnt AI</span>
        </div>
        {isMobile && (
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        )}
      </div>

      <select className="form-select w-full mb-4">
        <option value="UtkarshDhairy">UtkarshDhairy</option>
        <option value="other">Other Users</option>
      </select>

      <nav className="space-y-5">
        <button
          onClick={() => {
            setSelected("Repositories")
            if (isMobile) onClose()
          }}
          className={`btn btn-md w-full flex justify-start py-2 rounded-lg ${
            selected === "Repositories" ? "btn-primary text-white" : "btn-sm"
          }`}
        >
          <Home className="mr-2 my-auto h-5 w-4" /> Repositories
        </button>
        <button
          onClick={() => {
            setSelected("AI Code Review")
            if (isMobile) onClose()
          }}
          className={`btn btn-md w-full flex justify-start py-2 rounded-lg ${
            selected === "AI Code Review"
              ? "btn-primary text-white"
              : "btn-sm"
          }`}
        >
          <Code2 className="mr-2 my-auto h-4 w-4" /> AI Code Review
        </button>
        <button
          onClick={() => {
            setSelected("Cloud Security")
            if (isMobile) onClose()
          }}
          className={`btn btn-md w-full flex justify-start py-2 rounded-lg ${
            selected === "Cloud Security"
              ? "btn-primary text-white"
              : "btn-sm"
          }`}
        >
          <Shield className="mr-2 my-auto h-4 w-4" /> Cloud Security
        </button>
        <button
          onClick={() => {
            setSelected("How to use")
            if (isMobile) onClose()
          }}
          className={`btn btn-md w-full flex justify-start py-2 rounded-lg ${
            selected === "How to use" ? "btn-primary text-white" : "btn-sm"
          }`}
        >
          <FileText className="mr-2 my-auto h-4 w-4" /> How to use
        </button>
        <button
          onClick={() => {
            setSelected("Settings")
            if (isMobile) onClose()
          }}
          className={`btn btn-sm w-full flex justify-start py-2 rounded-lg ${
            selected === "Settings" ? "btn-primary text-white" : "btn-sm"
          }`}
        >
          <Settings className="mr-2 my-auto h-4 w-4" /> Settings
        </button>
      </nav>

      <div className="absolute bottom-4 space-y-2 w-[calc(100%-2rem)]">
        <button className="btn btn-sm py-2 flex justify-start rounded-lg">
          <Phone className="mr-2 h-4 w-4" /> Report
        </button>
        <button className="btn btn-sm py-2 flex justify-start rounded-lg" onClick={()=>{
          nav("/login")
        }}>
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </button>
      </div>
    </>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile Navbar */}
      {isMobile && (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <span className="font-semibold text-lg">CodeAnt AI</span>
          <button onClick={toggleSidebar} className="p-2">
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      )}

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <div className="w-64 bg-white border-r p-4 h-screen overflow-y-auto">
            <SidebarContent onClose={() => {}} />
          </div>
        )}

        {/* Mobile Sidebar */}
        {isMobile && (
          <div className={`
            ${sidebarOpen ? 'translate-y-0' : '-translate-y-full'} 
            transform transition-transform duration-300 ease-in-out 
            fixed top-0 left-0 right-0 z-40 bg-white border-b p-4 h-full overflow-y-auto
          `}>
            <SidebarContent onClose={() => setSidebarOpen(false)} />
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
              <p className="text-sm text-gray-500">
                {repositories.length} total repositories
              </p>
            </div>
            <div className="flex gap-2">
              <button style={{"borderColor":"grey"}} className="btn w-auto btn-outline-secondary rounded-lg py-2 btn-sm flex items-center">
                <RefreshCw className="h-4 w-4 mr-2" /> Refresh All
              </button>
              <button className="btn btn-primary btn-sm flex rounded-lg py-2 items-center">
                <PlusCircle className="h-4 w-4 mr-2" /> Add Repository
              </button>
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search repositories"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control pl-10 w-25"
              />
            </div>
          </div>

          <div className="bg-white">
            {filteredRepositories.map((repo) => (
              <div
                key={repo.name}
                className="flex items-center justify-between p-3 border hover:bg-gray-200"
              >
                <div>
                  <div className="flex items-center">
                    <span className="font-medium">{repo.name}</span>
                    <div
                      style={{ borderWidth: "1px" }}
                      className={`ms-2 btn-outline-success rounded-xl border-green-500 text-primary px-2 bg-blue-50 text-sm`}
                    >
                      {repo.isPublic ? "Public" : "Private"}
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <span
                      className={`h-2 w-2 rounded-full mr-2 ${
                        languageColors[repo.language]
                      }`}
                    />
                    {repo.language}
                    <span className="mx-2">•</span>
                    {repo.size}
                    <span className="mx-3">Updated {repo.updatedAt}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

// "use client";

// import { useState } from "react";
// import {
//   RefreshCw,
//   Search,
//   Home,
//   Code2,
//   Shield,
//   FileText,
//   Settings,
//   Phone,
//   LogOut,
//   PlusCircle,
// } from "lucide-react";

// const repositories = [
//   {
//     name: "design-system",
//     isPublic: true,
//     language: "React",
//     size: "2.6 MB",
//     updatedAt: "3 days ago",
//   },
//   {
//     name: "codeant-ci-app",
//     isPublic: false,
//     language: "Javascript",
//     size: "1.2 MB",
//     updatedAt: "2 days ago",
//   },
//   {
//     name: "analytics-dashboard",
//     isPublic: true,
//     language: "Python",
//     size: "4521 KB",
//     updatedAt: "5 days ago",
//   },
//   {
//     name: "mobile-app",
//     isPublic: false,
//     language: "Swift",
//     size: "4.6 MB",
//     updatedAt: "3 days ago",
//   },
//   {
//     name: "e-commerce-website",
//     isPublic: false,
//     language: "React",
//     size: "2.6 MB",
//     updatedAt: "3 days ago",
//   },
//   {
//     name: "blog-website",
//     isPublic: true,
//     language: "Javascript",
//     size: "16120 KB",
//     updatedAt: "4 days ago",
//   },
//   {
//     name: "social-network",
//     isPublic: false,
//     language: "PHP",
//     size: "5432 KB",
//     updatedAt: "3 days ago",
//   },
// ];

// const languageColors = {
//   React: "bg-blue-500",
//   Javascript: "bg-yellow-500",
//   Python: "bg-green-500",
//   Swift: "bg-orange-500",
//   PHP: "bg-purple-500",
// };

// export default function Repository() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selected, setSelected] = useState("Repositories");

//   const filteredRepositories = repositories.filter((repo) =>
//     repo.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="w-64 bg-white border-r p-4">
//         <div className="flex items-center gap-2 mb-6">
//           <img
//             src="/assets/logo.png"
//             alt="CodeAnt AI Logo"
//             className="h-8 w-8"
//           />
//           <span className="font-semibold">CodeAnt AI</span>
//         </div>

//         <select className="form-select w-full mb-4">
//           <option value="UtkarshDhairy">UtkarshDhairy</option>
//           <option value="other">Other Users</option>
//         </select>

//         <nav className="space-y-5">
//           <button
//             onClick={() => {
//               setSelected("Repositories");
//             }}
//             className={`btn btn-md w-full flex justify-start py-2 rounded-lg ${
//               selected === "Repositories" ? "btn-primary text-white" : "btn-sm"
//             }`}
//           >
//             <Home className="mr-2 my-auto h-5 w-4" /> Repositories
//           </button>
//           <button
//             onClick={() => setSelected("AI Code Review")}
//             className={`btn btn-md w-full flex justify-start py-2 rounded-lg ${
//               selected === "AI Code Review"
//                 ? "btn-primary text-white"
//                 : "btn-sm"
//             }`}
//           >
//             <Code2 className="mr-2 my-auto h-4 w-4" /> AI Code Review
//           </button>
//           <button
//             onClick={() => setSelected("Cloud Security")}
//             className={`btn btn-md w-full flex justify-start py-2 rounded-lg ${
//               selected === "Cloud Security"
//                 ? "btn-primary text-white"
//                 : "btn-sm"
//             }`}
//           >
//             <Shield className="mr-2 my-auto h-4 w-4" /> Cloud Security
//           </button>
//           <button
//             onClick={() => setSelected("How to use")}
//             className={`btn btn-md w-full flex justify-start py-2 rounded-lg ${
//               selected === "How to use" ? "btn-primary text-white" : "btn-sm"
//             }`}
//           >
//             <FileText className="mr-2 my-auto h-4 w-4" /> How to use
//           </button>
//           <button
//             onClick={() => setSelected("Settings")}
//             className={`btn btn-sm w-full flex justify-start py-2 rounded-lg ${
//               selected === "Settings" ? "btn-primary text-white" : "btn-sm"
//             }`}
//           >
//             <Settings className="mr-2 my-auto h-4 w-4" /> Settings
//           </button>
//         </nav>

//         <div className="absolute bottom-4 space-y-2">
//           <button className="btn btn-sm w-full py-2 flex justify-start rounded-lg">
//             <Phone className="mr-2 h-4 w-4" /> Report
//           </button>
//           <button className="btn btn-sm w-full py-2 flex justify-start rounded-lg">
//             <LogOut className="mr-2 h-4 w-4" /> Logout
//           </button>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-8">
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
//             <p className="text-sm text-gray-500">
//               {repositories.length} total repositories
//             </p>
//           </div>
//           <div className="flex gap-2">
//             <button style={{"borderColor":"grey"}} className="btn w-auto btn-outline-secondary rounded-lg py-2 btn-sm flex items-center">
//               <RefreshCw className="h-4 w-4 mr-2" /> Refresh All
//             </button>
//             <button className="btn btn-primary btn-sm flex rounded-lg py-2 items-center">
//               <PlusCircle className="h-4 w-4 mr-2" /> Add Repository
//             </button>
//           </div>
//         </div>

//         <div className="mb-6">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search repositories"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="form-control pl-10"
//             />
//           </div>
//         </div>

//         <div className="bg-white">
//           {filteredRepositories.map((repo) => (
//             <div
//               key={repo.name}
//               className="flex items-center justify-between p-3 border hover:bg-gray-200"
//             >
//               <div>
//                 <div className="flex items-center">
//                   <span className="font-medium">{repo.name}</span>
//                   <div
//                     style={{ borderWidth: "1px" }}
//                     className={`ms-2 btn-outline-success rounded-xl border-green-500 text-primary px-2 bg-blue-50 text-sm`}
//                   >
//                     {repo.isPublic ? "Public" : "Private"}
//                   </div>
//                 </div>
//                 <div className="flex items-center text-sm">
//                   <span
//                     className={`h-2 w-2 rounded-full mr-2 ${
//                       languageColors[repo.language]
//                     }`}
//                   />
//                   {repo.language}
//                   <span className="mx-2">•</span>
//                   {repo.size}
//                   <span className="mx-3">Updated {repo.updatedAt}</span>
//                 </div>
//               </div>
//               <div className="text-sm text-gray-500"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }