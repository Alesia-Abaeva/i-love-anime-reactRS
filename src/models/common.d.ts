interface LocalStorageKeys {
  INPUT_VALUE: string;
}

interface MenuItem {
  title: string;
  url: string;
  cName: string;
}

interface InputProps {
  onChange: (value: string) => void;
  validate?: boolean;
}

interface InputState {
  value: string | boolean | null;
}
