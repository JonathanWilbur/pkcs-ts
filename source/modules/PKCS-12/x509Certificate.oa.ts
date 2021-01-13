/* eslint-disable */
import { ObjectIdentifier as _OID, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
import { certTypes } from "../PKCS-9/certTypes.va";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
export { certTypes } from "../PKCS-9/certTypes.va";

/* START_OF_SYMBOL_DEFINITION x509Certificate */
/**
 * @summary x509Certificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509Certificate BAG-TYPE ::= {OCTET STRING IDENTIFIED BY {certTypes 1}}
 * ```
 *
 * @constant
 * @type {BAG_TYPE<OCTET_STRING>}
 * @implements {BAG_TYPE<OCTET_STRING>}
 */
export const x509Certificate: BAG_TYPE<OCTET_STRING> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&id": new _OID(
        [1],
        certTypes
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION x509Certificate */

/* eslint-enable */
