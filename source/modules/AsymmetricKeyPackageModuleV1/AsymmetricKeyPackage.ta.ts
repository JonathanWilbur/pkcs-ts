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

/* START_OF_SYMBOL_DEFINITION AsymmetricKeyPackage */
/**
 * @summary AsymmetricKeyPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AsymmetricKeyPackage  ::=  SEQUENCE SIZE (1..MAX) OF OneAsymmetricKey
 * ```
 */
export type AsymmetricKeyPackage = OneAsymmetricKey[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AsymmetricKeyPackage */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AsymmetricKeyPackage */
let _cached_decoder_for_AsymmetricKeyPackage: $.ASN1Decoder<AsymmetricKeyPackage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AsymmetricKeyPackage */

/* START_OF_SYMBOL_DEFINITION _decode_AsymmetricKeyPackage */
/**
 * @summary Decodes an ASN.1 element into a(n) AsymmetricKeyPackage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AsymmetricKeyPackage} The decoded data structure.
 */
export function _decode_AsymmetricKeyPackage(el: _Element) {
    if (!_cached_decoder_for_AsymmetricKeyPackage) {
        _cached_decoder_for_AsymmetricKeyPackage = $._decodeSequenceOf<OneAsymmetricKey>(
            () => _decode_OneAsymmetricKey
        );
    }
    return _cached_decoder_for_AsymmetricKeyPackage(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AsymmetricKeyPackage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AsymmetricKeyPackage */
let _cached_encoder_for_AsymmetricKeyPackage: $.ASN1Encoder<AsymmetricKeyPackage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AsymmetricKeyPackage */

/* START_OF_SYMBOL_DEFINITION _encode_AsymmetricKeyPackage */
/**
 * @summary Encodes a(n) AsymmetricKeyPackage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AsymmetricKeyPackage, encoded as an ASN.1 Element.
 */
export function _encode_AsymmetricKeyPackage(
    value: AsymmetricKeyPackage,
    elGetter: $.ASN1Encoder<AsymmetricKeyPackage>
) {
    if (!_cached_encoder_for_AsymmetricKeyPackage) {
        _cached_encoder_for_AsymmetricKeyPackage = $._encodeSequenceOf<OneAsymmetricKey>(
            () => _encode_OneAsymmetricKey,
            $.BER
        );
    }
    return _cached_encoder_for_AsymmetricKeyPackage(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AsymmetricKeyPackage */

/* eslint-enable */
