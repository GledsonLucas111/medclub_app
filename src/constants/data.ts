import { ConsultationType, Doctor } from '@/types/data';

export const consultationData: ConsultationType[] = [
  {
    id: 0,
    doctor: 'Dr. João Silva',
    specialty: 'Cardiologia',
    date: '2024-01-15',
    localization: 'Hospital São Lucas - Sala 201',
  },
  {
    id: 1,
    doctor: 'Dr. João Silva',
    specialty: 'Cardiologia',
    date: '2024-01-15',
    localization: 'Hospital São Lucas - Sala 201',
  },
  {
    id: 2,
    doctor: 'Dr. João Silva',
    specialty: 'Cardiologia',
    date: '2024-01-15',
    localization: 'Hospital São Lucas - Sala 201',
  },
];

export const doctors: Doctor[] = [
  {
    id: 0,
    name: 'Dr. João Silva',
    specialty: 'Cardiologia',
  },
  {
    id: 1,
    name: 'Dr. Maria Oliveira',
    specialty: 'Pediatria',
  },
  {
    id: 2,
    name: 'Dr. Carlos Pereira',
    specialty: 'Dermatologia',
  },
  {
    id: 3,
    name: 'Dr. Ana Souza',
    specialty: 'Oftalmologia',
  },
  {
    id: 4,
    name: 'Dr. Lucas Martins',
    specialty: 'Ortopedia',
  },
  {
    id: 5,
    name: 'Dr. Fernanda Lima',
    specialty: 'Ginecologia',
  },
];

export const localizationData = [
  {
    id: 0,
    address: 'Hospital São Lucas',
  },
  {
    id: 1,
    address: 'Medimagem',
  },
  {
    id: 2,
    address: 'Athena Saúde',
  },
  {
    id: 3,
    address: 'Hospital São Marcos',
  },
];
