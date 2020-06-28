import axios from "axios";

export function fetchCompletables() {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_COMPLETABLES_REQUEST" });
    return axios
      .get("/api/v1/completables.json")
      .then((response) => response.data)
      .then((completables) =>
        dispatch({ type: "ADD_COMPLETABLES", completables })
      );
  };
}
