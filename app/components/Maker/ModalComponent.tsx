"use client";

import { IComponentType } from "@/app/lib/interfaces/maker";
import { ChangeEvent, useState } from "react";
import { TagSelector } from "./TagSelector";

const ModalComponent = ({
  type,
  onChange,
}: {
  type: IComponentType;
  onChange?: (value: string, type: IComponentType) => void;
}) => {
  const [stringContent, setStringContent] = useState<string>("");
  const [tag, setTag] = useState<string>(type.tag);

  const handleChangeContent = (
    event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setStringContent(event.target.value);
    onChange && onChange(event.target.value, { ...type, tag });
  };

  const handleChangeTag = (event: ChangeEvent<HTMLSelectElement>) => {
    const newTag = event.target.value;
    setTag(newTag);
    onChange && onChange(stringContent, { ...type, tag: newTag });
  };

  switch (type.name) {
    case "Title":
      return (
        <TagSelector tag={tag} type={type} onTagChange={handleChangeTag}>
          <textarea
            value={stringContent}
            onChange={handleChangeContent}
            className="w-full focus:outline-none p-2 rounded-md bg-black/5 dark:bg-white/5 resize-none"
            placeholder={`Enter ${type.name}`}
            rows={10}
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
