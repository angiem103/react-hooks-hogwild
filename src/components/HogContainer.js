import React, { useState } from "react"
import HogCard from "./HogCard.js"

function HogContainer({hogs}) {

    const [greased, setGreased] = useState(false)
    const [sortedHogs, setSortedHogs] = useState(hogs)

    function handleClick() {
        setGreased(!greased)
    }

    const filteredHogs = hogs.filter((hog) => {
        if(greased){
            return hog.greased
        } else {
            return true
        }
    })

    function handleSort(e) {
        const value = (e.target.value)

        if (value === "none"){
            return filteredHogs
        } else if (value === "name") {
             setSortedHogs(filteredHogs.sort((a,b) => {
                 if(a.name > b.name){
                     return 1
                 } else {
                     return -1
                 }
             }))
         } else {
             setSortedHogs(filteredHogs.sort((a,b) => {
                 if(a.weight > b.weight){
                     return 1
                 } else {
                     return -1
                 }
             }))
         }

    }

    return(
        <div className="ui grid container">
            <button onClick={handleClick}>{greased ? "All Hogs" : "Greased Only"}</button>
            <label >SortBy:
            <select name="hogs" id="hogs" onChange={handleSort}>
                <option value="none">None</option>
                <option value="name">Name</option>
                 <option value="weight">Weight</option>
            </select>
            </label>
            {sortedHogs.map(hog => <HogCard hog={hog} key={hog.name}/>)}
        </div>
    )

}

export default HogContainer