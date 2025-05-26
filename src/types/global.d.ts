export {};

declare global {
  interface QuizOption {
    value: string;
    text: string;
    image?: StaticImageData;
    icon?: string
  }

  interface Question {
    question: string;
    description?: string
    options?: QuizOption[];
  }

  interface Plan {
    id: string
    name: string
    description: string
    price: nmumber
    price_id: string
    interval: string
  }
}
