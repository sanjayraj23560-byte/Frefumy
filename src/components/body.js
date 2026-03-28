import Pic_1 from "../assets/images/perfume_1.png";
import Pic_2 from "../assets/images/perfume_2.png";
import Pic_3 from "../assets/images/perfume_3.png";

function Body(){
  return(
    <div class="imgs">
        <div class="img-card">
          <img src={Pic_1} alt="Revenge" />
        <h2>Black Pearl</h2>
        </div>
        <div class="img-card">
          <img src={Pic_2} alt="Revenge" />
        <h2>Gold-dust.</h2>
        </div>
        <div class="img-card">
          <img src={Pic_3} alt="Revenge" />
        <h2>Lore</h2>
        </div>
      </div>
  )
}

export default Body