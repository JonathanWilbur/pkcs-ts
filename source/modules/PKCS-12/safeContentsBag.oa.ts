/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
import { bagtypes } from "../PKCS-12/bagtypes.va";
import {
    SafeContents,
    _decode_SafeContents,
    _encode_SafeContents,
} from "../PKCS-12/SafeContents.ta";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
export { bagtypes } from "../PKCS-12/bagtypes.va";
export {
    SafeContents,
    _decode_SafeContents,
    _encode_SafeContents,
} from "../PKCS-12/SafeContents.ta";

/* START_OF_SYMBOL_DEFINITION safeContentsBag */
/**
 * @summary safeContentsBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * safeContentsBag BAG-TYPE ::= {SafeContents        IDENTIFIED BY {bagtypes 6}}
 * ```
 *
 * @constant
 * @type {BAG_TYPE<SafeContents>}
 * @implements {BAG_TYPE<SafeContents>}
 */
export const safeContentsBag: BAG_TYPE<SafeContents> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_SafeContents,
    },
    encoderFor: {
        "&Type": _encode_SafeContents,
    },
    "&id": new _OID(
        [6],
        bagtypes
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION safeContentsBag */

/* eslint-enable */
