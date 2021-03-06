export const SIGNIN_REQUEST = "SIGNIN_REQUEST";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";
export const SIGNIN_RESET = "SIGNIN_RESET";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const SIGNUP_RESET = "SIGNUP_RESET";

export const SIGNOUT_REQUEST = "SIGNOUT_REQUEST";

export const FETCH_LESSONS_REQUEST = "FETCH_LESSONS_REQUEST";
export const FETCH_LESSONS_SUCCESS = "FETCH_LESSONS_SUCCESS";
export const FETCH_LESSONS_FAILURE = "FETCH_LESSONS_FAILURE";
export const FETCH_LESSONS_RESET = "FETCH_LESSONS_RESET";

export const FETCH_SELECTED_LESSONS_REQUEST = "FETCH_SELECTED_LESSONS_REQUEST";
export const FETCH_SELECTED_LESSONS_SUCCESS = "FETCH_SELECTED_LESSONS_SUCCESS";
export const FETCH_SELECTED_LESSONS_FAILURE = "FETCH_SELECTED_LESSONS_FAILURE";
export const FETCH_SELECTED_LESSONS_RESET = "FETCH_SELECTED_LESSONS_RESET";

export const FETCH_GUROBI_LESSONS_REQUEST = "FETCH_GUROBI_LESSONS_REQUEST";
export const FETCH_GUROBI_LESSONS_SUCCESS = "FETCH_GUROBI_LESSONS_SUCCESS";
export const FETCH_GUROBI_LESSONS_FAILURE = "FETCH_GUROBI_LESSONS_FAILURE";
export const FETCH_GUROBI_LESSONS_RESET = "FETCH_GUROBI_LESSONS_RESET";

export const POST_LESSONS_REQUEST = "POST_LESSONS_REQUEST";
export const POST_LESSONS_SUCCESS = "POST_LESSONS_SUCCESS";
export const POST_LESSONS_FAILURE = "POST_LESSONS_FAILURE";
export const POST_LESSONS_RESET = "POST_LESSONS_RESET";

export const signinRequest = (email, password) => ({
  type: SIGNIN_REQUEST,
  payload: {
    email,
    password
  }
});

export const signinSuccess = res => ({
  type: SIGNIN_SUCCESS,
  payload: res
});

export const signinFailure = errorData => ({
  type: SIGNIN_FAILURE,
  payload: errorData
});

export const signinReset = () => ({
  type: SIGNIN_RESET
});

export const signupRequest = (name, phone, email, password) => ({
  type: SIGNUP_REQUEST,
  payload: {
    email,
    password,
    name,
    phone
  }
});

export const signupSuccess = res => ({
  type: SIGNUP_SUCCESS,
  payload: res
});

export const signupFailure = errorData => ({
  type: SIGNUP_FAILURE,
  payload: errorData
});

export const signupReset = () => ({
  type: SIGNUP_RESET
});

export const signoutRequest = () => ({
  type: SIGNOUT_REQUEST
});

export const fetchLessonsSuccess = res => ({
  type: FETCH_LESSONS_SUCCESS,
  payload: res
});

export const fetchLessonsFailure = errorData => ({
  type: FETCH_LESSONS_FAILURE,
  payload: errorData
});

export const fetchLessonsReset = () => ({
  type: FETCH_LESSONS_RESET
});

export const fetchLessons = () => ({
  type: FETCH_LESSONS_REQUEST
});


export const fetchSelectedLessonsSuccess = res => ({
  type: FETCH_SELECTED_LESSONS_SUCCESS,
  payload: res
});

export const fetchSelectedLessonsFailure = errorData => ({
  type: FETCH_SELECTED_LESSONS_FAILURE,
  payload: errorData
});

export const fetchSelectedLessonsReset = () => ({
  type: FETCH_SELECTED_LESSONS_RESET
});

export const fetchSelectedLessons = () => ({
  type: FETCH_SELECTED_LESSONS_REQUEST
});



export const fetchGurobiLessonsSuccess = res => ({
  type: FETCH_GUROBI_LESSONS_SUCCESS,
  payload: res
  
}
);


export const fetchGurobiLessonsFailure = errorData => ({
  type: FETCH_GUROBI_LESSONS_FAILURE,
  payload: errorData
});
export const fetchGurobiLessons = () => ({
  type: FETCH_GUROBI_LESSONS_REQUEST
});

export const fetchGurobiLessonsReset = () => ({
  type: FETCH_GUROBI_LESSONS_RESET
});


export const postLessonsSuccess = res => ({
  type: POST_LESSONS_SUCCESS,
  payload: res
});

export const postLessonsFailure = errorData => ({
  type: POST_LESSONS_FAILURE,
  payload: errorData
});

export const postLessonsReset = () => ({
  type: POST_LESSONS_RESET
});

export const postLessonsRequest = (selectedLessons  ) => ({
  payload: {
    selectedLessons    
  },
  type: POST_LESSONS_REQUEST
});
