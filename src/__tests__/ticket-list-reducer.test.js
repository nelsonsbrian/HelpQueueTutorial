import ticketListReducer from './../../src/reducers/ticket-List-Reducer';


describe('ticketListReducer', () => {

  let action;
  const sampleTicketData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Jest is bbeing a diva and won\'t work with Webpack!',
    timeOpen: 1500000000000,
    id: 0
  }

    test('Should return default state if no action type is recognized', () => {
      expect(ticketListReducer({}, { type: null})).toEqual({});
    });

    test('Should sucessfully add new ticket data to masterTicketist', () => {
      const { names, location, issue, timeOpen, id } = sampleTicketData;
      action = {
        type: 'ADD_TICKET',
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      };
      expect(ticketListReducer({}, action)).toEqual({
        [id]: {
          names: names,
          location: location,
          issue: issue,
          timeOpen: timeOpen,
          id: id
        }
      });
    });
});