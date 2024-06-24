import styles from "./component-list.module.css";

import { IComponent } from "@/app/lib/interfaces/maker";

const ComponentList = ({ componentList }: { componentList: IComponent[] }) => {
  return (
    <>
      {componentList.map((component, index) => {
        const Tag = component.type.tag as keyof JSX.IntrinsicElements;
        const ChildTag = component.type.childTag as keyof JSX.IntrinsicElements;
        if (Array.isArray(component.value)) {
          return (
            <Tag key={index}>
              {component.value.map((childComponent, index) => (
                <ChildTag
                  key={index}
                  className={
                    styles[Tag] +
                    "whitespace-pre-wrap text-black dark:text-white decoration-black dark:decoration-white border-black dark:border-white"
                  }
                >
                  {childComponent}
                </ChildTag>
              ))}
            </Tag>
          );
        } else {
          return (
            <Tag
              key={index}
              className={
                styles[Tag] +
                "whitespace-pre-wrap text-black dark:text-white decoration-black dark:decoration-white border-black dark:border-white"
              }
            >
              {component.value}
            </Tag>
          );
        }
      })}
    </>
  );
};

export default ComponentList;
