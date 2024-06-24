export interface IComponent {
  value: string;
  type: IComponentType;
}

export interface ITags {
  value: string;
  description: string;
}

export interface IComponentType {
  name: string;
  tag: string;
  tagList: ITags[];
}
