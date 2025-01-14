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
* space subscription plan resource view
*/
export class InternalSpaceApiRateLimitVo {
    /**
    * api request numbers per seconds
    */
    'qps'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "qps",
            "baseName": "qps",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return InternalSpaceApiRateLimitVo.attributeTypeMap;
    }

    public constructor() {
    }
}

