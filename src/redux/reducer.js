function rootReducer(
  state = {
    isLoggedIn: false,
    videoUrl:
      "https://api.allorigins.win/get?" +
      encodeURIComponent(
        "https://player.vimeo.com/play/1101928473?s=290766793_1632466013_4fd383f16e2608585ba5da484524eafc&sid=d2c5b853b1d77cb61d1266a41f420b33e2e724701632455213&oauth2_token_id=&download=1"
      ),
  },
  action
) {
  switch (action.type) {
    case "LOGIN":
      console.log("setting logged", action);
      return { ...state, isLoggedIn: action.isLoggedIn };
    case "VIDEO_URL":
      return {
        ...state,
        videoUrl: action.videoUrl
      };
    default:
      return state;
  }
}

export default rootReducer;
