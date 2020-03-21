import Services from '../services/index';

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
            const users = await Services.getRamdomUser();
            commit('setContactData', users.data.results[0]);
        },
        async getRandomUsers({ commit }) {
            const users = await Services.getRandomUsers();
            commit('setManyContacts', users.data.results);
        }
    },
    getters: {
        contact: ({name, phone, email, end}) => ({name, phone, email, end}),
        contacts: ({contacts}) => contacts,
    }
}