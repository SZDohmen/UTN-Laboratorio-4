import React from 'react';

export const Map = () => {
    return(
        <React.Fragment>
            <iframe
                title="mapadegoogle"
                style={{ border: 0, width: "100%", height: "350px" }}
                src={`https://maps.google.com/maps?q=-32.886153,-68.8386639&zoom=5&output=embed`}
            ></iframe>
        </React.Fragment>
    );
}