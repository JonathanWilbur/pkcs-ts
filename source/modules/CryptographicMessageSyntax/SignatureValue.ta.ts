/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SignatureValue */
/**
 * @summary SignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureValue  ::=  OCTET STRING
 * ```
 */
export type SignatureValue = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SignatureValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureValue */
let _cached_decoder_for_SignatureValue: $.ASN1Decoder<SignatureValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureValue */

/* START_OF_SYMBOL_DEFINITION _decode_SignatureValue */
/**
 * @summary Decodes an ASN.1 element into a(n) SignatureValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureValue} The decoded data structure.
 */
export function _decode_SignatureValue(el: _Element) {
    if (!_cached_decoder_for_SignatureValue) {
        _cached_decoder_for_SignatureValue = $._decodeOctetString;
    }
    return _cached_decoder_for_SignatureValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignatureValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureValue */
let _cached_encoder_for_SignatureValue: $.ASN1Encoder<SignatureValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureValue */

/* START_OF_SYMBOL_DEFINITION _encode_SignatureValue */
/**
 * @summary Encodes a(n) SignatureValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureValue, encoded as an ASN.1 Element.
 */
export function _encode_SignatureValue(
    value: SignatureValue,
    elGetter: $.ASN1Encoder<SignatureValue>
) {
    if (!_cached_encoder_for_SignatureValue) {
        _cached_encoder_for_SignatureValue = $._encodeOctetString;
    }
    return _cached_encoder_for_SignatureValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignatureValue */

/* eslint-enable */
