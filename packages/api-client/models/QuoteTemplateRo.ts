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
* Reference Template Request Parameters
*/
export class QuoteTemplateRo {
    /**
    * Template ID
    */
    'templateId': string;
    /**
    * Parent node ID
    */
    'parentId': string;
    /**
    * Whether to retain data
    */
    'data'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "templateId",
            "baseName": "templateId",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return QuoteTemplateRo.attributeTypeMap;
    }

    public constructor() {
    }
}

