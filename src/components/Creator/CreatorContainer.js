import { connect } from "react-redux";
import {
    addContact,
    updateContact } from '../../actions';

import Creator from "./Creator"

function mapStateToProps(state) {
    const { contactListReducer } = state;
    return {
        contactList: contactListReducer.contactList,
        selectedContact: contactListReducer.selectedContact,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addContact(contact) {
            dispatch(addContact(contact))
        },
        updateContact(contact) {
            dispatch(updateContact(contact))
        }
    };
}

export const CreatorContainer = connect(mapStateToProps, mapDispatchToProps)(Creator);
