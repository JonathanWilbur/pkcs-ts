/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    EncryptedPrivateKeyInfo,
    _decode_EncryptedPrivateKeyInfo,
    _encode_EncryptedPrivateKeyInfo,
} from "../AsymmetricKeyPackageModuleV1/EncryptedPrivateKeyInfo.ta";

/* START_OF_SYMBOL_DEFINITION PKCS8ShroudedKeyBag */
/**
 * @summary PKCS8ShroudedKeyBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS8ShroudedKeyBag  ::=  EncryptedPrivateKeyInfo
 * ```
 */
export type PKCS8ShroudedKeyBag = EncryptedPrivateKeyInfo; // DefinedType
/* END_OF_SYMBOL_DEFINITION PKCS8ShroudedKeyBag */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS8ShroudedKeyBag */
let _cached_decoder_for_PKCS8ShroudedKeyBag: $.ASN1Decoder<PKCS8ShroudedKeyBag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS8ShroudedKeyBag */

/* START_OF_SYMBOL_DEFINITION _decode_PKCS8ShroudedKeyBag */
/**
 * @summary Decodes an ASN.1 element into a(n) PKCS8ShroudedKeyBag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKCS8ShroudedKeyBag} The decoded data structure.
 */
export function _decode_PKCS8ShroudedKeyBag(el: _Element) {
    if (!_cached_decoder_for_PKCS8ShroudedKeyBag) {
        _cached_decoder_for_PKCS8ShroudedKeyBag = _decode_EncryptedPrivateKeyInfo;
    }
    return _cached_decoder_for_PKCS8ShroudedKeyBag(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKCS8ShroudedKeyBag */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS8ShroudedKeyBag */
let _cached_encoder_for_PKCS8ShroudedKeyBag: $.ASN1Encoder<PKCS8ShroudedKeyBag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS8ShroudedKeyBag */

/* START_OF_SYMBOL_DEFINITION _encode_PKCS8ShroudedKeyBag */
/**
 * @summary Encodes a(n) PKCS8ShroudedKeyBag into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKCS8ShroudedKeyBag, encoded as an ASN.1 Element.
 */
export function _encode_PKCS8ShroudedKeyBag(
    value: PKCS8ShroudedKeyBag,
    elGetter: $.ASN1Encoder<PKCS8ShroudedKeyBag>
) {
    if (!_cached_encoder_for_PKCS8ShroudedKeyBag) {
        _cached_encoder_for_PKCS8ShroudedKeyBag = _encode_EncryptedPrivateKeyInfo;
    }
    return _cached_encoder_for_PKCS8ShroudedKeyBag(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKCS8ShroudedKeyBag */

/* eslint-enable */
