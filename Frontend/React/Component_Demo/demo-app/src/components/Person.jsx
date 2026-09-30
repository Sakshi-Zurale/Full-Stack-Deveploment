function Person(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            <p>{props.contact}</p>
        </div>
    )
}
export default Person