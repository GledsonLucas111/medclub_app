export type ConsultationType = {
  id: number;
  doctor: string;
  specialty: string;
  date: string | Date;
  hour: number;
  localization: string;
};

export type Doctor = {
  id: string | number;
  name: string;
  specialty: string;
};