export interface FormField {
  type: string;
  control: string;
  placeholder?: string;
  label?: string;
  name?: string;
  interface?: string;
  subtitle?: string;
  options?: {
    label: string;
    value: string;
  }[];
}
