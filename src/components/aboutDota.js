import Card from 'react-bootstrap/Card';
import Image from '../images/dotawall3.jpg';

const AboutDota = () => {
  return (
    
    <div className="about">
        <h2>About Dota2</h2>
      <div class="row">

          <div class="col-6">
          
          <p>A month prior to its official launch, Dota 2 was already the most played game on Steam with a
                  concurrent player count of nearly 330,000,
                  which outweighed the number of players for the rest of platform's top ten most-played games combined.
                  It remained as the most played game by concurrent players on the platform for four years,
                  having a peak of over one million and never dropping below first place for any extended period of time
                  until being surpassed by PlayerUnknown's Battlegrounds in 2017.
                  Viewership and followings of professional Dota 2 leagues and tournaments are also popular, with peak
                  viewership numbers of some events reaching upwards in the millions.
                  Some Asian schools and universities, such as the Asia Pacific University of Technology & Innovation in
                  Malaysia, have held courses teaching students the fundamentals and core skills to use for the game.
                  Dota 2 has also been a part of multi-sport events in Asia, such as the Asian Indoor and Martial Arts
                  Games and Southeast Asian Games.</p>
          </div>
          <div class="col-6">
            <img src={Image}/>
          </div>
      </div>
   
    </div>
  );
}
 
export default AboutDota;