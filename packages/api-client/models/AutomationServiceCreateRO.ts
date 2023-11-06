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

export class AutomationServiceCreateRO {
    'serviceId'?: string;
    'slug': string;
    'name': string;
    'description'?: string;
    'logo'?: string;
    'baseUrl'?: string;
    'i18n'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "serviceId",
            "baseName": "serviceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string",
            "format": ""
        },
        {
            "name": "baseUrl",
            "baseName": "baseUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "i18n",
            "baseName": "i18n",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AutomationServiceCreateRO.attributeTypeMap;
    }

    public constructor() {
    }
}

