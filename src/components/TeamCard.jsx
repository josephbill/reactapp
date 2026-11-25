// showcase of a single team member 
import '../styles/TeamCard.css'

function TeamCard({member,isFavorite,onToggleFavorite}){
    function handleFavoriteClick(e){
        e.stopPropagation();
        // update the state value from false to true 
        onToggleFavorite()
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
            <button className="team-card-fav"  onClick={handleFavoriteClick} >
            {/* conditional rendering : showcasing an interface depending on a value */}
               {isFavorite ? '🔥 Favorite' : '🥶 Favorite'}
            </button>
        </div>
    )

}

export default TeamCard;