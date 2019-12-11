import React from 'react';

class Menu extends React.Component{
    render(){

        return(
            <div> 
                
                <p>&#9776;</p>
                {this.props.images.map(image => {

                    return(
                        <div>
                            <p>{image}</p>
                        </div>                        
                    )
                })}

            </div>
                         
               
        )
    }
}
export default Menu; 