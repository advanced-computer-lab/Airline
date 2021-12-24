import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackgroundSlider from 'react-background-slider'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import Box from '@mui/material/Box';
import './select-seats.css'; 

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const RetSeats = props => {

    const state = props.location.state

    const res = props.location.state.res

    let edit =false

    if(res!=null) edit = true;

    const noseats = state.noseats

    const noadults = state.noadults

    let seatsavlbl

    const [reserved, setReserved] = useState([])

    const forceUpdate = useForceUpdate();
    
    const done = reserved.length==noseats

    const cabin = state.cabin

    const departurereserved = state.reserved

    const retflight = state.retflight

    const depflight = state.depflight


    const flightreserved = retflight.ReservedSeats

    if (cabin == "Economy"){seatsavlbl = ""+retflight.EconomySeats}
    else if (cabin == "Business Class"){seatsavlbl = ""+retflight.BusinessSeats}
    else if (cabin == "First Class"){seatsavlbl = ""+retflight.FirstSeats}

    let c = ""

      if (cabin == "Economy"){c="E"}
      else if (cabin == "Business Class"){c="B"}
      else if (cabin == "First Class"){c="F"}

    const row1 =[{id: `${c}01`}, {id: `${c}02`}, {id: `${c}03`}, {id: `${c}04`}, {id: `${c}05`}, {id: `${c}06`}]
    const row2 =[{id: `${c}07`}, {id: `${c}08`}, {id: `${c}09`}, {id: `${c}10`}, {id: `${c}11`}, {id: `${c}12`}]
    const row3 =[{id: `${c}13`}, {id: `${c}14`}, {id: `${c}15`}, {id: `${c}16`}, {id: `${c}17`}, {id: `${c}18`}]
    const row4 =[{id: `${c}19`}, {id: `${c}20`}, {id: `${c}21`}, {id: `${c}22`}, {id: `${c}23`}, {id: `${c}24`}]
    const row5 =[{id: `${c}25`}, {id: `${c}26`}, {id: `${c}27`}, {id: `${c}28`}, {id: `${c}29`}, {id: `${c}30`}]
    const row6 =[{id: `${c}31`}, {id: `${c}32`}, {id: `${c}33`}, {id: `${c}34`}, {id: `${c}35`}, {id: `${c}36`}]
    const row7 =[{id: `${c}37`}, {id: `${c}38`}, {id: `${c}39`}, {id: `${c}40`}, {id: `${c}41`}, {id: `${c}42`}]
    const row8 =[{id: `${c}43`}, {id: `${c}44`}, {id: `${c}45`}, {id: `${c}46`}, {id: `${c}47`}, {id: `${c}48`}]
    const row9 =[{id: `${c}49`}, {id: `${c}50`}, {id: `${c}51`}, {id: `${c}52`}, {id: `${c}53`}, {id: `${c}54`}]
    const row10 =[{id: `${c}55`}, {id: `${c}56`}, {id: `${c}57`}, {id: `${c}58`}, {id: `${c}59`}, {id: `${c}60`}]


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
         <BackgroundSlider
          images={[image1,image2, image3]}
          duration={4}
          transition={2}
        />
        <Box
    opacity='[0,0,0]'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '65ch' },
      }}
      noValidate
      textAlign='left'
      autoComplete="off"
      height="0px" 
    >
      <div >
      <div style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '5vh'}}>
      {edit&&
          ((<Link to={"/ViewReservations"} className="btn btn-danger" onClick={() => {props.history.push("/ViewReservations")}}>Cancel</Link>))
          
          }
          </div>
          <h1>Select Return Flight Seats </h1>
          <div style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '5vh'}}>
            { done &&
          <Link to={{ pathname: "/flights/Booking", state: {retflight, depflight, noseats, cabin, departurereserved, reserved, noadults, res} }} className="btn btn-success">
            Confirm Selection
          </Link>}
          </div>

          <strong>Please select {noseats} {cabin} seat(s) for your return flight.</strong>
         
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
</Box>
</div>
      );

};

export default RetSeats;