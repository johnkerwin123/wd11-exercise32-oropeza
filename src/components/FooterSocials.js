import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import '../css/footer.css'


const FooterSocials = () => {
  return (
    <div class="social-icons d-flex gap-4">
    <a href="https://www.facebook.com/" target="_blank"><BsFacebook/></a>
    <a href="https://www.youtube.com/" target="_blank"><BsYoutube/></a>
    <a href="https://www.github.com/" target="_blank"><BsGithub/></a>
  </div>
  );
}
 
export default FooterSocials;