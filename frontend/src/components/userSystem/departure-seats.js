import React, { useState } from "react";
import { Link } from "react-router-dom";

import './select-seats.css'; 


function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}




const DepSeats = props => {

    const state = props.location.state

    const noseats = state.noseats
    const noadults = state.noadults

    let seatsavlbl 

    const [reserved, setReserved] = useState([])

    const forceUpdate = useForceUpdate();

    const done = reserved.length==noseats
  
    const cabin = state.cabin

    const depflight = state.returnFlight

    const retflight = state.flight

    const flightreserved = []

    if (cabin == "Economy"){seatsavlbl = ""+depflight.EconomySeats}
    else if (cabin == "Business Class"){seatsavlbl = ""+depflight.BusinessSeats}
    else if (cabin == "First Class"){seatsavlbl = ""+depflight.FirstSeats}

    const row1 =[{id: "01"}, {id: "02"}, {id: "03"}, {id: "04"}, {id: "05"}, {id: "06"}]
    const row2 =[{id: "07"}, {id: "08"}, {id: "09"}, {id: "10"}, {id: "11"}, {id: "12"}]
    const row3 =[{id: "13"}, {id: "14"}, {id: "15"}, {id: "16"}, {id: "17"}, {id: "18"}]
    const row4 =[{id: "19"}, {id: "20"}, {id: "21"}, {id: "22"}, {id: "23"}, {id: "24"}]
    const row5 =[{id: "25"}, {id: "26"}, {id: "27"}, {id: "28"}, {id: "29"}, {id: "30"}]
    const row6 =[{id: "31"}, {id: "32"}, {id: "33"}, {id: "34"}, {id: "35"}, {id: "36"}]
    const row7 =[{id: "37"}, {id: "38"}, {id: "39"}, {id: "40"}, {id: "41"}, {id: "42"}]
    const row8 =[{id: "43"}, {id: "44"}, {id: "45"}, {id: "46"}, {id: "47"}, {id: "48"}]
    const row9 =[{id: "49"}, {id: "50"}, {id: "51"}, {id: "52"}, {id: "53"}, {id: "54"}]
    const row10 =[{id: "55"}, {id: "56"}, {id: "57"}, {id: "58"}, {id: "59"}, {id: "60"}]


   


    const dispSeats = (id) => {
      if (seatsavlbl>0 && !(flightreserved.includes(id)))
      {
        seatsavlbl--;
        return true;
      }

      else {
        return false;

      }

    };
    

    const checkMax = (id) => {
      if (reserved.length >= noseats && !(reserved.includes(id)))
      {
        return false;
      }

      if(reserved.includes(id))
      {
        return true;
      }

      else {
        return;

      }

    };

    const seatHandler = (e, id) => {
      let isSelected = e.currentTarget.checked;
      if(isSelected){
          if(reserved.length<noseats){
            setReserved([...reserved, id])
            console.log("reserved seat "+id)
          }
      }
      else{
        setReserved(reserved.filter((item)=>id!==item))
        console.log("removed seat "+id)
      }

      forceUpdate()
      console.log("reserved: "+reserved.toString())
    };
    

    return (

      <div>
      <div >
          <h1>Select Departure Flight Seats &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            { done &&
          <Link to={{ pathname: "/flights/ChooseRetSeats", state: {retflight, depflight, noseats, cabin, reserved, noadults} }} className="btn btn-success">
            Confirm Selection
          </Link>}</h1>

          <strong>Please select {noseats} {cabin} seat(s) for your departure flight.</strong>
          </div>


      <div class="plane">
  <div class="exit exit--front fuselage"></div>
    
  
  <ol class="cabin fuselage">
    <li class="row row--1">
    <ol class="seats" type="A">



    {row1.map((seat) => {
    return (
      
      <>

      {dispSeats(seat.id) ? (
        <li class="seat">
        <input type="checkbox" checked={checkMax(seat.id)} id={seat.id} onChange={(e) => {seatHandler(e, seat.id);}}   />
        <label for={seat.id}>{seat.id}</label>
      </li>
      ) : (
        <li class="seat" >
          <input type="checkbox"  disabled id={seat.id}/>
          <label for={seat.id}>Occupied</label>
        </li>
      )}
      
      
      </>
          
    );
  })}

</ol>
    </li>

    

    <li class="row row--2">
      <ol class="seats" type="A">
      {row2.map((seat) => {
    return (
      
      <>

      {dispSeats(seat.id) ? (
        <li class="seat">
        <input type="checkbox" id={seat.id} checked={checkMax(seat.id)} onChange={(e) => {seatHandler(e, seat.id)}}   />
        <label for={seat.id}>{seat.id}</label>
      </li>
      ) : (
        <li class="seat" >
          <input type="checkbox"  disabled id={seat.id}/>
          <label for={seat.id}>Occupied</label>
        </li>
      )}
      
      
      </>
          
    );
  })}
      </ol>
    </li>
    <li class="row row--3">
      <ol class="seats" type="A">
      {row3.map((seat) => {
    return (
      
      <>

      {dispSeats(seat.id) ? (
        <li class="seat">
        <input type="checkbox" id={seat.id} checked={checkMax(seat.id)} onChange={(e) => {seatHandler(e, seat.id)}}   />
        <label for={seat.id}>{seat.id}</label>
      </li>
      ) : (
        <li class="seat" >
          <input type="checkbox"  disabled id={seat.id}/>
          <label for={seat.id}>Occupied</label>
        </li>
      )}
      
      
      </>
          
    );
  })}
      </ol>
    </li>
    <li class="row row--4">
      <ol class="seats" type="A">
      {row4.map((seat) => {
    return (
      
      <>

      {dispSeats(seat.id) ? (
        <li class="seat">
        <input type="checkbox" id={seat.id} checked={checkMax(seat.id)} onChange={(e) => {seatHandler(e, seat.id)}}   />
        <label for={seat.id}>{seat.id}</label>
      </li>
      ) : (
        <li class="seat" >
          <input type="checkbox"  disabled id={seat.id}/>
          <label for={seat.id}>Occupied</label>
        </li>
      )}
      
      
      </>
          
    );
  })}
      </ol>
    </li>
    <li class="row row--5">
      <ol class="seats" type="A">
      {row5.map((seat) => {
    return (
      
      <>

      {dispSeats(seat.id) ? (
        <li class="seat">
        <input type="checkbox" id={seat.id} checked={checkMax(seat.id)} onChange={(e) => {seatHandler(e, seat.id)}}   />
        <label for={seat.id}>{seat.id}</label>
      </li>
      ) : (
        <li class="seat" >
          <input type="checkbox"  disabled id={seat.id}/>
          <label for={seat.id}>Occupied</label>
        </li>
      )}
      
      
      </>
          
    );
  })}
      </ol>
    </li>
    <li class="row row--6">
      <ol class="seats" type="A">
      {row6.map((seat) => {
    return (
      
      <>

      {dispSeats(seat.id) ? (
        <li class="seat">
        <input type="checkbox" id={seat.id} checked={checkMax(seat.id)} onChange={(e) => {seatHandler(e, seat.id)}}   />
        <label for={seat.id}>{seat.id}</label>
      </li>
      ) : (
        <li class="seat" >
          <input type="checkbox"  disabled id={seat.id}/>
          <label for={seat.id}>Occupied</label>
        </li>
      )}
      
      
      </>
          
    );
  })}
      </ol>
    </li>
    <li class="row row--7">
      <ol class="seats" type="A">
      {row7.map((seat) => {
    return (
      
      <>

      {dispSeats(seat.id) ? (
        <li class="seat">
        <input type="checkbox" id={seat.id} checked={checkMax(seat.id)} onChange={(e) => {seatHandler(e, seat.id)}}   />
        <label for={seat.id}>{seat.id}</label>
      </li>
      ) : (
        <li class="seat" >
          <input type="checkbox"  disabled id={seat.id}/>
          <label for={seat.id}>Occupied</label>
        </li>
      )}
      
      
      </>
          
    );
  })}
      </ol>
    </li>
    <li class="row row--8">
      <ol class="seats" type="A">
      {row8.map((seat) => {
    return (
      
      <>

      {dispSeats(seat.id) ? (
        <li class="seat">
        <input type="checkbox" id={seat.id} checked={checkMax(seat.id)} onChange={(e) => {seatHandler(e, seat.id)}}   />
        <label for={seat.id}>{seat.id}</label>
      </li>
      ) : (
        <li class="seat" >
          <input type="checkbox"  disabled id={seat.id}/>
          <label for={seat.id}>Occupied</label>
        </li>
      )}
      
      
      </>
          
    );
  })}
      </ol>
    </li>
    <li class="row row--9">
      <ol class="seats" type="A">
      {row9.map((seat) => {
    return (
      
      <>

      {dispSeats(seat.id) ? (
        <li class="seat">
        <input type="checkbox" id={seat.id} checked={checkMax(seat.id)} onChange={(e) => {seatHandler(e, seat.id)}}   />
        <label for={seat.id}>{seat.id}</label>
      </li>
      ) : (
        <li class="seat" >
          <input type="checkbox"  disabled id={seat.id}/>
          <label for={seat.id}>Occupied</label>
        </li>
      )}
      
      
      </>
          
    );
  })}
      </ol>
    </li>
    <li class="row row--10">
      <ol class="seats" type="A">
      {row10.map((seat) => {
    return (
      
      <>

      {dispSeats(seat.id) ? (
        <li class="seat">
        <input type="checkbox" id={seat.id} checked={checkMax(seat.id)} onChange={(e) => {seatHandler(e, seat.id)}}   />
        <label for={seat.id}>{seat.id}</label>
      </li>
      ) : (
        <li class="seat" >
          <input type="checkbox"  disabled id={seat.id}/>
          <label for={seat.id}>Occupied</label>
        </li>
      )}
      
      
      </>
          
    );
  })}
      </ol>
    </li>
  </ol>
  <div class="exit exit--back fuselage">
    
  </div>
</div>

</div>
      );

};

export default DepSeats;