const FooterItem = (props) => {
    const { data } = props;
    return ( // JSX
        <div className='footer-item'>
            <h3> {data.title} </h3>
            <p> {data.content} </p>
        </div>
    )
};

export default FooterItem;
