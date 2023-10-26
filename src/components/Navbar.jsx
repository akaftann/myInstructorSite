import {useState} from 'react'
import {close, phone, menu, logo3} from '../assets'
import {navLinks} from '../constants'



const Navbar = () => {
  const [toggle, setTogle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      
      <img src={logo3} alt='monobank' className='w-[224px] h-[224px]'/>
        <img src={phone} alt='monobank' className='w-[30px] h-[30px] mr-2'/>
        <p className="text-gradient" style={{ whiteSpace: 'nowrap' }}>+380 97 171 69 68</p>
      

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white
          ${index===navLinks.length - 1? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[24px] h-[24px] object-contain'
          onClick={()=>setTogle((prev)=>!prev)}/>

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 
          my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index)=>(
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white
                ${index===navLinks.length - 1? 'mb-0' : 'mb-4'}`}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
    
  )
}

export default Navbar