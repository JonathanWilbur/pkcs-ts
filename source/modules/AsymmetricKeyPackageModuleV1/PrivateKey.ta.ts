/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PrivateKey */
/**
 * @summary PrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKey  ::=  OCTET STRING
 * ```
 */
export type PrivateKey = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION PrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateKey */
let _cached_decoder_for_PrivateKey: $.ASN1Decoder<PrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateKey */

/* START_OF_SYMBOL_DEFINITION _decode_PrivateKey */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKey} The decoded data structure.
 */
export function _decode_PrivateKey(el: _Element) {
    if (!_cached_decoder_for_PrivateKey) {
        _cached_decoder_for_PrivateKey = $._decodeOctetString;
    }
    return _cached_decoder_for_PrivateKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateKey */
let _cached_encoder_for_PrivateKey: $.ASN1Encoder<PrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateKey */

/* START_OF_SYMBOL_DEFINITION _encode_PrivateKey */
/**
 * @summary Encodes a(n) PrivateKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKey, encoded as an ASN.1 Element.
 */
export function _encode_PrivateKey(
    value: PrivateKey,
    elGetter: $.ASN1Encoder<PrivateKey>
) {
    if (!_cached_encoder_for_PrivateKey) {
        _cached_encoder_for_PrivateKey = $._encodeOctetString;
    }
    return _cached_encoder_for_PrivateKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivateKey */

/* eslint-enable */
