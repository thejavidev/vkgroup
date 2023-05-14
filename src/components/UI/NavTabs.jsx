import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { LazyLoadImage } from "react-lazy-load-image-component";




const NavTabs = ({ eventKey, h2, image }) => {
    return (
        <>
            <Tabs
                defaultActiveKey={eventKey}
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey={eventKey} title={h2}>
                    <Sonnet content={h2} image={image} />
                </Tab>
                
            </Tabs>
        </>
    )
}

export default NavTabs
