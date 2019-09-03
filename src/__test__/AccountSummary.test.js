import React from 'react';
import {shallow,mount} from 'enzyme';
import AccountSummary from '../components/AccountSummary/AccountSummary';

describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = mount(<AccountSummary/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });
    if('should render table element',()=>{
      expect(wrapper.find('table')).toHaveLength(1);
    });
    it('should render button element',()=>{
        expect(wrapper.find('#btn5')).toHaveLength(0);
    });
    
    it('should render button element',()=>{
        expect(wrapper.find('#btn6')).toHaveLength(1);
    });
     
  
    it('should render h1 tag',()=>{
        expect(wrapper.find('h4')).toHaveLength(1);
    })

   
      describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<AccountSummary/>);
          const spy = jest.spyOn(comp.instance(), 'handleTransactions');
          comp.instance().forceUpdate();
          comp.find('#btn5').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      
      describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<AccountSummary/>);
          const spy = jest.spyOn(comp.instance(), 'handleLogout');
          comp.instance().forceUpdate();
          comp.find('#btn6').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('when account summary is ',()=>{
        const accountDetails=[
          {
            accountNumber:123456677,
            accountType:"current Account",
            balance:100000,
            creationDate:12/1/2019
          },
          {
            accountNumber:123456677,
            accountType:"current Account",
            balance:100000,
            creationDate:12/1/2019
          },
          {
            accountNumber:123456677,
            accountType:"current Account",
            balance:100000,
            creationDate:12/1/2019
          }
        ]
        beforeEach(()=>{
          wrapper=shallow(<AccountSummary accountDetails={accountDetails} />)
        });
        it('should renderlist of accounts for a user',()=>{
          const table=wrapper.find('table');
          const tbody=table.find('tbody');
          const tr=tbody.find('tr');
          expect(tr.length=3).toBe(3);
        });
      });
      describe('when the account summary is empty',()=>{
       const emptyArray=[];
       beforeEach(()=>{
         wrapper=shallow(<AccountSummary accountDetails={emptyArray}/>);
       });
       it('should not display account row data',()=>{
         const table=wrapper.find('table');
         const tbody=table.find('tbody');
         const tr= tbody.find('tr');
         expect(tr.length).toBe(0)
       });

      });


  
});