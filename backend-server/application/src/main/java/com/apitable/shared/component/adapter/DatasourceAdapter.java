/*
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

package com.apitable.shared.component.adapter;

import com.apitable.workspace.enums.NodeType;
import java.util.List;

/**
 * datasource adapter.
 */
public interface DatasourceAdapter {

    /**
     * get recently visit node ids.
     *
     * @param memberId member id
     * @param nodeType node type
     * @return recently visit node ids
     */
    List<String> getRecentlyVisitNodeIds(Long memberId, NodeType nodeType);

    /**
     * save or update node visit record.
     *
     * @param spaceId  space id
     * @param memberId member id
     * @param nodeId   node id
     * @param nodeType node type
     */
    void saveOrUpdateNodeVisitRecord(String spaceId, Long memberId, String nodeId,
                                     NodeType nodeType);
}
