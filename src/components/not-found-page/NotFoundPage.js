import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './NotFoundPage.scss'

const NotFoundPageComponent = (props) => {
    const { history } = props;
    // ttodo 1: добавить кнопку навигации на back to home page
    //  подумайте, как для этого надо изменить эту страницу
    const toHomePage = () => {
        history.push('/home');
    };
    return <div>
        <div className='box'>
            <h3>Сори, братан</h3>
            <div>Тут походу нет ничего =(</div>
            <button onClick={toHomePage}>Поискать еще</button>
        </div>
    </div>
};

export const NotFoundPage = withRouter(NotFoundPageComponent);