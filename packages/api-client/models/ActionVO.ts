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

export class ActionVO {
    /**
    * Action id
    */
    'actionId'?: string;
    /**
    * Action type id
    */
    'actionTypeId'?: string;
    /**
    * Prev action id
    */
    'prevActionId'?: string;
    /**
    * Action input
    */
    'input'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "actionId",
            "baseName": "actionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "actionTypeId",
            "baseName": "actionTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "prevActionId",
            "baseName": "prevActionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "input",
            "baseName": "input",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ActionVO.attributeTypeMap;
    }

    public constructor() {
    }
}

