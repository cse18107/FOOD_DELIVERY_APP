import React,{useState} from "react";
import "./AddPage.css";
import image from "../../../image/bibimbap.png";
import dish from '../../../image/eco-food.png';
import {useNavigate} from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();
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

    const postFoodData = async(e)=>{
      e.preventDefault();

      try{
        const res = await fetch("http://localhost:4000/foods",{
          method:'POST',
          body:JSON.stringify({name,description,image:foodImage,price,ratting
          }),
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data = await res.json();
        //console.log(data);
      }catch(err){
        console.log(err);
      }
      navigate('/');
    }

  return (
    <div className="signupSection">
      <div className="info">
          <div className="food-image" style={{width:"100%",height:"60%"}}>
              <img src={`${!foodImage?dish:foodImage}`} alt="food" style={{height:"70%"}}/>
          </div>
        <div className="food-details">
            <div className="food-fields">
                <div style={{"display":"flex","justifyContent":"space-between"}} ><div style={{"display":"flex"}}><p style={{"fontSize":"1.2rem",color:"rgba(0, 0, 0, 0.589)","fontWeight":"bold"}}>Name: </p><h3 style={{"fontSize":"1.3rem",marginLeft:"5px","marginTop":"4px"}}>{name}</h3></div><div></div></div>
                <div style={{"display":"flex","justifyContent":"space-between"}}><div style={{"display":"flex"}}><p style={{"fontSize":"1.2rem",color:"rgba(0, 0, 0, 0.589)","fontWeight":"bold"}}>Description: </p><h3 style={{"fontSize":"1.3rem",marginLeft:"5px","marginTop":"4px"}}>{description}</h3></div><div></div></div>
                <div className="sub-sec" style={{"display":"flex","justifyContent":"space-between",}}>
                    <div style={{"display":"flex","overflow":"hidden"}}><p style={{"fontSize":"1.2rem",color:"rgba(0, 0, 0, 0.589)","fontWeight":"bold"}}>Price: </p><h3 style={{"fontSize":"1.3rem",marginLeft:"5px","marginTop":"4px"}}>{price}</h3></div>
                    <div style={{"display":"flex","overflow":"hidden"}}><p style={{"fontSize":"1.2rem",color:"rgba(0, 0, 0, 0.589)","fontWeight":"bold"}}>Ratting: </p><h3 style={{"fontSize":"1.3rem",marginLeft:"5px","marginTop":"4px"}}>{ratting}</h3></div>
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
            <button type="submit" id="join-btn" onClick={(e)=>postFoodData(e)}>
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default AddPage;
