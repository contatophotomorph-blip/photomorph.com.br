export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}