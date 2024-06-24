export interface IComponent {
  value: string | string[];
  type: IComponentType;
  subType?: string;
}

export interface ITags {
  value: string;
  description: string;
}

export interface IComponentType {
  name: string;
  tag: string;
  childTag?: string;
  tagList: ITags[];
}
