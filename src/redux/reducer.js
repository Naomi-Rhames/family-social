const initialEvent = {
    image_url: "",
    description: "",
    setdate: null,
    id: null,
    comments: []
};

const iniatialUser = {
    image_url: "",
    username: "",
    email:  "",
    bio: "",
    id: null
}

const initialState = {
    events: [],
    setEvents: initialEvent,
    user: iniatialUser
}

export function reducer(state=initialState, action){
    console.log(action)
    switch(action){
      case "SET_USER":
          return{...state, user: action.payload}
        
    default:
        return{ ...state }
    }
}