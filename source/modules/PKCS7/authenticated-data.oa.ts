/* eslint-disable */
import {
    AuthenticatedData,
    _decode_AuthenticatedData,
    _encode_AuthenticatedData,
} from "../PKCS7/AuthenticatedData.ta";
import { id_authenticated_data } from "../PKCS7/id-authenticated-data.va";
import { PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca";
export {
    AuthenticatedData,
    _decode_AuthenticatedData,
    _encode_AuthenticatedData,
} from "../PKCS7/AuthenticatedData.ta";
export { id_authenticated_data } from "../PKCS7/id-authenticated-data.va";
export { PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca";

/* START_OF_SYMBOL_DEFINITION authenticated_data */
/**
 * @summary authenticated_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authenticated-data PKCS7-CONTENT-TYPE ::= {
 *     AuthenticatedData
 *     IDENTIFIED BY  id-authenticated-data
 * }
 * ```
 *
 * @constant
 * @type {PKCS7_CONTENT_TYPE<AuthenticatedData>}
 * @implements {PKCS7_CONTENT_TYPE<AuthenticatedData>}
 */
export const authenticated_data: PKCS7_CONTENT_TYPE<AuthenticatedData> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_AuthenticatedData,
    },
    encoderFor: {
        "&Type": _encode_AuthenticatedData,
    },
    "&id": id_authenticated_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION authenticated_data */

/* eslint-enable */
