/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Reference */
/**
 * @summary Reference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reference  ::=  INTEGER (0..pkcs15-ub-reference)
 * ```
 */
export type Reference = INTEGER;
/* END_OF_SYMBOL_DEFINITION Reference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Reference */
let _cached_decoder_for_Reference: $.ASN1Decoder<Reference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Reference */

/* START_OF_SYMBOL_DEFINITION _decode_Reference */
/**
 * @summary Decodes an ASN.1 element into a(n) Reference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Reference} The decoded data structure.
 */
export function _decode_Reference(el: _Element) {
    if (!_cached_decoder_for_Reference) {
        _cached_decoder_for_Reference = $._decodeInteger;
    }
    return _cached_decoder_for_Reference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Reference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Reference */
let _cached_encoder_for_Reference: $.ASN1Encoder<Reference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Reference */

/* START_OF_SYMBOL_DEFINITION _encode_Reference */
/**
 * @summary Encodes a(n) Reference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reference, encoded as an ASN.1 Element.
 */
export function _encode_Reference(
    value: Reference,
    elGetter: $.ASN1Encoder<Reference>
) {
    if (!_cached_encoder_for_Reference) {
        _cached_encoder_for_Reference = $._encodeInteger;
    }
    return _cached_encoder_for_Reference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Reference */

/* eslint-enable */
