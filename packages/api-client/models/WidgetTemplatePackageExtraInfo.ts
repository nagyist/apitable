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
* Template Widget Package Extension Information View
*/
export class WidgetTemplatePackageExtraInfo {
    /**
    * Open source address
    */
    'widgetOpenSource'?: string;
    /**
    * Template Extension Cover
    */
    'templateCover'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "widgetOpenSource",
            "baseName": "widgetOpenSource",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateCover",
            "baseName": "templateCover",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WidgetTemplatePackageExtraInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

