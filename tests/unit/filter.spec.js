import Contacts from '../../src/store/contacts'

describe('Contacts Store', () => {
  it('filter some payload', () => {
    const state = {
      contacts: [
        {
          name: {first: 'Teste'}
        }
      ]
    }
    Contacts.mutations.setSearchFilter(state, 'Teste')
    expect(state.filteredContent.length).toBe(0)
  })
})
