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

export const FeishuColorFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M5.75283 17.3691C4.1252 17.825 3 19.3089 3 20.9995C3 21.9994 3.39709 22.9583 4.10395 23.6653L14.0249 33.5889H27.2845L39.7336 21.1567C39.7029 20.9911 39.6867 20.8204 39.6867 20.6459C39.6867 19.1069 40.9347 17.8592 42.4736 17.8592C42.6493 17.8592 42.8213 17.8755 42.988 17.9066L58.2488 2.6665L5.75283 17.3691Z" fill={ colors[3] } fillRule="evenodd" clipRule="evenodd"/>
    <path d="M45.6005 57.2853C45.1493 58.9133 43.6802 60.0389 42.0063 60.0389C41.0165 60.0389 40.0671 59.6416 39.3671 58.9347L29.5181 48.9864V35.7232L41.7695 23.3431C41.9943 23.4016 42.2303 23.4328 42.4735 23.4328C44.0125 23.4328 45.2605 22.1851 45.2605 20.6461C45.2605 20.3927 45.2266 20.1471 45.1631 19.9138L60.2039 4.71484L45.6005 57.2853Z" fill={ colors[2] } fillRule="evenodd" clipRule="evenodd"/>
    <path d="M39.7373 21.1758L27.3101 33.6061H29.5202L40.505 22.6187C40.1186 22.2327 39.8447 21.7339 39.7373 21.1758Z" fill={ colors[1] } fillRule="evenodd" clipRule="evenodd"/>
    <path d="M40.5135 22.6274L29.5181 33.6257V35.8364L41.9655 23.3861C41.4047 23.283 40.9029 23.0121 40.5135 22.6274Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>
    <path d="M43.0138 17.912L58.266 2.67822L14.021 33.5892L27.3039 33.6025L39.7391 21.1827C39.7052 21.0092 39.6876 20.8299 39.6876 20.6465C39.6876 19.1075 40.9354 17.8598 42.4743 17.8598C42.6588 17.8598 42.8391 17.8777 43.0138 17.912Z" fill={ colors[1] } fillRule="evenodd" clipRule="evenodd"/>
    <path d="M45.1767 19.962L60.1743 4.76807L29.521 49.0857V35.8228L41.8258 23.3569C42.0338 23.4065 42.2511 23.4328 42.4746 23.4328C44.0135 23.4328 45.2613 22.1852 45.2613 20.6461C45.2613 20.4101 45.2319 20.1809 45.1767 19.962Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'feishu_color_filled',
  defaultColors: ['#006AFF', '#00CBB1', '#2893FF', '#42EFD8'],
  colorful: true,
  allPathData: ['M5.75283 17.3691C4.1252 17.825 3 19.3089 3 20.9995C3 21.9994 3.39709 22.9583 4.10395 23.6653L14.0249 33.5889H27.2845L39.7336 21.1567C39.7029 20.9911 39.6867 20.8204 39.6867 20.6459C39.6867 19.1069 40.9347 17.8592 42.4736 17.8592C42.6493 17.8592 42.8213 17.8755 42.988 17.9066L58.2488 2.6665L5.75283 17.3691Z', 'M45.6005 57.2853C45.1493 58.9133 43.6802 60.0389 42.0063 60.0389C41.0165 60.0389 40.0671 59.6416 39.3671 58.9347L29.5181 48.9864V35.7232L41.7695 23.3431C41.9943 23.4016 42.2303 23.4328 42.4735 23.4328C44.0125 23.4328 45.2605 22.1851 45.2605 20.6461C45.2605 20.3927 45.2266 20.1471 45.1631 19.9138L60.2039 4.71484L45.6005 57.2853Z', 'M39.7373 21.1758L27.3101 33.6061H29.5202L40.505 22.6187C40.1186 22.2327 39.8447 21.7339 39.7373 21.1758Z', 'M40.5135 22.6274L29.5181 33.6257V35.8364L41.9655 23.3861C41.4047 23.283 40.9029 23.0121 40.5135 22.6274Z', 'M43.0138 17.912L58.266 2.67822L14.021 33.5892L27.3039 33.6025L39.7391 21.1827C39.7052 21.0092 39.6876 20.8299 39.6876 20.6465C39.6876 19.1075 40.9354 17.8598 42.4743 17.8598C42.6588 17.8598 42.8391 17.8777 43.0138 17.912Z', 'M45.1767 19.962L60.1743 4.76807L29.521 49.0857V35.8228L41.8258 23.3569C42.0338 23.4065 42.2511 23.4328 42.4746 23.4328C44.0135 23.4328 45.2613 22.1852 45.2613 20.6461C45.2613 20.4101 45.2319 20.1809 45.1767 19.962Z'],
  width: '64',
  height: '64',
  viewBox: '0 0 64 64',
});
