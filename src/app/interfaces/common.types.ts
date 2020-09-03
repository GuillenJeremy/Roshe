export interface NavBarItem {
  label: string;
  iconClass: string;
  link: string;
}

interface CarouselImageConfiguration {
  width: number;
  height: number;
}

export interface CarouselConfig {
  carouselHeight: number;
  imagesConfiguration:  CarouselImageConfiguration
}
