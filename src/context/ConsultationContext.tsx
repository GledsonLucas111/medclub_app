import { ConsultationType } from '@/types/data';
import React, { createContext, useState, useContext } from 'react';

type ConsultationContextType = {
  consultation: ConsultationType[];
  addConsultation: (novaConsulta: ConsultationType) => void;
  deleteConsultation: (id: number) => void;
  getConsultationById: (id: number) => ConsultationType | undefined;
};

const ConsultationContext = createContext<ConsultationContextType>({
  consultation: [],
  addConsultation: () => {},
  deleteConsultation: () => {},
  getConsultationById: () => undefined,
});

export const ConsultationProvider: React.FC<React.PropsWithChildren<object>> = ({ children }) => {
  const [consultation, setConsultation] = useState<ConsultationType[]>([]);

  const addConsultation = (novaConsulta: ConsultationType) => {
    setConsultation([...consultation, { ...novaConsulta, id: Date.now() }]);
  };

  const deleteConsultation = (id: number) => {
    setConsultation(consultation.filter(c => c.id !== id));
  };

  const getConsultationById = (id: number) => consultation.find(c => c.id === id);

  return (
    <ConsultationContext.Provider value={{ consultation, addConsultation, deleteConsultation, getConsultationById }}>
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => useContext(ConsultationContext);
