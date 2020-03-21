import axios from 'axios';

export default {
    async getRamdomUser() {
        const result = await axios.get('https://randomuser.me/api/?inc=location,name,phone,email,picture');
        return result;
    },
    async getRandomUsers() {
        const result = await axios.get('https://randomuser.me/api/?results=25&nat=br&inc=location,name,phone,email,picture')
        return result;
    }
}