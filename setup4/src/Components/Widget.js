import React from 'react'
import './Widget.css';
function Widget() {
    return (
        <div className="widget">

            <iframe className="fb-page"
                src="https://www.facebook.com/watch"
                height="100%"
                width='340px'
                scrolloing='no'
                frameborders='0'
                allowTransparency="true"
                allow="encrypted=media"
            ></iframe>
             
        </div>
    )
}

export default Widget
