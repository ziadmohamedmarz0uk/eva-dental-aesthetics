export interface ServiceItem {
  id: string;
  category: "dental" | "aesthetic";
  title: string;
  enTitle?: string;
  description: string;
  detailedOverview?: string;
  clinicalSteps?: string[];
  suitableFor?: string[];
  benefits?: string[];
  warranty?: string;
  priceNote: string;
  installmentNote?: string;
  sessionDuration: string;
  isPopular?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  qualifications: string[];
  branch: string;
  imageUrl: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: "dental" | "aesthetic";
  description: string;
  details: string[];
  duration: string;
  beforeImage: string;
  afterImage: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  area: string;
  workingHours: string;
  phone: string;
  landmark: string;
  mapQuery: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  branch: string;
  category: string;
  service: string;
  preferredTime: "morning" | "evening";
  notes?: string;
}
