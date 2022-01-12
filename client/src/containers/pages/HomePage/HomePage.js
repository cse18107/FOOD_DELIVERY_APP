import React,{useState,useEffect} from 'react';

const HomePage = () => {

    const [foods,setFoods] = useState([]);

    const get_all_data = async() =>{
      const res = await fetch('http://localhost:4000/foods',{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
      });
      const data =await res.json()
      console.log(data.message);
      setFoods(data.message);
    }
  
    useEffect(()=>{get_all_data()},[]);


    return (
        <div>
            <ul>
        {foods.map((food)=>{
          return (
            <div class="card" style={{"width": "18rem"}}>
              <img src={food.image} class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">{food.name}</p>
              </div>
            </div>
          );
        })}
      </ul>
        </div>
    )
}

export default HomePage
