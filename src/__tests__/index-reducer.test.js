import rootReducer from './../../src/reducers/index';
import ticketListReducer from '../reducers/ticket-list-reducer';
import selectedTicketReducer from '../reducers/selected-ticket-reducer';
import {createStore}from 'redux';

let store =createStore(rootReducer);

describe("rootReducer", () => {

  test('Shouldreturn defaultstate if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTicketList: {},
      selectedTicket: {}
    });
  });

  test('Should contain ticketLIstReducer logic', () => {
    expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, { type: null }));
  });

  test('Should contain selecteTicketReducer logic', () => {
    expect(store.getState().selectedTicket).toEqual(selectedTicketReducer(undefined, { type: null }));
  });
});