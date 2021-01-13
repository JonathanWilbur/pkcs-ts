/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
import { bagtypes } from "../PKCS-12/bagtypes.va";
import {
    SecretBag,
    _decode_SecretBag,
    _encode_SecretBag,
} from "../PKCS-12/SecretBag.ta";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
export { bagtypes } from "../PKCS-12/bagtypes.va";
export {
    SecretBag,
    _decode_SecretBag,
    _encode_SecretBag,
} from "../PKCS-12/SecretBag.ta";

/* START_OF_SYMBOL_DEFINITION secretBag */
/**
 * @summary secretBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secretBag BAG-TYPE ::= {SecretBag           IDENTIFIED BY {bagtypes 5}}
 * ```
 *
 * @constant
 * @type {BAG_TYPE<SecretBag>}
 * @implements {BAG_TYPE<SecretBag>}
 */
export const secretBag: BAG_TYPE<SecretBag> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_SecretBag,
    },
    encoderFor: {
        "&Type": _encode_SecretBag,
    },
    "&id": new _OID(
        [5],
        bagtypes
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION secretBag */

/* eslint-enable */
