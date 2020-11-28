import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import ProfileCard from '../../components/ProfileCard';
import Space from '../../components/Space';
import PageDefault from '../PageDefault';

class Listagem extends Component {
    constructor(props){
        super(props);

        this.data = [];
    }
    
    componentDidMount = () =>{
        let history = createHistory();
        let data = history.location.state;
        for(let i in history.location.state){
            this.data.push(data[i]);
        }

    }

    render() {
        let history = createHistory();
        this.componentDidMount();
        return (
            <>
            <PageDefault>
            <h1>{history.location.state[0].categoria}</h1>
            {this.data.map(data => (
                <>
                    <ProfileCard
                        src="https://obracertaupload.s3.amazonaws.com/f9f02e7a-142f-4223-ac63-3987dd1c16db-photo%20perfil.jpg"
                        title={data.nomeCompleto}
                        description={data.descricao}
                        href="#"

                    />
                    <Space/>
                </>
          ))}
            </PageDefault>
            </>
        );
    }
}

export default Listagem;
