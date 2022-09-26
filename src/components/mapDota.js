import Image from '../images/map1.jpg';
// import Image1 from '../images/map2.jpg';
import Image2 from '../images/map3.jpg';
import Image3 from '../images/map4.jpg';
import Image4 from '../images/map5.jpg';

const MapDota = () => {
  return (
    <div className="k">
        <h2 class="map">Dota2 Map</h2>
        <div class="img">
          <img src={Image} alt="" class=""/>
          <img src={Image2} alt="" class=""/>
          <img src={Image3} alt="" class=""/>
          <img src={Image4} alt="" class=""/>
        </div>
    </div>
  );
}
 
export default MapDota;