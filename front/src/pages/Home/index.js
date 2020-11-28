import React, { Component } from 'react';

import PageDefault from '../../pages/PageDefault';
import Input from '../../components/Input';
import Presentation from '../../components/Presentation';
import Space from '../../components/Space';
import Card from '../../components/Card';
import CardGroup from '../../components/CardGroup';
import GlobalStyle from './styles';

import axios from 'axios';

import imgPresetation from '../../assets/imgPresetation.png';
import imgCard1 from '../../assets/VerticalCards/HomeCards/Card1.svg';
import imgCard2 from '../../assets/VerticalCards/HomeCards/Card2.svg';
import imgCard3 from '../../assets/VerticalCards/HomeCards/Card3.svg';
import Button from '../../components/Button';
// import { ThemeConsumer } from 'styled-components';

class Home extends Component {
    constructor(props) {
        super(props);

        this.data = {
            searchBar: '',
            categoryFilter: '',
            locality: localStorage.getItem('localidade') == null || '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log("entrou")
        // this.data.categoryFilter = text;
        axios.get('http://localhost:3001/search',this.data)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });
    }

    handleCategory = (categoria) => {
        this.data.categoryFilter = categoria;
        console.log(this.data)
        axios.get('http://localhost:3001/search',this.data)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });
    }

    handleChangeSearch = (e) => {
        this.data.searchBar = e.target.value
    };

    render() {
        return (
            <>
            <GlobalStyle />
            <PageDefault loggedIn={this.props.loggedIn}>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        type="search"
                        placeholder="Pesquise..."
                        onChange={this.handleChangeSearch}
                    />
                </form>
                    <Space />
                    <CardGroup>
                        <Button onClick={() => this.handleCategory("Pedreiro")}>Pedreiro</Button>
                        <Button onClick={() => this.handleCategory("Serralheiro")}>Serralheiro</Button>
                        <Button onClick={() => this.handleCategory("Pintor")}>Pintor</Button>
                        <Button onClick={() => this.handleCategory("Eletricista")}>Eletricista</Button>
                        <Button onClick={() => this.handleCategory("Marceneiro")}>Macerneiro</Button>
                        <Button onClick={() => this.handleCategory("Encanador")}>Encanador</Button>
                    </CardGroup>



                <Space size="85px" sizeMobile="55px" />
                <Presentation
                    width="400px"
                    src={imgPresetation}
                    rotation="16deg"
                    alt=""
                >
                    <div>
                        <b>Aqui você encontra o que procura!</b>
                        <br />
                        Os melhores profissionais para a sua obra!
                    </div>
                </Presentation>

                <Space size="85px" sizeMobile="10px" />
                <CardGroup>
                    <Card vertical>
                        <img alt="" src={imgCard1} />
                        <p>
                            Encontre a pessoa certa de maneira rápida e fácil!
                        </p>
                    </Card>
                    <Card>
                        <img alt="" src={imgCard2} />
                        <p>Avalie profissionais pelo seus serviços!</p>
                    </Card>
                    <Card>
                        <img alt="" src={imgCard3} />
                        <p>
                            Publique seu projeto para que profissionais te
                            encontrem!
                        </p>
                    </Card>
                </CardGroup>
            </PageDefault>
            </>
        );
    }
}

export default Home;
