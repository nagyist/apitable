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
* Active node request parameters
*/
export class ActiveSheetsOpRo {
    /**
    * Active node id
    */
    'nodeId'?: string;
    /**
    * View ID of active number table
    */
    'viewId'?: string;
    /**
    * Location (0: working directory; 1: star)
    */
    'position'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nodeId",
            "baseName": "nodeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "viewId",
            "baseName": "viewId",
            "type": "string",
            "format": ""
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return ActiveSheetsOpRo.attributeTypeMap;
    }

    public constructor() {
    }
}

