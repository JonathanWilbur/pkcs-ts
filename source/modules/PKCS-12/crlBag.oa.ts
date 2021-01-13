/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
import { bagtypes } from "../PKCS-12/bagtypes.va";
import { CRLBag, _decode_CRLBag, _encode_CRLBag } from "../PKCS-12/CRLBag.ta";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
export { bagtypes } from "../PKCS-12/bagtypes.va";
export { CRLBag, _decode_CRLBag, _encode_CRLBag } from "../PKCS-12/CRLBag.ta";

/* START_OF_SYMBOL_DEFINITION crlBag */
/**
 * @summary crlBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * crlBag BAG-TYPE ::= {CRLBag              IDENTIFIED BY {bagtypes 4}}
 * ```
 *
 * @constant
 * @type {BAG_TYPE<CRLBag>}
 * @implements {BAG_TYPE<CRLBag>}
 */
export const crlBag: BAG_TYPE<CRLBag> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CRLBag,
    },
    encoderFor: {
        "&Type": _encode_CRLBag,
    },
    "&id": new _OID(
        [4],
        bagtypes
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION crlBag */

/* eslint-enable */
