import {
  collection,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../data/firebase";

export const actionEdit = async (ID, DATA) => {
  await updateDoc(doc(db, "todos", ID), { ...DATA });
};

export const actionDelete = async (ID) => {
  await deleteDoc(doc(db, "todos", ID));
};

export const actionAdd = async (DATA) => {
  const { title, subtitle, texto, urlimg, urlvideo } = DATA;
  if (
    title === undefined &&
    title === "" &&
    subtitle === undefined &&
    subtitle === "" &&
    texto === undefined &&
    texto === "" &&
    urlvideo === undefined &&
    urlvideo === "" &&
    urlimg === undefined &&
    urlimg === ""
  ) {
    return console.log("no se puede agregar");
  }
  await addDoc(collection(db, "todos"), {
    ...DATA,
  });
};

export const actionQuery = async (ID) => {
  const dataTodo = (await getDoc(doc(db, "todos", ID))).data();
  return { ...dataTodo, id: ID };
};
