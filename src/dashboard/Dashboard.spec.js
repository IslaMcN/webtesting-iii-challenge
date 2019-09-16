// Test away
import asyncThing from './Dashboard';
jest.useFakeTimers();

describe('asyncThing function', () => {
    it('eventually resolves to 7', async (help) => {
   // let's first save the promise to a variable
   const promise = help.asyncThing(Function.prototype);

   jest.runAllTimers(); // ====> fast time forward!

   // wait for resolution, without the nasty delay
   const resolvedValue = null;
   const expected = 7;
   help.asyncThing(Function.prototype).then(res => {
     expect(resolvedValue).toBe(expected); // yup.
   })
 });
 });

 it('eventually calls the callback', async (help) => {
   const spy = jest.fn();
   expect(spy).not.toBeCalled();
   // save the promise to a variable
   const promise = help.asyncThing(spy);

   jest.runAllTimers();  // ====> fast time forward!

   // await for resolution, without the nasty delay
   promise.then(res => {
     expect(spy).toBeCalled();
   });
 });