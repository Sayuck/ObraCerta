import React, { Component } from 'react';
import imgProfileDefault from '../../assets/profileDefault.jpg';
import ProfileAvatarEditor from '../../components/ProfileAvatarEditor';
import { put } from 'axios';
import Button from '../../components/Button';
import GlobalStyle from './styles';

class EditarPerfil extends Component {
    constructor(props) {
        super(props);

        this.fileUpload = this.fileUpload.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault(); // Stop form submit
        this.fileUpload(this.state.file).then((response) => {
            console.log(response.data);
        });
    }

    fileUpload() {
        const url = 'http://localhost:3001/usuario/0';

        const config = {
            headers: {
                // 'Authorization:': localStorage.getItem('token'),
            },
        }
        
        const userData = {
            novoNomeCompleto: "",
            novoEmail:"",
            novoTelefone:"",
            novaDescricao:"",
            novaCategoria:"",
            novaImagemPerfil: sessionStorage.getItem('newImagemPerfil'),
        }

        sessionStorage.clear();
        return put(url, userData, config);
    }

    handleFile(base64) {
        sessionStorage.setItem('novaImagemPerfil', base64);
    }

    render() {
        return (
            <main>
                <GlobalStyle />
                <form onSubmit={this.onFormSubmit}>
                    <ProfileAvatarEditor
                        handleFile={this.handleFile}
                        src={imgProfileDefault}
                    />
                    <Button type="submit">Save</Button>
                </form>
            </main>
        );
    }
}

export default EditarPerfil;
