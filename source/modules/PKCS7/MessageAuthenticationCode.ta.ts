/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION MessageAuthenticationCode */
/**
 * @summary MessageAuthenticationCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthenticationCode  ::=  OCTET STRING
 * ```
 */
export type MessageAuthenticationCode = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION MessageAuthenticationCode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageAuthenticationCode */
let _cached_decoder_for_MessageAuthenticationCode: $.ASN1Decoder<MessageAuthenticationCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageAuthenticationCode */

/* START_OF_SYMBOL_DEFINITION _decode_MessageAuthenticationCode */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageAuthenticationCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageAuthenticationCode} The decoded data structure.
 */
export function _decode_MessageAuthenticationCode(el: _Element) {
    if (!_cached_decoder_for_MessageAuthenticationCode) {
        _cached_decoder_for_MessageAuthenticationCode = $._decodeOctetString;
    }
    return _cached_decoder_for_MessageAuthenticationCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageAuthenticationCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageAuthenticationCode */
let _cached_encoder_for_MessageAuthenticationCode: $.ASN1Encoder<MessageAuthenticationCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageAuthenticationCode */

/* START_OF_SYMBOL_DEFINITION _encode_MessageAuthenticationCode */
/**
 * @summary Encodes a(n) MessageAuthenticationCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageAuthenticationCode, encoded as an ASN.1 Element.
 */
export function _encode_MessageAuthenticationCode(
    value: MessageAuthenticationCode,
    elGetter: $.ASN1Encoder<MessageAuthenticationCode>
) {
    if (!_cached_encoder_for_MessageAuthenticationCode) {
        _cached_encoder_for_MessageAuthenticationCode = $._encodeOctetString;
    }
    return _cached_encoder_for_MessageAuthenticationCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageAuthenticationCode */

/* eslint-enable */
