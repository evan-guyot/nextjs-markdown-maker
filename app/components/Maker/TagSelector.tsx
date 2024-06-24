import { IComponentType } from "@/app/lib/interfaces/maker";
import { Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ChangeEventHandler } from "react";

export const TagSelector = ({
  children,
  tag,
  type,
  onTagChange,
}: Readonly<{
  children: React.ReactNode;
  tag: string;
  type: IComponentType;
  onTagChange: ChangeEventHandler<HTMLSelectElement> | undefined;
}>) => {
  return (
    <>
      <div className="w-full max-w-md my-4">
        <div className="relative">
          <Select
            onChange={onTagChange}
            value={tag}
            className="focus:outline-none mt-3 block w-full appearance-none rounded-md border-none bg-black/5 dark:bg-white/5 py-1.5 px-3 text-sm/6 text-black *:text-black hover:*:bg-white dark:text-white dark:*:text-white dark:hover:*:bg-black"
          >
            {type.tagList.map((tag) => (
              <option
                key={tag.value}
                value={tag.value}
                className="bg-white dark:bg-black dark:text-gray-100"
              >
                {tag.description}
              </option>
            ))}
          </Select>
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </div>
      </div>
      {children}
    </>
  );
};
