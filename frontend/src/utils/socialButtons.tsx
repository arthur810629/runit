import type { ComponentType } from 'react';
import { GithubIcon } from '@mantinex/dev-icons';

import YandexLogo from '../assets/images/icons/yandexLogo.png';
// eslint-disable-next-line import/no-unresolved
import VkIcon from '../assets/images/icons/vk.svg?react';

type IconProps = { width?: number; height?: number };

type SocialButtonConfig = {
  key: string;
  icon: ComponentType<IconProps>;
  component: ComponentType<IconProps>;
  size?: number;
};

function YandexIcon({ width = 18, height = 18 }: IconProps) {
  return <img alt="Yandex" src={YandexLogo} style={{ width, height }} />;
}

export const SOCIAL_BUTTONS: SocialButtonConfig[] = [
  { key: 'vkBtn', icon: VkIcon, component: VkIcon },
  { key: 'yandexBtn', icon: YandexIcon, component: YandexIcon },
  { key: 'gitHubBtn', icon: GithubIcon, component: GithubIcon, size: 16 },
];
