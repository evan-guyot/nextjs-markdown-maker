import styles from "./component-list.module.css";

import { IComponent } from "@/app/lib/interfaces/maker";

const ComponentList = ({ componentList }: { componentList: IComponent[] }) => {
  return (
    <>
      {componentList.map((component, index) => {
        const Tag = component.type.tag as keyof JSX.IntrinsicElements;

        return (
          <Tag key={index} className={styles[Tag]}>
            <div className="whitespace-pre-wrap">{component.value}</div>
          </Tag>
        );
      })}
    </>
  );
};

export default ComponentList;
