import React, { Component } from 'react'
import Item from './search-item/search-item'
import './Search.css'
class Search extends Component{
    render()
    {
        return (
            <div className="background">
                <div className="center font padding">
                    <div className="underline">
                    You Can Search For
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <Item></Item>
                    </div>
                    <div className="col-lg-3 col-6">
                    <Item></Item>
                        
                    </div>
                    <div className="col-lg-3 col-6">
                    <Item></Item>
                        
                    </div>
                    <div className="col-lg-3 col-6">
                    <Item></Item>
                        
                    </div>
                </div>
            </div>
        )
    }    
    
}
export default Search