import React, { Component } from 'react';

import "./creator.css";

class Creator extends Component {
    defaultState = {
        name: '',
        phone: '',
        mail: '',
        site: '',
        country: '',
        city: '',
        street: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            contact: props.selectedContact ? props.selectedContact : { ...this.defaultState }
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.contact !== nextProps.selectedContact) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    contact: nextProps.selectedContact ? nextProps.selectedContact : this.defaultState
                };
            })
        }
    };
    handlerAddContact = () => {
        let contactName = this.state.contact.name;
        if (contactName) {
            const contact = {
                id: Date.now(),
                name: contactName,
                phone: this.state.contact.phone,
                mail: this.state.contact.mail,
                site: this.state.contact.site,
                country: this.state.contact.country,
                city: this.state.contact.city,
                street: this.state.contact.street
            };
            this.props.addContact(contact);
            this.resetForm();
        }
    };
    handlerUpdateContact = () => {
        let contactName = this.state.contact.name;
        if (contactName) {
            let contact = {
                id: this.state.contact.id,
                name: contactName,
                phone: this.state.contact.phone,
                mail: this.state.contact.mail,
                site: this.state.contact.site,
                country: this.state.contact.country,
                city: this.state.contact.city,
                street: this.state.contact.street
            };
            this.props.updateContact(contact);
            this.resetForm();
        }
    };
    handleChange = (event) => {
        const contact = { ...this.state.contact };
        const { name, value } = event.target;
        contact[name] = value;
        this.setState({ contact: contact });
    };
    resetForm() {
        this.setState({
            contact: { ...this.defaultState },
        });
    }
    renderBtn = () => {
        const addBtn = <button type="button" onClick={this.handlerAddContact}>Добавить</button>;
        const saveBtn = <button type="button" onClick={this.handlerUpdateContact}>Сохранить</button>;
        if (this.state.contact.name) {
            return saveBtn
        } else {
            return addBtn
        }
    };
    render () {
        return (
            <div className="creator">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6  col-md-3">
                            <input placeholder="Имя"
                                   name='name'
                                   value={this.state.contact.name}
                                   onChange={this.handleChange} />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <input placeholder="Номер телефона"
                                   name="phone"
                                   value={this.state.contact.phone}
                                   type="tel"
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <input placeholder="Email адресс"
                                   name="mail"
                                   type="email"
                                   value={this.state.contact.mail}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <input placeholder="Сайт"
                                   name="site"
                                   value={this.state.contact.site}
                                   onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <input placeholder="Страна"
                                   name="country"
                                   value={this.state.contact.country}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <input placeholder="Город"
                                   name="city"
                                   value={this.state.contact.city}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <input placeholder="Улица"
                                   name="street"
                                   value={this.state.contact.street}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 creator__action">
                            {this.renderBtn()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Creator;
