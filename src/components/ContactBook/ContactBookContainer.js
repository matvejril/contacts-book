import { connect } from "react-redux";

import {
    removeContact,
    selectContact,
    searchContact,
    getInitialContacts } from "../../actions";

import ContactBook from "./ContactBook";

function mapStateToProps(state) {
    const { contactListReducer } = state;
    const searchContact = contactListReducer.searchContact;
    return {
        contactList: contactListReducer.contactList.filter((contactItem) => {
            return contactItem.name.toLowerCase().includes(searchContact)
        })
    };
}
function mapDispatchToProps(dispatch) {
    return {
        removeContact(id) {
            dispatch(removeContact(id))
        },
        selectContact(id) {
            dispatch(selectContact(id))
        },
        searchContact(searchVal) {
            dispatch(searchContact(searchVal))
        },
        getInitialContacts(url) {
            dispatch(getInitialContacts(url))
        }
    };
}

export const ContactBookContainer = connect(mapStateToProps, mapDispatchToProps)(ContactBook);
