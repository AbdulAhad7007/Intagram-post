import heart from './heart.png';
import red from './heartred.png';
import comment from './comment.png';
import save from './save.png';
import share from './share.png';
import icon from './icon.png'
import Button from '../button/button';
import dot from './dots.png'
import './post.css';
import { useState } from 'react';


export const Post = () => {
let [like,setLike]=useState(0)
  
    return (
      
      <div className="post">
        <div className='postpage'>
          
          
         <div className='ptop'><div className='ahad'><img src={icon} alt="" className='imgicon'/><h2 className='ahadjut'>ahadjutt_7008</h2></div> <span><button className='dot'><img src={dot} alt=""  href={Button} className='do'/></button></span></div>
         <div className='pimg'></div>
         
         <div className='disp'><div><h3>ahadjutt_7008</h3></div><div><p className='p'>Lorem, ipsum dolor sit</p></div></div>
           <br></br>
         <div className='pbottom'> 
         <div className='lik' >
         {like ?<img src={red} alt="" className='im' onClick={()=>setLike(!like)} />:<img src={heart} alt="" className='im' onClick={()=>setLike(!like)} />}
         <button className='lik'><img src={comment} alt="" href={Button} className='im'/></button>
         <button className='lik'><img src={share} alt="" href={Button} className='im'/></button>
         </div>
         <button className='lik'><img src={save} alt="" href={Button} className='imsave'/></button>
         </div>
         <hr></hr>
         <span><input placeholder='Add a comment' className='comment'/><button className='submit'>post</button></span>
         
        </div>
      
      </div>
      
    )
  }