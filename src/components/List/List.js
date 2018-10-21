import React from 'react';

import Item from '../Item/Item';

import "./list.css";

const List = ({contactList, removeContact=f=>f, selectContact=f=>f}) =>
    <div className="contact-list">
        <div className="container">
            <div className="contact-list__head">
                <div className="row">
                    <div className="col-sm-3">Имя</div>
                    <div className="col-sm-3">Контакты</div>
                    <div className="col-sm-3">Адрес</div>
                    <div className="col-sm-2">Сайт</div>
                </div>
            </div>
            <div className="contact-list__body">
                {
                    contactList.map((contactItem, index) => {
                        return (
                            <Item contactItem={contactItem}
                                  key={index}
                                  removeContact={()=>removeContact(contactItem.id)}
                                  selectContact={()=>selectContact(contactItem.id)}
                            />
                        )
                    })}
            </div>
        </div>
    </div>;

export default List;
