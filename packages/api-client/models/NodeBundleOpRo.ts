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
* Bundle request parameters
*/
export class NodeBundleOpRo {
    'file': HttpFile;
    /**
    * Parent class node ID
    */
    'parentId'?: string;
    /**
    * Predecessor node ID
    */
    'preNodeId'?: string;
    /**
    * Password
    */
    'password'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "file",
            "baseName": "file",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "preNodeId",
            "baseName": "preNodeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NodeBundleOpRo.attributeTypeMap;
    }

    public constructor() {
    }
}

