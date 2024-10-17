import React from 'react'
import HomeNavBar from '../../components/NavBar/HomeNavBar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const topBarItems = [
    { label: "Pricing", icon: "pricing-icon" },
    { label: "Features", icon: "features-icon" },
    { label: "Help", icon: "help-icon" },
  ];

  const featureItems = [
    { label: "Pin", icon: "pin-icon" },
    { label: "Todo", icon: "todo-icon" },
    { label: "Tags", icon: "help-icon" },
    { label: "Categories", icon: "help-icon" },
    { label: "Calendar", icon: "help-icon" },
    { label: "Images", icon: "help-icon" },
    { label: "Notes", icon: "help-icon" },
  ]

  const textGradient = "bg-gradient-to-r from-cyan-500 via-yellow-100 to-blue-500 bg-clip-text text-transparent";


  return (
    <div>
      <HomeNavBar
        topBarItems={topBarItems}
      ></HomeNavBar>
      <div className='max-w-7xl mx-auto'>
        <div className='pt-10 '>
          <h1 className={`text-6xl mx-auto text-center font-bold p-4 md:mt-12 mb-8 bg-gradient-to-r from-[#100b2a] via-[#2288aa] to-[#180238] bg-clip-text text-transparent `}>
            Free your mind
          </h1>

          <div>
            <div className='max-w-xl text-18px text-center text-[#333A45] mx-auto mb-10'>
              OneWork is a free, secure note-taking app with powerful end-to-end encryption, customizable layouts, and seamless syncing across all your devices. Perfect for keeping your ideas organized, anytime, anywhere!
            </div>

            <div className='flex items-center justify-center'>
              <Link
                to="/sign-up"
                className='w-auto text-white font-semibold text-16px bg-[#0A6DD6] px-8 py-4 mx-6 rounded-lg '
              >
                Sign up for free
              </Link>
              <Link
                to="/sign-up"
                className='w-auto text-white font-semibold text-16px bg-[#0A6DD6] px-8 py-4 mx-6 rounded-lg'
              >Start your work</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePage