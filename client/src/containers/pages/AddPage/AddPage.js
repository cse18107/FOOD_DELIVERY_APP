import React,{useState} from "react";
import "./AddPage.css";
import image from "../../../image/bibimbap.png";
import dish from '../../../image/eco-food.png'

function AddPage() {
    const [foodImage,setFoodImage] = useState("");
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");
    const [ratting,setRatting] = useState("");

    const getName=(e)=>{
        setName(e.target.value);
    }
    const getDescription=(e)=>{
        setDescription(e.target.value);
    }
    const getFoodImage=(e)=>{
        setFoodImage(e.target.value);
    }
    const getPrice=(e)=>{
        setPrice(e.target.value);
    }
    const getRatting=(e)=>{
        setRatting(e.target.value);
    }
  return (
    <div className="signupSection">
      <div className="info">
          <div className="food-image" style={{width:"100%",height:"60%"}}>
              <img src={`${!foodImage?dish:foodImage}`} alt="food" style={{height:"70%"}}/>
          </div>
        <div className="food-details">
            <div className="food-fields">
                <div style={{"display":"flex","justifyContent":"space-between"}} ><p>{`Name: ${name}`}</p><div></div></div>
                <div style={{"display":"flex","justifyContent":"space-between"}}><p>{`Description: ${description}`}</p><div></div></div>
                <div className="sub-sec" style={{"display":"flex","justifyContent":"space-between"}}>
                    <p>{`Price: ${price}`}</p>
                    <p>{`Ratting: ${ratting}`}</p>
                </div>
            </div>
        </div>
      </div>
      <form className="signupForm" name="signupform">
        <img src={image} alt="food" style={{ width: "150px" }} />
        <ul className="noBullet">
          <li>
            <label for="Name of food"></label>
            <input
              type="text"
              onChange={getName}
              className="inputFields"
              placeholder="Name of food"
              oninput="return userNameValidation(this.value)"
            />
          </li>
          <li>
            <label for="Price"></label>
            <input
              type="text"
              onChange={getPrice}
              className="inputFields"
              placeholder="Price"
              oninput="return passwordValidation(this.value)"
            />
          </li>
          <li>
            <label for="Image link"></label>
            <input
              type="text"
              onChange={getFoodImage}
              className="inputFields"
              placeholder="Image link"
            />
          </li>
          <li>
            <label for="Description"></label>
            <input
              type="text"
              onChange={getDescription}
              className="inputFields"
              placeholder="Description"
            />
          </li>
          <li>
            <label for="Ratting"></label>
            <input type="text"onChange={getRatting} className="inputFields" placeholder="Ratting" />
          </li>
          <li id="center-btn">
            <button type="submit" id="join-btn" onClick={(e)=>e.preventDefault()}>
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default AddPage;
