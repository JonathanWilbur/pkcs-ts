/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { KEY_IDENTIFIER } from "../PKCS-15/KEY-IDENTIFIER.oca";
export { KEY_IDENTIFIER } from "../PKCS-15/KEY-IDENTIFIER.oca";
export { PKCS15_OPAQUE } from "../PKCS-15/PKCS15-OPAQUE.oca";

/* START_OF_SYMBOL_DEFINITION issuerAndSerialNumber */
/**
 * @summary issuerAndSerialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * issuerAndSerialNumber KEY-IDENTIFIER ::= {SYNTAX PKCS15-OPAQUE.&Type IDENTIFIED BY 1}
 * ```
 *
 * @constant
 * @type {KEY_IDENTIFIER<_Element>}
 * @implements {KEY_IDENTIFIER<_Element>}
 */
export const issuerAndSerialNumber: KEY_IDENTIFIER<_Element> = {
    class: "KEY-IDENTIFIER",
    decoderFor: {
        "&Value": $._decodeAny,
    },
    encoderFor: {
        "&Value": $._encodeAny,
    },
    "&id": 1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION issuerAndSerialNumber */

/* eslint-enable */
