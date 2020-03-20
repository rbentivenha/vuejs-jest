import contacts from './contacts.js';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        contacts
    }
})