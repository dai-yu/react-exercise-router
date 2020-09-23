import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component{
    render(){
        return (<div>
            Company: ThoughtWorks Local<br/>
            Location: Chengdu<br/>
            For more information, please<br/>
            View out <Link to="/">website</Link>.
        </div>);
    }
}