import React from 'react';
import {RegisterView} from './ui/RegisterView';

export class RegisterConnector extends React.PureComponent{


    dummySubmit = async (values: any) => {
        console.log(values);
        return null;
    }
    render(){
        return(
            <RegisterView submit={this.dummySubmit}/>
        );

    }
}
//container => view
//container -> connector -> view (different for react and react native)
