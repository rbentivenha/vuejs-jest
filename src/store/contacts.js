import axios from 'axios';

export default {
    state: {
        name: 'Nome',
        phone: 'Telefone',
        email: 'Email',
        end: 'Endereço',
        contacts: []
    },
    mutations: {
        setContactData(state, payload) {
            state.name = payload.name.first;
            state.phone = payload.phone;
            state.email = payload.email;
            state.end = payload.location.street.name;
        },
        setManyContacts(state, payload) {
            state.contacts = payload;
        }
    },
    actions: {
        async getRandomUser({ commit }) {
            const users = await axios.get('https://randomuser.me/api/?inc=location,name,phone,email,picture');
            commit('setContactData', users.data.results[0]);
        },
        async getRandomUsers({ commit }) {
            const users = await axios.get('https://randomuser.me/api/?results=25&nat=br&inc=location,name,phone,email,picture');
            commit('setManyContacts', users.data.results);
        }
    },
    getters: {
        contact: ({name, phone, email, end}) => ({name, phone, email, end}),
        contacts: ({contacts}) => contacts,
    }
}