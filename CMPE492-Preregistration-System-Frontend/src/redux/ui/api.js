import httpService from "../../httpService";
class api {
  doSignIn = (email, password) => {
    return httpService.fetch({
      path: "auth/login",
      method: "POST",
      body: {
        email,
        password
      },
      sendToken: false
    });
  };

  doSignUp = (first_name, last_name, phone_number, password, email) => {
    return httpService.fetch({
      path: "auth/register/",
      method: "POST",
      body: {
        first_name,
        last_name,
        phone_number,
        password,
        email
      },
      sendToken: false
    });
  };

  doFetchLessons = () => {
    return httpService.fetch({
      path: "course/listCourses",
      method: "GET",
      sendToken: false
    });
  };
  
  doFetchSelectedLessons = () => {
    return httpService.fetch({
      path: "course/selectedCourses",
      method: "GET",
      sendToken: false
    });
  };

  doFetchGurobiLessons = () => {
    return httpService.fetch({
      path: "course/takenCourses",
      method: "GET",
      sendToken: false
    });
  };
doPostLessons = (selectedLessons) => {
  return httpService.fetch({
    path: "course/addCourses",
    method: "POST",
    body: selectedLessons,
    sendToken: true
  });
};
}
export default new api();
