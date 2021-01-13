/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKCS-1/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKCS-1/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION DigestAlgorithm */
/**
 * @summary DigestAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestAlgorithm  ::=  AlgorithmIdentifier {
 *     {PKCS1-v1-5DigestAlgorithms}
 * }
 * ```
 */
export type DigestAlgorithm = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION DigestAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DigestAlgorithm */
let _cached_decoder_for_DigestAlgorithm: $.ASN1Decoder<DigestAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DigestAlgorithm */

/* START_OF_SYMBOL_DEFINITION _decode_DigestAlgorithm */
/**
 * @summary Decodes an ASN.1 element into a(n) DigestAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DigestAlgorithm} The decoded data structure.
 */
export function _decode_DigestAlgorithm(el: _Element) {
    if (!_cached_decoder_for_DigestAlgorithm) {
        _cached_decoder_for_DigestAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_DigestAlgorithm(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DigestAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DigestAlgorithm */
let _cached_encoder_for_DigestAlgorithm: $.ASN1Encoder<DigestAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DigestAlgorithm */

/* START_OF_SYMBOL_DEFINITION _encode_DigestAlgorithm */
/**
 * @summary Encodes a(n) DigestAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_DigestAlgorithm(
    value: DigestAlgorithm,
    elGetter: $.ASN1Encoder<DigestAlgorithm>
) {
    if (!_cached_encoder_for_DigestAlgorithm) {
        _cached_encoder_for_DigestAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_DigestAlgorithm(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DigestAlgorithm */

/* eslint-enable */
