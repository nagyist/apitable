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

import * as React from 'react';
import { Selectors } from '@apitable/core';
import { OPERATE_WIDTH } from '../field_setting';
import styles from './styles.module.less';

import {useAppSelector} from "pc/store/react-redux";

interface IAutoLayoutProps {
  boxWidth: number;
  datasheetId?: string;
}

function showLeftOrRight(positionX: number, boxWidth: number) {
  const windowWidth = document.body.clientWidth;
  if (positionX + OPERATE_WIDTH + boxWidth > windowWidth) {
    return {
      left: -boxWidth - 20,
    };
  }
  return {
    right: -boxWidth - 20,
  };
}

export const AutoLayout: React.FC<React.PropsWithChildren<IAutoLayoutProps>> = (props) => {
  const { fieldRectLeft } = useAppSelector((state) => Selectors.gridViewActiveFieldState(state, props.datasheetId));
  return (
    <div className={styles.autoLayout} style={showLeftOrRight(fieldRectLeft, props.boxWidth)}>
      {props.children}
    </div>
  );
};
