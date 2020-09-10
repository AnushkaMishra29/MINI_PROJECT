import React,{Component} from 'react'
import './search-item.css'
class SearchItem extends Component
{
    render()
    {
        const image='/assets/announcement.png'
        return(
            <div className="search-item">
                  <div className="Container">
                      <div className="image center">
                        <img src={image}></img>
                      </div>
                      <div>
                      <p className="para">
                      Lorem ipsum, or lipsum as it is sometimes,Lorem ipsum, or lipsum as it is sometimes,Lorem ipsum, or lipsum as it is sometimes

                      </p>
                      </div>
                  </div>
                 
                  
            </div>
        )
    }

}
export default SearchItem