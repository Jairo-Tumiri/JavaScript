export const ATRIBUTOS = [
  {
    id: 0,
    name: "title",
    type: "text",
    placeholder: "Titulo",
    className: "form__input",
  },
  {
    id: 1,
    name: "subtitle",
    type: "text",
    placeholder: "Subtitulo",
    className: "form__input",
  },
  {
    id: 2,
    name: "urlimg",
    type: "text",
    placeholder:
      "url: https://i.pinimg.com/564x/0f/23/39/0f2339f9d813839b3aa687773bb0c1c4.jpg",
    className: "form__input",
  },
  {
    id: 3,
    name: "urlvideo",
    type: "text",
    placeholder:
      "url: https://www.youtube.com/watch?v=vMZqaesNsPo&ab_channel=Duki",
    className: "form__input",
  },
  {
    id: 4,
    name: "texto",
    type: "text",
    placeholder: "Texto",
    className: "textarea",
  },
];
export const DICCIONARY = [
  {
    type: "note",
    name: "Nota",
    atributos: [0, 1],
  },
  {
    type: "video",
    name: "Video",
    atributos: [0, 3],
  },
  {
    type: "img",
    name: "Imagen",
    atributos: [0, 2],
  },
];

export const ADDDICCIONARY = [
  {
    id: "img",
    name: "Imagen",
    type: "img",
  },
  {
    id: "video",
    name: "Video",
    type: "video",
  },
  {
    id: "note",
    name: "Nota",
    type: "note",
  },
];
