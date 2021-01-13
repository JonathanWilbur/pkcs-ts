/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
import { bagtypes } from "../PKCS-12/bagtypes.va";
import {
    PKCS8ShroudedKeyBag,
    _decode_PKCS8ShroudedKeyBag,
    _encode_PKCS8ShroudedKeyBag,
} from "../PKCS-12/PKCS8ShroudedKeyBag.ta";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
export { bagtypes } from "../PKCS-12/bagtypes.va";
export {
    PKCS8ShroudedKeyBag,
    _decode_PKCS8ShroudedKeyBag,
    _encode_PKCS8ShroudedKeyBag,
} from "../PKCS-12/PKCS8ShroudedKeyBag.ta";

/* START_OF_SYMBOL_DEFINITION pkcs8ShroudedKeyBag */
/**
 * @summary pkcs8ShroudedKeyBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs8ShroudedKeyBag BAG-TYPE ::= {PKCS8ShroudedKeyBag IDENTIFIED BY {bagtypes 2}}
 * ```
 *
 * @constant
 * @type {BAG_TYPE<PKCS8ShroudedKeyBag>}
 * @implements {BAG_TYPE<PKCS8ShroudedKeyBag>}
 */
export const pkcs8ShroudedKeyBag: BAG_TYPE<PKCS8ShroudedKeyBag> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_PKCS8ShroudedKeyBag,
    },
    encoderFor: {
        "&Type": _encode_PKCS8ShroudedKeyBag,
    },
    "&id": new _OID(
        [2],
        bagtypes
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pkcs8ShroudedKeyBag */

/* eslint-enable */
