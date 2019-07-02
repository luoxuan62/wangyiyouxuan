
const initState = {}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  return newState;
}