import React from "react";
import "./styles.scss";
import PropTypes from "prop-types"

const Home = ({size}) =>{
    return(
        <React.Fragment>
            <h1 className="title-logo-top" style={{fontSize:size}}>jóbia</h1>
            <h1 className="title-logo-bottom" style={{fontSize:size}}>damone
                <span>.</span>
            </h1>
        </React.Fragment>
    )
}

Home.propTypes = {
    size:PropTypes.number,
}

Home.defaultProps = {
    size: 40
}

export default Home;