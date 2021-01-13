/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Signature */
/**
 * @summary Signature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Signature  ::=  BIT STRING
 * ```
 */
export type Signature = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Signature */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Signature */
let _cached_decoder_for_Signature: $.ASN1Decoder<Signature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Signature */

/* START_OF_SYMBOL_DEFINITION _decode_Signature */
/**
 * @summary Decodes an ASN.1 element into a(n) Signature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Signature} The decoded data structure.
 */
export function _decode_Signature(el: _Element) {
    if (!_cached_decoder_for_Signature) {
        _cached_decoder_for_Signature = $._decodeBitString;
    }
    return _cached_decoder_for_Signature(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Signature */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Signature */
let _cached_encoder_for_Signature: $.ASN1Encoder<Signature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Signature */

/* START_OF_SYMBOL_DEFINITION _encode_Signature */
/**
 * @summary Encodes a(n) Signature into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signature, encoded as an ASN.1 Element.
 */
export function _encode_Signature(
    value: Signature,
    elGetter: $.ASN1Encoder<Signature>
) {
    if (!_cached_encoder_for_Signature) {
        _cached_encoder_for_Signature = $._encodeBitString;
    }
    return _cached_encoder_for_Signature(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Signature */

/* eslint-enable */
