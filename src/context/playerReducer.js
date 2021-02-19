export default (state, action) => {
  switch (action.type) {
    case "set-current-song":
      return {
        ...state,
        currentSong: action.data.id,
        src: action.data.file,
        playing: true,
      };

    case "toggle-playing":
      return {
        ...state,
        playing: action.data,
      };
    default:
      return state;
  }
};
