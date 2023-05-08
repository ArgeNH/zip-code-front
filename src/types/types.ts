export interface ResponseZipCode {
  message: string;
  status: number;
  valid: boolean;
  zipcode: Zipcode[];
  code: code;
  detail?: string;
}

export interface Zipcode {
  _id: string;
  city: string;
  city_en: string;
  country_code: string;
  country_name: string;
  latitude: string;
  longitude: string;
  postal_code: string;
  province: string;
  province_code: string;
  state: string;
  state_code: string;
  state_en: string;
}

export interface code {
  countries: string[];
  data: Data;
  message: string;
  valid: boolean;
}

export interface Data {
  digits: number;
  letters: number;
  characters: number;
  pattern: string[];
}

export interface Flags {
  code: string;
  name: string;
}

export interface CustomAlertType {
  show: boolean;
  message: string;
  title: string;
  type: "success" | "failure" | "warning" | "info" | undefined;
}
