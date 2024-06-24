import styles from "./component-list.module.css";

import { IComponent } from "@/app/lib/interfaces/maker";

const ComponentList = ({ componentList }: { componentList: IComponent[] }) => {
  return (
    <div className="">
      {componentList.map((component, index) => {
        const Tag = component.type.tag as keyof JSX.IntrinsicElements;

        return (
          <Tag key={index} className={styles[Tag]}>
            <div className="whitespace-pre-wrap text-black dark:text-white decoration-black dark:decoration-white border-black dark:border-white">
              {component.value}
            </div>
          </Tag>
        );
      })}
    </div>
  );
};

export default ComponentList;
