interface LocalStorageKeys {
  INPUT_VALUE: string;
}

interface MenuItem {
  title: string;
  url: string;
  cName: string;
}

interface InputProps {
  validate?: import('react-hook-form').FieldError;
  register?: import('react-hook-form').UseFormRegisterReturn;
}

interface InputState {
  value: string | boolean | null;
}
