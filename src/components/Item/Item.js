import React from 'react';

import "./item.css";

const Item = ({contactItem, removeContact=f=>f, selectContact=f=>f}) =>
    <div className="contact-item">
        <div className="contact-item__actions">
            <button onClick={selectContact} title="Редактировать"><span className="glyphicon glyphicon-cog"/></button>
            <button onClick={removeContact} title="Удалить"><span className="glyphicon glyphicon-trash"/></button>
        </div>
        <div className="row">
            <div className="col-sm-2">
                <p>{contactItem.name}</p>
            </div>
            <div className="col-sm-4">
                <p>Тел.: {contactItem.phone}</p>
                <p>Почта: {contactItem.mail}</p>
            </div>
            <div className="col-sm-3">
                <p>Страна: {contactItem.country}</p>
                <p>Город: {contactItem.city}</p>
                <p>Улица: {contactItem.street}</p>
            </div>
            <div className="col-sm-2">
                <a href={"http://" + contactItem.site} className="contact-item__site">{contactItem.site}</a>
            </div>
        </div>
    </div>;

export default Item;
