/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OtherPrimeInfo,
    _decode_OtherPrimeInfo,
    _encode_OtherPrimeInfo,
} from "../PKCS-1/OtherPrimeInfo.ta";
export {
    OtherPrimeInfo,
    _decode_OtherPrimeInfo,
    _encode_OtherPrimeInfo,
} from "../PKCS-1/OtherPrimeInfo.ta";

/* START_OF_SYMBOL_DEFINITION OtherPrimeInfos */
/**
 * @summary OtherPrimeInfos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherPrimeInfos  ::=  SEQUENCE SIZE(1..MAX) OF OtherPrimeInfo
 * ```
 */
export type OtherPrimeInfos = OtherPrimeInfo[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION OtherPrimeInfos */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherPrimeInfos */
let _cached_decoder_for_OtherPrimeInfos: $.ASN1Decoder<OtherPrimeInfos> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherPrimeInfos */

/* START_OF_SYMBOL_DEFINITION _decode_OtherPrimeInfos */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherPrimeInfos
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherPrimeInfos} The decoded data structure.
 */
export function _decode_OtherPrimeInfos(el: _Element) {
    if (!_cached_decoder_for_OtherPrimeInfos) {
        _cached_decoder_for_OtherPrimeInfos = $._decodeSequenceOf<OtherPrimeInfo>(
            () => _decode_OtherPrimeInfo
        );
    }
    return _cached_decoder_for_OtherPrimeInfos(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherPrimeInfos */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherPrimeInfos */
let _cached_encoder_for_OtherPrimeInfos: $.ASN1Encoder<OtherPrimeInfos> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherPrimeInfos */

/* START_OF_SYMBOL_DEFINITION _encode_OtherPrimeInfos */
/**
 * @summary Encodes a(n) OtherPrimeInfos into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherPrimeInfos, encoded as an ASN.1 Element.
 */
export function _encode_OtherPrimeInfos(
    value: OtherPrimeInfos,
    elGetter: $.ASN1Encoder<OtherPrimeInfos>
) {
    if (!_cached_encoder_for_OtherPrimeInfos) {
        _cached_encoder_for_OtherPrimeInfos = $._encodeSequenceOf<OtherPrimeInfo>(
            () => _encode_OtherPrimeInfo,
            $.BER
        );
    }
    return _cached_encoder_for_OtherPrimeInfos(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherPrimeInfos */

/* eslint-enable */
