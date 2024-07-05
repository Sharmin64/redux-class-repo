/* eslint-disable @typescript-eslint/no-explicit-any */
const Logger = (state: any) => (next: any) => (action: any) => {
  console.log("Current state =>", state.getState());
  console.log("Action =>", action);
  next(action);
  console.log("Next state =>", state.getState());
};

export default Logger;

// ?middleware create is optional .......eta sobsomoy lagbe na ...proyojon onusare banate hobe
