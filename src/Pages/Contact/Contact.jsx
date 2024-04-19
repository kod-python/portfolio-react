import "./Contact.css"
import Navbar from "../../Components/Navbar/Navbar"
import x from "../../images/x.png"
import git from "../../images/githubhub.png"
import insta from "../../images/instagram.png"
import link from "../../images/linkedin.png"


const Contact = ()=>{

    return(
        <div className="contact">
<Navbar />



<h1>CONTACT <span>ME</span></h1>



<div className="contact-form">





<div className="contact-desc">


<h2>GET IN TOUCH</h2>
<p>Hey! We are looking forward to start a project with you ! <br />
Feel free to reach out...
</p>


<p><i className="fa-solid fa-user"></i>Name <br />
Stanley Kodjo
</p>



<p><i className="fa-solid fa-location-dot"></i>Location <br />
Accra,Ghana
</p>


<p><i className="fa-solid fa-envelope"></i>Email <br />
koddeviper@gmail.com
</p>


<p><i className="fa-solid fa-phone"></i>Number <br />
0548171732
</p>

</div>end



<div className="input-form">


<form action="#">

<div className="form-inside">


<label htmlFor="#">Send a message </label>

<div className="input-join">

<input type="text" name="name" placeholder="Enter your name" />
<input type="email" name="email" placeholder="Enter your email" />
</div>

<input type="text"  name="subject" placeholder="Subject of Message"/>
<textarea name="" id="" cols="75" rows="14"></textarea>



</div>


<div className="button">
<button type="submit">Submit</button>
</div>



<div className="images">
<a href="https://twitter.com/DZIDEgh" target="Blank"><img src={x} alt="img" className="x" /></a>

<a href="https://www.instagram.com/dzidegh" target="Blank"><img src={insta} alt="img" /></a>

<a href="https://www.linkedin.com/in/stanleykod" target="Blank"><img src={link} alt="img"  height="50" className="link"/></a>

<a href="https://github.com/kod-python" target="Blank"><img src={git} alt="img" className="git" /></a>


</div>


</form>





</div>










</div>





        </div>
    )
}
export default Contact