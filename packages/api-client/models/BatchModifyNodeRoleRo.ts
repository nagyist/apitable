/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Batch Modify Org Unit Role Request Parameters
*/
export class BatchModifyNodeRoleRo {
    /**
    * Node ID
    */
    'nodeId': string;
    /**
    * Org Unit ID Set
    */
    'unitIds': Array<number>;
    /**
    * Role
    */
    'role': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nodeId",
            "baseName": "nodeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "unitIds",
            "baseName": "unitIds",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchModifyNodeRoleRo.attributeTypeMap;
    }

    public constructor() {
    }
}

