/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../CryptographicMessageSyntax/Time.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../CryptographicMessageSyntax/Time.ta";

/* START_OF_SYMBOL_DEFINITION SigningTime */
/**
 * @summary SigningTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigningTime  ::=  Time
 * ```
 */
export type SigningTime = Time; // DefinedType
/* END_OF_SYMBOL_DEFINITION SigningTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SigningTime */
let _cached_decoder_for_SigningTime: $.ASN1Decoder<SigningTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SigningTime */

/* START_OF_SYMBOL_DEFINITION _decode_SigningTime */
/**
 * @summary Decodes an ASN.1 element into a(n) SigningTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigningTime} The decoded data structure.
 */
export function _decode_SigningTime(el: _Element) {
    if (!_cached_decoder_for_SigningTime) {
        _cached_decoder_for_SigningTime = _decode_Time;
    }
    return _cached_decoder_for_SigningTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SigningTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SigningTime */
let _cached_encoder_for_SigningTime: $.ASN1Encoder<SigningTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SigningTime */

/* START_OF_SYMBOL_DEFINITION _encode_SigningTime */
/**
 * @summary Encodes a(n) SigningTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigningTime, encoded as an ASN.1 Element.
 */
export function _encode_SigningTime(
    value: SigningTime,
    elGetter: $.ASN1Encoder<SigningTime>
) {
    if (!_cached_encoder_for_SigningTime) {
        _cached_encoder_for_SigningTime = _encode_Time;
    }
    return _cached_encoder_for_SigningTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SigningTime */

/* eslint-enable */
