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

/* START_OF_SYMBOL_DEFINITION MaskGenAlgorithm */
/**
 * @summary MaskGenAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaskGenAlgorithm  ::=  AlgorithmIdentifier { {PKCS1MGFAlgorithms} }
 * ```
 */
export type MaskGenAlgorithm = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION MaskGenAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaskGenAlgorithm */
let _cached_decoder_for_MaskGenAlgorithm: $.ASN1Decoder<MaskGenAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaskGenAlgorithm */

/* START_OF_SYMBOL_DEFINITION _decode_MaskGenAlgorithm */
/**
 * @summary Decodes an ASN.1 element into a(n) MaskGenAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaskGenAlgorithm} The decoded data structure.
 */
export function _decode_MaskGenAlgorithm(el: _Element) {
    if (!_cached_decoder_for_MaskGenAlgorithm) {
        _cached_decoder_for_MaskGenAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MaskGenAlgorithm(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MaskGenAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaskGenAlgorithm */
let _cached_encoder_for_MaskGenAlgorithm: $.ASN1Encoder<MaskGenAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaskGenAlgorithm */

/* START_OF_SYMBOL_DEFINITION _encode_MaskGenAlgorithm */
/**
 * @summary Encodes a(n) MaskGenAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaskGenAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_MaskGenAlgorithm(
    value: MaskGenAlgorithm,
    elGetter: $.ASN1Encoder<MaskGenAlgorithm>
) {
    if (!_cached_encoder_for_MaskGenAlgorithm) {
        _cached_encoder_for_MaskGenAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MaskGenAlgorithm(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MaskGenAlgorithm */

/* eslint-enable */
