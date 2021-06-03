import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const imgStyle = {
            width:'30px', 
            margin:'0 20px',
            marginBottom: '15px',
            paddingBottom: '10px',
        }
        return (
            <div className='footer'>
             <h2 color= 'white'>Contact</h2>
             <div className='footerinner'style={{ display:'flex', justifyContent:'center'}}>
                 <a href='https://www.instagram.com/matthias_derenbach/' target="_blank" rel="noreferrer"><img style={imgStyle} src='../assets/Instagram.png' alt='Instagram'/></a>
                 <a href='https://www.facebook.com/friedadeinbuch' target="_blank" rel="noreferrer"><img style={imgStyle} src='../assets/Link_Facebook.png' alt='Facebook'/></a>
                 <a href='https://matthias-derenbach.com/' target="_blank" rel="noreferrer"><img style={imgStyle} src='../assets/Link_Topoli.png' alt='Topoli'/></a>
                 <a href='https://www.youtube.com/channel/UCsX-xoi4ObuuCXusqAbbGiw' target="_blank" rel="noreferrer"><img style={imgStyle} src='../assets/Youtube-300x300.png' alt='Youtube'/></a>
             </div>
            </div>
        )
    }
}

