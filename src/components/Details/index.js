import React, {Component} from 'react';
import { View } from 'react-native';

import { Container, RequestButton, RequestButtonText, TypeDescripton, TypeImage, TypeTitle } from './styles';

import uberx from '../../assets/uberx.png';
export default class Details extends Component {
    render(){
        return <Container>
            <TypeTitle>Popular</TypeTitle>
            <TypeDescripton>Viagens baratas para o dia a dia</TypeDescripton>

            <TypeImage source={uberx}/>
            <TypeTitle>UberX</TypeTitle>
            <TypeDescripton>R$6,00</TypeDescripton>

            <RequestButton onPress={() =>{}}>
                <RequestButtonText>SOLICITAR UBERX</RequestButtonText>
            </RequestButton>
        </Container>
    }
}