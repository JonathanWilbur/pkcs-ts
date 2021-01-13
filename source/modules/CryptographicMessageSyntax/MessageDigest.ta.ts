/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION MessageDigest */
/**
 * @summary MessageDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDigest  ::=  OCTET STRING
 * ```
 */
export type MessageDigest = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION MessageDigest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageDigest */
let _cached_decoder_for_MessageDigest: $.ASN1Decoder<MessageDigest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageDigest */

/* START_OF_SYMBOL_DEFINITION _decode_MessageDigest */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageDigest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageDigest} The decoded data structure.
 */
export function _decode_MessageDigest(el: _Element) {
    if (!_cached_decoder_for_MessageDigest) {
        _cached_decoder_for_MessageDigest = $._decodeOctetString;
    }
    return _cached_decoder_for_MessageDigest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageDigest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageDigest */
let _cached_encoder_for_MessageDigest: $.ASN1Encoder<MessageDigest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageDigest */

/* START_OF_SYMBOL_DEFINITION _encode_MessageDigest */
/**
 * @summary Encodes a(n) MessageDigest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageDigest, encoded as an ASN.1 Element.
 */
export function _encode_MessageDigest(
    value: MessageDigest,
    elGetter: $.ASN1Encoder<MessageDigest>
) {
    if (!_cached_encoder_for_MessageDigest) {
        _cached_encoder_for_MessageDigest = $._encodeOctetString;
    }
    return _cached_encoder_for_MessageDigest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageDigest */

/* eslint-enable */
