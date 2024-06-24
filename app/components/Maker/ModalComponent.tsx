"use client";

import { IComponentType } from "@/app/lib/interfaces/maker";
import { ChangeEvent, useState } from "react";
import { TagSelector } from "./TagSelector";
import { Button } from "@headlessui/react";

const ModalComponent = ({
  type,
  onChange,
}: {
  type: IComponentType;
  onChange?: (value: string | string[], type: IComponentType) => void;
}) => {
  const [stringContent, setStringContent] = useState<string>("");
  const [listContent, setListContent] = useState<string[]>([""]);
  const [tag, setTag] = useState<string>(type.tag);

  const handleChangeContent = (
    event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>,
  ) => {
    setStringContent(event.target.value);
    onChange && onChange(event.target.value, { ...type, tag });
  };

  const handleChangeListContent = (
    event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newListContent = listContent.map((c, i) =>
      i === index ? event.target.value : c,
    );
    setListContent(newListContent);
    onChange && onChange(newListContent, { ...type, tag });
  };

  const handleChangeTag = (event: ChangeEvent<HTMLSelectElement>) => {
    const newTag = event.target.value;
    setTag(newTag);

    if (type.name === "List")
      onChange && onChange(stringContent, { ...type, tag: newTag });
    else onChange && onChange(listContent, { ...type, tag: newTag });
  };

  const handleAddListElement = () => {
    setListContent([...listContent, ""]);
  };

  switch (type.name) {
    case "List":
      return (
        <TagSelector tag={tag} type={type} onTagChange={handleChangeTag}>
          <div className="flex flex-col gap-2 overflow-y-auto max-h-60">
            {listContent.map((content, index) => (
              <div className="flex" key={index}>
                <span className="p-2">
                  {tag === "ol" ? `${index + 1}. ` : "•"}
                </span>
                <input
                  type="text"
                  value={content}
                  onChange={(e) => handleChangeListContent(e, index)}
                  className="w-full focus:outline-none p-2 rounded-md bg-black/5 dark:bg-white/5 resize-none"
                  placeholder={`Enter ${type.name} element`}
                />
              </div>
            ))}
            <Button
              className="rounded-md bg-black/5 dark:bg-white/5 py-1.5 px-3 text-sm/6 font-semibold text-black dark:text-white focus:outline-none hover:bg-white/10 dark:hover:bg-white/10"
              onClick={handleAddListElement}
            >
              +
            </Button>
          </div>
        </TagSelector>
      );
    case "Title":
      return (
        <TagSelector tag={tag} type={type} onTagChange={handleChangeTag}>
          <input
            type="text"
            value={stringContent}
            onChange={handleChangeContent}
            className="w-full focus:outline-none p-2 rounded-md bg-black/5 dark:bg-white/5 resize-none"
            placeholder={`Enter ${type.name}`}
          />
        </TagSelector>
      );
    default:
      return (
        <textarea
          value={stringContent}
          onChange={handleChangeContent}
          className="w-full focus:outline-none p-2 rounded-md bg-black/5 dark:bg-white/5 resize-none"
          placeholder={`Enter ${type.name}`}
          rows={10}
        />
      );
  }
};

export default ModalComponent;
