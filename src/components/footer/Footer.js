import React from 'react';
import {socialMediaIcons} from '../../constants'

//todo здесь нужно сделать импорт socialMediaIcons из файла '../../constants'
//todo здесь нужно сделать импорт стилей из './Footer.scss'
import './Footer.scss'


export const Footer = function () {
    console.log(socialMediaIcons);
    return (
        <footer className='may-footer'>
            <div className="may-footer-content">
                <div>Produced by Vitalii Shlomenko</div>
                <div className='may-footer-social-media-wrapper'>
                    {
                        socialMediaIcons.map((val,num) => {
                            return (<a href={val.socialLink} target='_blank' key={'link' + num}><img src={val.src} alt={val.alt} className='may-footer-social-media-icon' key={num.toString()} /></a>)
                        })
                    }
                </div>
            </div>
            <div>All rights reserved(actually only mine). first-app © 2020</div>
        </footer>
    )
}

  // todo здесь нужно сделать экспорт функии под названием Footer
  //   она должна вернуть div с классом "may-footer"
  //   в котором будет 2 div блока: 1й с классом "may-footer-content", второй будет без класса но с текстом 'All rights reserved. may-app © 2020'
  //   в первом div блоке должны быть вложены еще 2 блока div: 1й с текстом "Some text about authors"
  //   второй будет иметь класс "may-footer-social-media-wrapper", в него будут вложены 3 блока img в соответствии с socialMediaIcons
  //   каждый img должен иметь класс "may-footer-social-media-icon" и в пропсу src должен быть записан src из соответствующего объекта в socialMediaIcons массиве
  //   и в пропсу alt должен быть записан alt из соответствующего объекта в socialMediaIcons массиве

