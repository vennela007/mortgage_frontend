import React from 'react';
import {shallow,mount} from 'enzyme';
import Transactions from '../components/AccountSummary/Transactions';

describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = mount(<Transactions/>);
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
          const comp = shallow(<Transactions/>);
          const spy = jest.spyOn(comp.instance(), 'handleBack');
          comp.instance().forceUpdate();
          comp.find('#btn7').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      
     
      describe('when account summary is ',()=>{
        const transactionDetails=[
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
          wrapper=shallow(<Transactions transactionDetails={transactionDetails} />)
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
         wrapper=shallow(<Transactions transactionDetails={emptyArray}/>);
       });
       it('should not display account row data',()=>{
         const table=wrapper.find('table');
         const tbody=table.find('tbody');
         const tr= tbody.find('tr');
         expect(tr.length).toBe(0)
       });

      });


  
});