import Services from '../services/index';

export default {
    state: {
        name: 'Nome',
        phone: 'Telefone',
        email: 'Email',
        end: 'Endereço',
        contacts: [],
        searchFilter: '',
        filteredContent: []
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
            state.filteredContent = payload
        },
        setSearchFilter(state, payload) {
            state.searchFilter = payload;
            if (state.searchFilter.length > 0) {
                state.filteredContent = state.contacts.filter(el => el.name.first.match(state.searchFilter));
            } else {
                state.filteredContent = state.contacts;
            }
            console.log("setSearchFilter -> state.filteredContent", state.filteredContent);
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
        },
        filter({ commit }, payload) {
            commit('setSearchFilter', payload);
        }
    },
    getters: {
        contact: ({name, phone, email, end}) => ({name, phone, email, end}),
        contacts: ({contacts}) => contacts,
        filteredContent: ({filteredContent}) => filteredContent
    }
}