/* eslint-disable */
import {
    AsymmetricKeyPackage,
    _decode_AsymmetricKeyPackage,
    _encode_AsymmetricKeyPackage,
} from "../AsymmetricKeyPackageModuleV1/AsymmetricKeyPackage.ta";
import { id_ct_KP_aKeyPackage } from "../AsymmetricKeyPackageModuleV1/id-ct-KP-aKeyPackage.va";
import { CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca";
export {
    AsymmetricKeyPackage,
    _decode_AsymmetricKeyPackage,
    _encode_AsymmetricKeyPackage,
} from "../AsymmetricKeyPackageModuleV1/AsymmetricKeyPackage.ta";
export { id_ct_KP_aKeyPackage } from "../AsymmetricKeyPackageModuleV1/id-ct-KP-aKeyPackage.va";
export { CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca";

/* START_OF_SYMBOL_DEFINITION ct_asymmetric_key_package */
/**
 * @summary ct_asymmetric_key_package
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-asymmetric-key-package CONTENT-TYPE ::= { AsymmetricKeyPackage IDENTIFIED BY id-ct-KP-aKeyPackage }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<AsymmetricKeyPackage>}
 * @implements {CONTENT_TYPE<AsymmetricKeyPackage>}
 */
export const ct_asymmetric_key_package: CONTENT_TYPE<AsymmetricKeyPackage> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_AsymmetricKeyPackage,
    },
    encoderFor: {
        "&Type": _encode_AsymmetricKeyPackage,
    },
    "&id": id_ct_KP_aKeyPackage /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ct_asymmetric_key_package */

/* eslint-enable */
