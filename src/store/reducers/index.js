import C from '../../constants'

import initialState from '../../data/initialState';

export const contactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case C.GET_INITIAL_CONTACTS: {
            const contactList = action.payload;
            return {
                ...state,
                contactList
            }
        }
        case C.ADD_CONTACT: {
            const contact = action.payload;
            const contactList = [...state.contactList, contact];
            return {
                ...state,
                contactList,
            };
        }
        case C.SELECT_CONTACT: {
            const selectedContact = {...state.contactList
                    .find((contact) =>
                        contact.id === action.payload
                    )
            };
            console.log(selectedContact);
            return {
                ...state,
                selectedContact
            };
        }
        case C.UPDATE_CONTACT: {
            const selectedContact = null;
            const contactList = [...state.contactList]
                .reduce((previousValue, currentItem)=>{
                    if (currentItem.id === action.payload.id) {
                        return [...previousValue, action.payload]
                    }
                    return [...previousValue, currentItem]
                }, []);
            return {
                ...state,
                contactList,
                selectedContact
            };
        }
        case C.REMOVE_CONTACT: {
            const contactList = {...state}.contactList
                .filter((contact) =>
                contact.id !== action.payload);
            return {
                ...state,
                contactList
            };
        }
        case C.SEARCH_CONTACT: {
            const searchContact = action.payload;
            return {
                ...state,
                searchContact
            };
        }
        default: {
            return state
        }
    }
};
