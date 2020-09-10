import React,{Component} from 'react'
import './search-item.css'
class SearchItem extends Component
{
    render()
    {
        // const image='/assets/announcement.png'
        return(
            <div className="search-item">
                  <div className="Container">
                      <div className="image center">
                        <img className={this.props.class} src={this.props.image}></img>
                      </div>
                        <div className="center font2">
                            <p><u>{this.props.name}</u></p>
                        </div>
                      <div>
                      <p className="para">
                         {this.props.para}
                      </p>
                      </div>
                      <div>
                      <button className="btn-4">More</button>
                      </div>
                  </div>
            </div>
        )
    }

}
export default SearchItem