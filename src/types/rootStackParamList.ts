import { ConsultationType } from "./data";

export type RootStackParamList = {
  Home: undefined;
  Consultation: undefined;
  Detail: { data: ConsultationType };
};