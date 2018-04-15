import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestApiData } from "./actions";

class Home extends Component{
    
    componentDidMount(){
        console.log('componentDidMount : Home');
        this.props.requestApiData();
    }

    renderUserList(){
        return this.props.data.results.map(({id , name, email, picture, location}) => {
                return (
                <div key={id.value} className='container-fluid'>
                <h2 className="page-header">User Details </h2>
                    <table className="table">
                    <tbody>
                        <tr>
                            <th>Name :</th>
                            <td>{`${name.title} ${name.first} ${name.last}`}</td>
                        </tr>
                        <tr>
                            <th>Email :</th>
                            <td>{`${email} `}</td>
                        </tr>
                        <tr>
                            <th>Image : </th>
                            <td><img src={`${picture.medium}`} /></td>
                        </tr>
                        <tr>
                            <th>Address :</th>
                            <td>{`${location.street} ${location.city} ${location.state} `}</td>
                        </tr>
                       </tbody>
                     </table>
                  
                   
                </div>
                );
        });
    }

    render(){
        
        if(!this.props.data.results){
            return <h1>Loading.....</h1>
        }
        return (
            <div>
                {this.renderUserList()}
            </div>

        );
    }
}

function mapStateToProps(state){
    return {
        data : state.data
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({requestApiData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);