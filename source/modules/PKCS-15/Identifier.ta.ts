/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Identifier */
/**
 * @summary Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identifier  ::=  OCTET STRING (SIZE (0..pkcs15-ub-identifier))
 * ```
 */
export type Identifier = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Identifier */
let _cached_decoder_for_Identifier: $.ASN1Decoder<Identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Identifier */

/* START_OF_SYMBOL_DEFINITION _decode_Identifier */
/**
 * @summary Decodes an ASN.1 element into a(n) Identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Identifier} The decoded data structure.
 */
export function _decode_Identifier(el: _Element) {
    if (!_cached_decoder_for_Identifier) {
        _cached_decoder_for_Identifier = $._decodeOctetString;
    }
    return _cached_decoder_for_Identifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Identifier */
let _cached_encoder_for_Identifier: $.ASN1Encoder<Identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Identifier */

/* START_OF_SYMBOL_DEFINITION _encode_Identifier */
/**
 * @summary Encodes a(n) Identifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identifier, encoded as an ASN.1 Element.
 */
export function _encode_Identifier(
    value: Identifier,
    elGetter: $.ASN1Encoder<Identifier>
) {
    if (!_cached_encoder_for_Identifier) {
        _cached_encoder_for_Identifier = $._encodeOctetString;
    }
    return _cached_encoder_for_Identifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Identifier */

/* eslint-enable */
