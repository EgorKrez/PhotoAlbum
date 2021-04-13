import React from 'react'

const styles = {
    item: {
        marginTop: "10px",
        height: "652px",
        border: "2px solid gray"
    },
    itemHeader: {
        height: "50px",
        width: "100%",
        borderBottom: "2px solid black",
        lineHeight: "50px",
        textAlign: "center",
    },
    itemHeaderNumber: {
        height: "100%",
        width: "50px",
        borderRight: "2px solid gray",
        textAlign: "center",
        float: "left",
    },
}

function Photo(props) {
    return (        
        <div style={styles.item}>
            <div style={styles.itemHeader}>
                <div style={styles.itemHeaderNumber}>{props.photo.id}</div>
                {props.photo.title.toUpperCase()}
                </div>
        <img src={props.photo.url} alt="text"></img>
        </div>
    );

}

export default Photo