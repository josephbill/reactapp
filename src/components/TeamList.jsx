import TeamCard from "./TeamCard";
import '../App.css'
function TeamList({members}){

    return (
        <section className="team-list">
            {/* loop members array and showcase within the team card */}
            {/* .map method - iterate the list implementing a jsx function 
            to each member in the list */}
            {/* {} enable us to write js operation inside html */}
            {/* when dealing with lists in react : always indicate a key value
            for the returned value : unique identifier for each item in list  */}
            {members.map((member) => (
                <TeamCard member={member} key={member.id}/>
            ))}
        </section>
    )

}

export default TeamList;