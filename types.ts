export interface ThemeConfig {
  primary: string;
  secondary: string;
  text_dark: string;
  bg_light: string;
}

export interface SeoConfig {
  title: string;
  desc: string;
}

export interface Config {
  theme: ThemeConfig;
  seo: SeoConfig;
}

export interface Media {
  type?: string;
  src: string;
  placeholder_src: string;
  alt?: string;
  video_src?: string; 
}

// Section Types

export interface HeroBannerData {
  headline: string;
  subheadline: string;
  cta_primary: string;
  cta_secondary: string;
  media: Media;
}

export interface GridCard {
  icon: string;
  title: string;
  desc: string;
}

export interface Grid3ColData {
  headline: string;
  cards: GridCard[];
}

export interface ServiceItem {
  title: string;
  price: string;
  features: string[];
  media: Media;
}

export interface ServiceListData {
  headline: string;
  subheadline?: string;
  items: ServiceItem[];
}

export interface ImageInfo {
  src: string;
  placeholder_src: string;
  label: string;
}

export interface BeforeAfterSliderData {
  headline: string;
  description: string;
  before_image: ImageInfo;
  after_image: ImageInfo;
}

export interface ReviewItem {
  name: string;
  info: string;
  text: string;
  avatar_placeholder: string;
}

export interface TestimonialCardsData {
  headline: string;
  reviews: ReviewItem[];
}

export interface OfferCtaData {
  headline: string;
  subheadline: string;
  button_text: string;
  phone: string;
  address: string;
  map_iframe_src?: string; 
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  image: string;
}

export interface ProcessData {
  headline: string;
  subheadline: string;
  steps: ProcessStep[];
}

export interface ContactSectionData {
  title: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
}

// Discriminated Union for Sections
export type SectionContent =
  | { id: string; type: 'hero_banner'; data: HeroBannerData }
  | { id: string; type: 'grid_3_col'; data: Grid3ColData }
  | { id: string; type: 'service_list'; data: ServiceListData }
  | { id: string; type: 'before_after_slider'; data: BeforeAfterSliderData }
  | { id: string; type: 'testimonial_cards'; data: TestimonialCardsData }
  | { id: string; type: 'countdown_offer'; data: OfferCtaData }
  | { id: string; type: 'process_steps'; data: ProcessData } // Added Process
  | { id: string; type: 'contact_form'; data: ContactSectionData };

export interface LandingPageData {
  config: Config;
  content: SectionContent[];
}