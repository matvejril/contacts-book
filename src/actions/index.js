import C from '../constants/';

export const addContact = (contact) => {
    return {
        type: C.ADD_CONTACT,
        payload: contact
    }
};

export const selectContact = (id) => {
    return {
        type: C.SELECT_CONTACT,
        payload: id
    }
};

export const updateContact = (contact) => {
    return {
        type: C.UPDATE_CONTACT,
        payload: contact
    }
};

export const removeContact = (id) => {
    return {
        type: C.REMOVE_CONTACT,
        payload: id
    }
};

export const searchContact = (searchVal) => {
    return {
        type: C.SEARCH_CONTACT,
        payload: searchVal
    }
};




function getInitialContactsSuccess (contactList){
    return {
        type: C.GET_INITIAL_CONTACTS,
        payload: contactList
    }
}

export function getInitialContacts(url) {
    return dispatch => {
        fetch(url)
            .then(
                (result) => {
                    console.log(result.status);
                    return result.json()
                }
            )
            .then(
                (contacts) => {
                    let getContactsVal = contacts.map((contact)=> {
                        return {
                            id: contact.id,
                            name: contact.name,
                            phone: contact.phone,
                            mail: contact.email,
                            site: contact.website,
                            country: contact.address.country,
                            city: contact.address.state,
                            street: contact.address.streetA
                        }
                    });
                    dispatch(getInitialContactsSuccess(getContactsVal))
                }
            )
            .catch (
                (error) => {
                    console.log("error.message", error.message)
                }
            )
    }
}