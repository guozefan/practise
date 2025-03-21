interface FormItemProps {
  id?: number | string;
  title: string;
  type: string;
  url: string;
  desc: string;
  logo: string;
}
interface FormProps {
  formInline: FormItemProps;
  visible: boolean;
  type_dict: any[];
  getList: () => void;
}

export type { FormItemProps, FormProps };
