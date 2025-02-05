interface FormItemProps {
  id?: number;
  name: string;
  type: string | number;
  desc: string;
  logo: string;
}
interface FormProps {
  formInline: FormItemProps;
  visible: boolean;
}

export type { FormItemProps, FormProps };
