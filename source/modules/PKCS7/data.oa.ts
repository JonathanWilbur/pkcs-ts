/* eslint-disable */
import { Data, _decode_Data, _encode_Data } from "../PKCS7/Data.ta";
import { id_data } from "../PKCS7/id-data.va";
import { PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca";
export { Data, _decode_Data, _encode_Data } from "../PKCS7/Data.ta";
export { id_data } from "../PKCS7/id-data.va";
export { PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca";

/* START_OF_SYMBOL_DEFINITION data */
/**
 * @summary data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * data PKCS7-CONTENT-TYPE ::= {Data IDENTIFIED BY id-data}
 * ```
 *
 * @constant
 * @type {PKCS7_CONTENT_TYPE<Data>}
 * @implements {PKCS7_CONTENT_TYPE<Data>}
 */
export const data: PKCS7_CONTENT_TYPE<Data> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Data,
    },
    encoderFor: {
        "&Type": _encode_Data,
    },
    "&id": id_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION data */

/* eslint-enable */
