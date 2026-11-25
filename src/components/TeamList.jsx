import {useState} from 'react'
import TeamCard from "./TeamCard";
import '../App.css'

function TeamList({members}){
    //this state array keeps track of members favorited 
    const [favorites, setFavorites] = useState([])

    function toggleFavorite(id){
        // this function will update the state array favorite 
        // if the id is included in the array then remove the value :unfavoriting 
        // if not included then append it (add it)
        // asynchronous updates 
        // prev indicates the current value of the state before the update 
        setFavorites((prev) => prev.includes(id) ? prev.filter((favId) => favId !== id) // removing member
         : [...prev, id] ) //appending the id to the current favorites array if not in existence 
    }

    return (
        <section className="team-list">
          
            {/* loop members array and showcase within the team card */}
            {/* .map method - iterate the list implementing a jsx function 
            to each member in the list */}
            {/* {} enable us to write js operation inside html */}
            {/* when dealing with lists in react : always indicate a key value
            for the returned value : unique identifier for each item in list  */}
            {/* isFavorite prop will inform team card which member has already favorited : true/false */}
            {members.map((member) => (
                <TeamCard 
                member={member} 
                key={member.id}
                isFavorite={favorites.includes(member.id)}  
                onToggleFavorite={() => toggleFavorite(member.id)}
                />
            ))}

              <div>
                            <p>{favorites.length} of {members.length} favorited.</p>

            </div>
        </section>
    )

}

export default TeamList;