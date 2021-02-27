import React from 'react';

// function Detail(props){
//     console.log(props);
//     return <div>movie detail</div>
// }

class Detail extends React.Component{

    componentDidMount(){
        const{location, history} = this.props;
        if(location.state === undefined){
            history.push("/")
        }
    }

    render(){
        const{location} = this.props;

        if(location.state){
            return <h1>{location.state.title}</h1>
        }else{
            return null;
        }
    }
}

export default Detail;