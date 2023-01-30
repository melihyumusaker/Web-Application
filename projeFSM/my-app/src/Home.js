import { Grid } from '@mui/material';
import React, { Component } from 'react';

export class Home extends Component {

    render() {
        return (

            <>
                <div className="mt-5 d-flex justify-content-center">
                    <h2>Ana Sayfaya Hoşgeldiniz.</h2>
                </div>
                <div>
                </div>
                <div className='img1'>
                    <img src='/images/messironaldo.webp'></img>
                </div>
                <div className="mt-5 d-flex justify-content-center">
                    <h3>Yetenekli Futbolcularla Kulüpleri Bir Araya Getiriyoruz.</h3>
                </div>
            </>
        )
    }
}