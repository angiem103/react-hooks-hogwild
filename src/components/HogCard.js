import React, {useState} from "react"

function HogCard({hog}){



    const [clicked, setClicked] = useState(false)

    function handleDetails() {
       setClicked(true)
    }

    return(
        <div className="pigTile">
            <h3  onClick={handleDetails}>{hog.name}</h3>
            {clicked ?  <p>Specialty: {hog.specialty}</p> : null}
            {clicked ?  <p>Weight: {hog.weight}</p> : null}
            {clicked ?  <p>Greased: {hog.greased ? "true" : "false"}</p> : null}
            {clicked ?  <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p> : null}
            <img src={hog.image} alt={hog.name}></img>
        </div>
    )
}

export default HogCard