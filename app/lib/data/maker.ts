import { IComponentType } from "@/app/lib/interfaces/maker";

export const types: IComponentType[] = [
  {
    name: "Paragraph",
    tag: "p",
    tagList: [{ value: "p", description: "Simple paragraph" }],
  },
  {
    name: "Title",
    tag: "h1",
    tagList: [
      { value: "h1", description: "1st level title" },
      { value: "h2", description: "2nd level title" },
      { value: "h3", description: "3rd level title" },
      { value: "h4", description: "4th level title" },
      { value: "h5", description: "5th level title" },
      { value: "h6", description: "6th level title" },
    ],
  },
  {
    name: "Code",
    tag: "pre",
    tagList: [{ value: "pre", description: "Code" }],
  },
  {
    name: "Quote",
    tag: "blockquote",
    tagList: [{ value: "blockquote", description: "Quote" }],
  },
  {
    name: "List",
    tag: "ol",
    childTag: "li",
    tagList: [
      { value: "ol", description: "Organised list" },
      { value: "ul", description: "Unordered list" },
    ],
  },
];
