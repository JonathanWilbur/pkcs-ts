/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OneAsymmetricKey,
    _decode_OneAsymmetricKey,
    _encode_OneAsymmetricKey,
} from "../AsymmetricKeyPackageModuleV1/OneAsymmetricKey.ta";
export {
    OneAsymmetricKey,
    _decode_OneAsymmetricKey,
    _encode_OneAsymmetricKey,
} from "../AsymmetricKeyPackageModuleV1/OneAsymmetricKey.ta";

/* START_OF_SYMBOL_DEFINITION PrivateKeyInfo */
/**
 * @summary PrivateKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeyInfo  ::=  OneAsymmetricKey
 * ```
 */
export type PrivateKeyInfo = OneAsymmetricKey; // DefinedType
/* END_OF_SYMBOL_DEFINITION PrivateKeyInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateKeyInfo */
let _cached_decoder_for_PrivateKeyInfo: $.ASN1Decoder<PrivateKeyInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateKeyInfo */

/* START_OF_SYMBOL_DEFINITION _decode_PrivateKeyInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKeyInfo} The decoded data structure.
 */
export function _decode_PrivateKeyInfo(el: _Element) {
    if (!_cached_decoder_for_PrivateKeyInfo) {
        _cached_decoder_for_PrivateKeyInfo = _decode_OneAsymmetricKey;
    }
    return _cached_decoder_for_PrivateKeyInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivateKeyInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateKeyInfo */
let _cached_encoder_for_PrivateKeyInfo: $.ASN1Encoder<PrivateKeyInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateKeyInfo */

/* START_OF_SYMBOL_DEFINITION _encode_PrivateKeyInfo */
/**
 * @summary Encodes a(n) PrivateKeyInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeyInfo, encoded as an ASN.1 Element.
 */
export function _encode_PrivateKeyInfo(
    value: PrivateKeyInfo,
    elGetter: $.ASN1Encoder<PrivateKeyInfo>
) {
    if (!_cached_encoder_for_PrivateKeyInfo) {
        _cached_encoder_for_PrivateKeyInfo = _encode_OneAsymmetricKey;
    }
    return _cached_encoder_for_PrivateKeyInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivateKeyInfo */

/* eslint-enable */
