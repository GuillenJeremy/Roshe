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

export interface PostInfo {
  userAvatar: string;
  userName: string;
  postHashtags: string;
  postImage: string;
}

interface MenuItem {
  item: string;
  itemDescription?: string;
  hasItemDesription: boolean;
}

export interface SettingMenuItem {
  group: string;
  items: MenuItem[];
}
