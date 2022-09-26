// import '../css/style.css';
// import Logo from '../images/logo8.png';
// const HeadingPart  = () => {
//   return (
//     <nav>
//   <input id="nav-toggle" type="checkbox"/>
//   <div class="logo"><img src={Logo} alt=""/></div>
//   <ul class="links">
//     <li><a href="#slark">Slark</a></li>
//     <li><a href="#queenofpain">Queen of Pain</a></li>
//     <li><a href="#zues">Zues</a></li>
//     <li><a href="#pudge">Pudge</a></li>
//   </ul>
//   <label for="nav-toggle" class="icon-burger">
//     <div class="line"></div>
//     <div class="line"></div>
//     <div class="line"></div>
//   </label>
// </nav>


//   );
// }
 
// export default HeadingPart;
// import Logo from '../images/logo8.png';
import '../css/style.css';
import Logo from '../images/logo8.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const HeadingPart  = () => {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">JKO.DEv</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#heroes">Heroes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
 
export default HeadingPart;