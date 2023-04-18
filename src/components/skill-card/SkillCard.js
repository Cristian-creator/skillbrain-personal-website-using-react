function SkillCard(props) {
    // object destructing - destructurarea unui obiect
    const { data } = props;
    return (
        <div className='skill-card'>
            <h3> {data.title} </h3>
            <h4> {data.strength} </h4>
            <p> {data.description} </p>
        </div>
    );
}

export default SkillCard;
