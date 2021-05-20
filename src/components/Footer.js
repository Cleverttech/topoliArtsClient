import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
             <h2 color= 'white'>Contact</h2>
             <div className='footerinner'style={{ display:'flex', justifyContent:'space-around'}}>
                 <a href='https://www.instagram.com/matthias_derenbach/' target="_blank"><img style={{width:'30px', margin:'15px'}} src='../assets/Instagram.png' alt='Instagram'/></a>
                 <a href='https://www.facebook.com/friedadeinbuch'><img style={{width:'30px', margin:'15px'}} src='../assets/Link_Facebook.png' alt='Facebook'/></a>
                 <a href='https://matthias-derenbach.com/'><img style={{width:'30px', margin:'15px'}} src='../assets/Link_Topoli.png' alt='Topoli'/></a>
                 <a href='https://www.youtube.com/channel/UCsX-xoi4ObuuCXusqAbbGiw'><img style={{width:'30px', margin:'15px'}} src='../assets/Youtube-300x300.png' alt='Youtube'/></a>
                 
             </div>
            </div>
        )
    }
}

