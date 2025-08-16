export interface User {
  id: string;
  name: string;
  email: string;
  role: 'applicant' | 'mediator' | 'admin';
  verified: boolean;
  createdAt: Date;
  avatar?: string;
}

export interface Case {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'pending' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
  applicantId: string;
  mediatorId?: string;
  createdAt: Date;
  scheduledDate?: Date;
  documents: Document[];
  amount?: number;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  uploadedAt: Date;
}

export interface Mediator {
  id: string;
  name: string;
  email: string;
  specializations: string[];
  rating: number;
  experience: number;
  availability: boolean;
  cases: number;
  avatar?: string;
}

export interface Payment {
  id: string;
  caseId: string;
  amount: number;
  status: 'pending' | 'paid' | 'failed';
  paymentDate?: Date;
  invoiceUrl?: string;
}

export interface Language {
  code: 'id' | 'en';
  name: string;
  flag: string;
}