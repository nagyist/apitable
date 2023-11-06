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

import { JSONObject } from '../models/JSONObject';
import { HttpFile } from '../http/http';

/**
* Integral Revenue&Expense Record View
*/
export class IntegralRecordVO {
    /**
    * Action ID
    */
    'action'?: string;
    /**
    * Change Type (0: Revenue, 1: Expense)
    */
    'alterType'?: number;
    /**
    * Change value (unit: minutes)
    */
    'alterValue'?: string;
    'params'?: JSONObject;
    /**
    * Change time(millisecond)
    */
    'createdAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "alterType",
            "baseName": "alterType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "alterValue",
            "baseName": "alterValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "JSONObject",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return IntegralRecordVO.attributeTypeMap;
    }

    public constructor() {
    }
}

