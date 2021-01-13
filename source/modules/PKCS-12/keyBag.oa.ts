/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
import { bagtypes } from "../PKCS-12/bagtypes.va";
import { KeyBag, _decode_KeyBag, _encode_KeyBag } from "../PKCS-12/KeyBag.ta";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
export { bagtypes } from "../PKCS-12/bagtypes.va";
export { KeyBag, _decode_KeyBag, _encode_KeyBag } from "../PKCS-12/KeyBag.ta";

/* START_OF_SYMBOL_DEFINITION keyBag */
/**
 * @summary keyBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyBag BAG-TYPE ::= {KeyBag              IDENTIFIED BY {bagtypes 1}}
 * ```
 *
 * @constant
 * @type {BAG_TYPE<KeyBag>}
 * @implements {BAG_TYPE<KeyBag>}
 */
export const keyBag: BAG_TYPE<KeyBag> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_KeyBag,
    },
    encoderFor: {
        "&Type": _encode_KeyBag,
    },
    "&id": new _OID(
        [1],
        bagtypes
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION keyBag */

/* eslint-enable */
