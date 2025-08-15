export type ConsultationType = {
  id: number;
  doctor: string;
  specialty: string;
  date: string;
  localization: string;
};

export type Doctor = {
  id: string | number;
  name: string;
  specialty: string;
};