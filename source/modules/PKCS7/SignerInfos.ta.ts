/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SignerInfo,
    _decode_SignerInfo,
    _encode_SignerInfo,
} from "../PKCS7/SignerInfo.ta";
export {
    SignerInfo,
    _decode_SignerInfo,
    _encode_SignerInfo,
} from "../PKCS7/SignerInfo.ta";

/* START_OF_SYMBOL_DEFINITION SignerInfos */
/**
 * @summary SignerInfos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignerInfos  ::=  SET OF SignerInfo
 * ```
 */
export type SignerInfos = SignerInfo[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SignerInfos */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerInfos */
let _cached_decoder_for_SignerInfos: $.ASN1Decoder<SignerInfos> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerInfos */

/* START_OF_SYMBOL_DEFINITION _decode_SignerInfos */
/**
 * @summary Decodes an ASN.1 element into a(n) SignerInfos
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerInfos} The decoded data structure.
 */
export function _decode_SignerInfos(el: _Element) {
    if (!_cached_decoder_for_SignerInfos) {
        _cached_decoder_for_SignerInfos = $._decodeSetOf<SignerInfo>(
            () => _decode_SignerInfo
        );
    }
    return _cached_decoder_for_SignerInfos(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignerInfos */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerInfos */
let _cached_encoder_for_SignerInfos: $.ASN1Encoder<SignerInfos> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerInfos */

/* START_OF_SYMBOL_DEFINITION _encode_SignerInfos */
/**
 * @summary Encodes a(n) SignerInfos into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerInfos, encoded as an ASN.1 Element.
 */
export function _encode_SignerInfos(
    value: SignerInfos,
    elGetter: $.ASN1Encoder<SignerInfos>
) {
    if (!_cached_encoder_for_SignerInfos) {
        _cached_encoder_for_SignerInfos = $._encodeSetOf<SignerInfo>(
            () => _encode_SignerInfo,
            $.BER
        );
    }
    return _cached_encoder_for_SignerInfos(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignerInfos */

/* eslint-enable */
