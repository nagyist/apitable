/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const AutosaveOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M3.4529 5.91713C4.24393 4.19362 5.98362 3 8.00001 3C10.3284 3 12.2874 4.59251 12.8425 6.74926C12.9555 7.18807 13.3494 7.49611 13.8025 7.49996C14.2556 7.50382 14.6546 7.20253 14.775 6.7657L15.4641 4.2657C15.6108 3.73327 15.2981 3.18269 14.7657 3.03595C14.2378 2.89045 13.6921 3.19656 13.5398 3.7207C12.2598 2.06583 10.255 1 8.00001 1C5.1734 1 2.74019 2.67532 1.6352 5.08287C1.40483 5.58481 1.62498 6.17847 2.12692 6.40885C2.62886 6.63922 3.22252 6.41907 3.4529 5.91713ZM3.15747 9.25074C3.04453 8.81193 2.65064 8.50389 2.19754 8.50004C1.74444 8.49618 1.34537 8.79747 1.22498 9.2343L0.535954 11.7343C0.389209 12.2667 0.701872 12.8173 1.2343 12.9641C1.76219 13.1095 2.30791 12.8034 2.46021 12.2793C3.74018 13.9342 5.74502 15 8.00001 15C10.8266 15 13.2598 13.3247 14.3648 10.9171C14.5952 10.4152 14.375 9.82153 13.8731 9.59115C13.3712 9.36078 12.7775 9.58093 12.5471 10.0829C11.7561 11.8064 10.0164 13 8.00001 13C5.67158 13 3.71258 11.4075 3.15747 9.25074ZM5.20751 10.7132L5.20209 10.7073C5.06456 10.5583 5.00001 10.3738 5.00001 10.18C5.00001 10.0617 5.03493 9.95219 5.07078 9.86617L5.07168 9.864L7.11443 5.04153C7.18048 4.89291 7.27701 4.76148 7.40754 4.65854C7.5649 4.53319 7.75078 4.47601 7.94401 4.47601H8.02401C8.21247 4.47601 8.39747 4.53068 8.55226 4.65817C8.68594 4.75935 8.78624 4.89014 8.85353 5.04156L8.85638 5.04797L10.8972 9.86616C10.9331 9.95219 10.968 10.0617 10.968 10.18C10.968 10.3809 10.8958 10.567 10.7524 10.7133C10.6031 10.8715 10.4077 10.94 10.208 10.94C10.0631 10.94 9.92413 10.9028 9.79846 10.8295L9.78104 10.8194L9.76474 10.8075C9.64788 10.7225 9.55989 10.6116 9.50082 10.4836L9.49767 10.4768L9.07734 9.46801H6.89068L6.47035 10.4768L6.46719 10.4836C6.40401 10.6205 6.30686 10.7335 6.18189 10.8168L6.17481 10.8216C6.04719 10.9028 5.90489 10.94 5.76001 10.94C5.55753 10.94 5.36448 10.8702 5.21317 10.7189L5.20751 10.7132ZM8.4646 8.004L7.98389 6.84674L7.50318 8.004H8.4646Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'autosave_outlined',
  defaultColors: ['#C4C4C4'],
  colorful: false,
  allPathData: ['M3.4529 5.91713C4.24393 4.19362 5.98362 3 8.00001 3C10.3284 3 12.2874 4.59251 12.8425 6.74926C12.9555 7.18807 13.3494 7.49611 13.8025 7.49996C14.2556 7.50382 14.6546 7.20253 14.775 6.7657L15.4641 4.2657C15.6108 3.73327 15.2981 3.18269 14.7657 3.03595C14.2378 2.89045 13.6921 3.19656 13.5398 3.7207C12.2598 2.06583 10.255 1 8.00001 1C5.1734 1 2.74019 2.67532 1.6352 5.08287C1.40483 5.58481 1.62498 6.17847 2.12692 6.40885C2.62886 6.63922 3.22252 6.41907 3.4529 5.91713ZM3.15747 9.25074C3.04453 8.81193 2.65064 8.50389 2.19754 8.50004C1.74444 8.49618 1.34537 8.79747 1.22498 9.2343L0.535954 11.7343C0.389209 12.2667 0.701872 12.8173 1.2343 12.9641C1.76219 13.1095 2.30791 12.8034 2.46021 12.2793C3.74018 13.9342 5.74502 15 8.00001 15C10.8266 15 13.2598 13.3247 14.3648 10.9171C14.5952 10.4152 14.375 9.82153 13.8731 9.59115C13.3712 9.36078 12.7775 9.58093 12.5471 10.0829C11.7561 11.8064 10.0164 13 8.00001 13C5.67158 13 3.71258 11.4075 3.15747 9.25074ZM5.20751 10.7132L5.20209 10.7073C5.06456 10.5583 5.00001 10.3738 5.00001 10.18C5.00001 10.0617 5.03493 9.95219 5.07078 9.86617L5.07168 9.864L7.11443 5.04153C7.18048 4.89291 7.27701 4.76148 7.40754 4.65854C7.5649 4.53319 7.75078 4.47601 7.94401 4.47601H8.02401C8.21247 4.47601 8.39747 4.53068 8.55226 4.65817C8.68594 4.75935 8.78624 4.89014 8.85353 5.04156L8.85638 5.04797L10.8972 9.86616C10.9331 9.95219 10.968 10.0617 10.968 10.18C10.968 10.3809 10.8958 10.567 10.7524 10.7133C10.6031 10.8715 10.4077 10.94 10.208 10.94C10.0631 10.94 9.92413 10.9028 9.79846 10.8295L9.78104 10.8194L9.76474 10.8075C9.64788 10.7225 9.55989 10.6116 9.50082 10.4836L9.49767 10.4768L9.07734 9.46801H6.89068L6.47035 10.4768L6.46719 10.4836C6.40401 10.6205 6.30686 10.7335 6.18189 10.8168L6.17481 10.8216C6.04719 10.9028 5.90489 10.94 5.76001 10.94C5.55753 10.94 5.36448 10.8702 5.21317 10.7189L5.20751 10.7132ZM8.4646 8.004L7.98389 6.84674L7.50318 8.004H8.4646Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});