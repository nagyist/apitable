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
* New department request parameter
*/
export class CreateUnitTeamRo {
    /**
    * Department name
    */
    'teamName': string;
    /**
    * Parent ID, 0 if the parent is root
    */
    'parentIdUnitId': string;
    /**
    * role unit ids
    */
    'roleUnitIds'?: Array<string>;
    /**
    * team sequence
    */
    'sequence'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "teamName",
            "baseName": "teamName",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentIdUnitId",
            "baseName": "parentIdUnitId",
            "type": "string",
            "format": ""
        },
        {
            "name": "roleUnitIds",
            "baseName": "roleUnitIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sequence",
            "baseName": "sequence",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return CreateUnitTeamRo.attributeTypeMap;
    }

    public constructor() {
    }
}

