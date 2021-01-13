/* eslint-disable */
import { authenticated_data } from "../PKCS7/authenticated-data.oa";
import { data } from "../PKCS7/data.oa";
import { digested_data } from "../PKCS7/digested-data.oa";
import { encrypted_data } from "../PKCS7/encrypted-data.oa";
import { enveloped_data } from "../PKCS7/enveloped-data.oa";
import { PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca";
import { signed_and_enveloped_data } from "../PKCS7/signed-and-enveloped-data.oa";
import { signed_data } from "../PKCS7/signed-data.oa";
export { authenticated_data } from "../PKCS7/authenticated-data.oa";
export { data } from "../PKCS7/data.oa";
export { digested_data } from "../PKCS7/digested-data.oa";
export { encrypted_data } from "../PKCS7/encrypted-data.oa";
export { enveloped_data } from "../PKCS7/enveloped-data.oa";
export { PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca";
export { signed_and_enveloped_data } from "../PKCS7/signed-and-enveloped-data.oa";
export { signed_data } from "../PKCS7/signed-data.oa";

/* START_OF_SYMBOL_DEFINITION PKCS7ContentTable */
/**
 * @summary PKCS7ContentTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS7ContentTable PKCS7-CONTENT-TYPE ::= {data | signed-data | enveloped-data | signed-and-enveloped-data |
 *     digested-data | encrypted-data | authenticated-data, ...}
 * ```
 *
 * @constant
 * @type {PKCS7_CONTENT_TYPE[]}
 *
 */
export const PKCS7ContentTable: PKCS7_CONTENT_TYPE<any>[] = [
    data,
    signed_data,
    enveloped_data,
    signed_and_enveloped_data,
    digested_data,
    encrypted_data,
    authenticated_data,
];
/* END_OF_SYMBOL_DEFINITION PKCS7ContentTable */

/* eslint-enable */
