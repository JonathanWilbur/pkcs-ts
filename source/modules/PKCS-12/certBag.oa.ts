/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
import { bagtypes } from "../PKCS-12/bagtypes.va";
import {
    CertBag,
    _decode_CertBag,
    _encode_CertBag,
} from "../PKCS-12/CertBag.ta";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
export { bagtypes } from "../PKCS-12/bagtypes.va";
export {
    CertBag,
    _decode_CertBag,
    _encode_CertBag,
} from "../PKCS-12/CertBag.ta";

/* START_OF_SYMBOL_DEFINITION certBag */
/**
 * @summary certBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certBag BAG-TYPE ::= {CertBag             IDENTIFIED BY {bagtypes 3}}
 * ```
 *
 * @constant
 * @type {BAG_TYPE<CertBag>}
 * @implements {BAG_TYPE<CertBag>}
 */
export const certBag: BAG_TYPE<CertBag> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertBag,
    },
    encoderFor: {
        "&Type": _encode_CertBag,
    },
    "&id": new _OID(
        [3],
        bagtypes
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certBag */

/* eslint-enable */
