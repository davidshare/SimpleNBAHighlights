import React from 'react'


const SlideElement = ({item}) =>{
	return(
		<div className="item_slider" style={{background:`url(/images/covers/${item.cover})`}}>
            <div className="caption">
                <h4>{item.topic}</h4>
                <p>{item.title}</p>
            </div>
        </div>
	)
}

export default SlideElement