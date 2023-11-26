import axios from "axios";
import { useDispatch } from "react-redux";

export const NOT_EKLE = "NOT_EKLE";
export const NOT_SIL = "NOT_SIL";
export const LOCAL_NOT = "LOCAL_NOT";

export function notlocal(notlar) {
  return { type: LOCAL_NOT, payload: notlar };
}
export function notEkle(not) {
  return { type: NOT_EKLE, payload: not };
}

export function notSil(notId) {
  return { type: NOT_SIL, payload: notId };
}

export const notEkleAPI = (yeniNot) => (dispatch) => {
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      const exist = localStorage.getItem("notes")
        ? JSON.parse(localStorage.getItem("notes"))
        : [];
      console.log("existing data", exist);
      exist.push(yeniNot);
      if (res.status === 200) {
        localStorage.setItem("notes", JSON.stringify(exist));
      }
    })
    .catch((error) => console.log(error));
};

export const notSilAPI = (id) => (dispatch) => {
  console.log(id);
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      const exist = JSON.parse(localStorage.getItem("notes"));
      console.log("existing data", exist);
      const newArr = exist.filter((note) => note.id != id);

      console.log("silme", res.data);
      if (res.status === 200) {
        localStorage.setItem("notes", JSON.stringify(newArr));
      }
    })
    .catch((error) => console.log(error));
};
