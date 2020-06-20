import React from 'react';


export default class Headernav extends React.Component {
    render() {
        var source = this.props.sources;
        if (!source) return (
            <div className='loading-div'>
              <img src="https://i.imgur.com/CsQmaeM.gif" />
            </div>
          )
        return (
            <>
                {   
                    source.map(elem => {
                    return <span>{elem.name}</span>
                })}
            </>
        )
    }
}