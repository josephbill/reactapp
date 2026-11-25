// showcase of a single team member 
import { useState } from 'react'
import '../styles/TeamCard.css'

function TeamCard({member}){
    // states lives inside the component to showcase the data 
    // favorite state 
    const [isFavorite, setFavorite] = useState(false)

    function handleFavoriteClick(){
        // for now log - later state 
        console.log("Member favorited!!!")
        // update the state value from false to true 
        setFavorite(!isFavorite)
    }

    function handleCardClick(){
        alert(`Opening profile for ${member.name}`)
    }

    return (
        <div className="team-card" onClick={handleCardClick}>
            <img
            className="teamcard-avatar"
            src={member.avatar}
            alt={`${member.name}'s avatar`}
            />
            <h3 className="teamcard-member-name">
               {member.name}
            </h3>
            <p className="teamcard-role">
                {member.role}
            </p>
            <button className="team-card-fav"  onClick={(e) => {
                e.stopPropagation() // prevent card click from firing 
                // handling the click
                handleFavoriteClick()
            }} >
            {/* conditional rendering : showcasing an interface depending on a value */}
               {isFavorite ? '🔥 Favorite' : '🥶 Favorite'}
            </button>
        </div>
    )

}

export default TeamCard;