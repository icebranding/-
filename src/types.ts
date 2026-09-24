export interface ConsultationFormData {
  name: string;
  phone: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  location: string;
  symptoms: string;
  photos: File[];
  photosBase64?: string[];
}
