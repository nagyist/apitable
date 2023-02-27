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

export const WebOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM5.26373 7.25H2.55071C2.82616 5.22986 4.19852 3.55874 6.04798 2.85646C5.98481 3.0157 5.92605 3.18143 5.87147 3.352C5.53564 4.40148 5.31861 5.76009 5.26373 7.25ZM5.26373 8.75H2.55071C2.82616 10.7701 4.19852 12.4413 6.04798 13.1435C5.98481 12.9843 5.92605 12.8186 5.87147 12.648C5.53564 11.5985 5.31861 10.2399 5.26373 8.75ZM9.95202 13.1435C10.0152 12.9843 10.0739 12.8186 10.1285 12.648C10.4644 11.5985 10.6814 10.2399 10.7363 8.75H13.4493C13.1738 10.7701 11.8015 12.4413 9.95202 13.1435ZM9.23518 8.75C9.18095 10.1118 8.98163 11.3104 8.6999 12.1908C8.53232 12.7145 8.34869 13.0839 8.18038 13.3063C8.09254 13.4224 8.0314 13.4711 8 13.4906C7.9686 13.4711 7.90746 13.4224 7.81962 13.3063C7.65131 13.0839 7.46768 12.7145 7.3001 12.1908C7.01837 11.3104 6.81905 10.1118 6.76482 8.75H9.23518ZM9.23518 7.25H6.76482C6.81905 5.88818 7.01837 4.68959 7.3001 3.80916C7.46768 3.28548 7.65131 2.91612 7.81962 2.69367C7.90746 2.57756 7.9686 2.52893 8 2.50944C8.0314 2.52893 8.09254 2.57756 8.18038 2.69367C8.34869 2.91612 8.53232 3.28548 8.6999 3.80916C8.98163 4.68959 9.18095 5.88818 9.23518 7.25ZM10.7363 7.25H13.4493C13.1738 5.22986 11.8015 3.55874 9.95203 2.85646C10.0152 3.0157 10.0739 3.18143 10.1285 3.352C10.4644 4.40148 10.6814 5.76009 10.7363 7.25Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'web_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM5.26373 7.25H2.55071C2.82616 5.22986 4.19852 3.55874 6.04798 2.85646C5.98481 3.0157 5.92605 3.18143 5.87147 3.352C5.53564 4.40148 5.31861 5.76009 5.26373 7.25ZM5.26373 8.75H2.55071C2.82616 10.7701 4.19852 12.4413 6.04798 13.1435C5.98481 12.9843 5.92605 12.8186 5.87147 12.648C5.53564 11.5985 5.31861 10.2399 5.26373 8.75ZM9.95202 13.1435C10.0152 12.9843 10.0739 12.8186 10.1285 12.648C10.4644 11.5985 10.6814 10.2399 10.7363 8.75H13.4493C13.1738 10.7701 11.8015 12.4413 9.95202 13.1435ZM9.23518 8.75C9.18095 10.1118 8.98163 11.3104 8.6999 12.1908C8.53232 12.7145 8.34869 13.0839 8.18038 13.3063C8.09254 13.4224 8.0314 13.4711 8 13.4906C7.9686 13.4711 7.90746 13.4224 7.81962 13.3063C7.65131 13.0839 7.46768 12.7145 7.3001 12.1908C7.01837 11.3104 6.81905 10.1118 6.76482 8.75H9.23518ZM9.23518 7.25H6.76482C6.81905 5.88818 7.01837 4.68959 7.3001 3.80916C7.46768 3.28548 7.65131 2.91612 7.81962 2.69367C7.90746 2.57756 7.9686 2.52893 8 2.50944C8.0314 2.52893 8.09254 2.57756 8.18038 2.69367C8.34869 2.91612 8.53232 3.28548 8.6999 3.80916C8.98163 4.68959 9.18095 5.88818 9.23518 7.25ZM10.7363 7.25H13.4493C13.1738 5.22986 11.8015 3.55874 9.95203 2.85646C10.0152 3.0157 10.0739 3.18143 10.1285 3.352C10.4644 4.40148 10.6814 5.76009 10.7363 7.25Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
