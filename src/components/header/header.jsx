import './header.css';
import hus from './home.png'
import mas from './mas.png'
import box from './box.svg'
import com from './comp.svg'
import heart from './heart.png'
import user from './icon.png'
import insta from './insta.png'

export const Header = () => {
  
  return (
    <div className="header">
      <img src={insta} alt="" className='insta'/>
     <input placeholder='search' />
     <div className='topicons'> 
     <img src={hus} alt="" className='huse'/>
     <img src={mas} alt="" className='huse'/>
     <img src={box} alt="" className='huse'/>
     <img src={com} alt="" className='huse'/>
     <img src={heart} alt="" className='huse'/>
     <img src={user} alt="" className='huse'/>
     </div>
    </div>
  )
}