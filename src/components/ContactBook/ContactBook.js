import React, {Component} from 'react';

import "./contactBook.css";

import { CreatorContainer } from '../Creator/CreatorContainer';
import FindContact from '../SearchBar/SearchBar';
import List from '../../components/List/List';

class ContactBook extends Component {
    componentDidMount() {
        if (!JSON.parse(localStorage.getItem("test-todo-store"))) {
            this.props.getInitialContacts("http://demo.sibers.com/users")
        }
    }
    render() {
        let {contactList,
            removeContact=f=>f,
            selectContact=f=>f,
            searchContact=f=>f} = this.props;
        return (
            <div className="contact-book">
                <CreatorContainer />
                <FindContact searchContact={searchContact} />
                {contactList.length >= 1 ?
                    <List contactList={contactList} removeContact={removeContact} selectContact={selectContact}/>:
                    <div className="contact-book__isEmpty">
                        <div className="container">
                            <h4>Нет контактов</h4>
                        </div>
                    </div>

                }
            </div>
        )
    }
}

export default ContactBook;
