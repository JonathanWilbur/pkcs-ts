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

/* START_OF_SYMBOL_DEFINITION PSourceAlgorithm */
/**
 * @summary PSourceAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PSourceAlgorithm  ::=  AlgorithmIdentifier { {PKCS1PSourceAlgorithms} }
 * ```
 */
export type PSourceAlgorithm = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION PSourceAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PSourceAlgorithm */
let _cached_decoder_for_PSourceAlgorithm: $.ASN1Decoder<PSourceAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PSourceAlgorithm */

/* START_OF_SYMBOL_DEFINITION _decode_PSourceAlgorithm */
/**
 * @summary Decodes an ASN.1 element into a(n) PSourceAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PSourceAlgorithm} The decoded data structure.
 */
export function _decode_PSourceAlgorithm(el: _Element) {
    if (!_cached_decoder_for_PSourceAlgorithm) {
        _cached_decoder_for_PSourceAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PSourceAlgorithm(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PSourceAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PSourceAlgorithm */
let _cached_encoder_for_PSourceAlgorithm: $.ASN1Encoder<PSourceAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PSourceAlgorithm */

/* START_OF_SYMBOL_DEFINITION _encode_PSourceAlgorithm */
/**
 * @summary Encodes a(n) PSourceAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PSourceAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_PSourceAlgorithm(
    value: PSourceAlgorithm,
    elGetter: $.ASN1Encoder<PSourceAlgorithm>
) {
    if (!_cached_encoder_for_PSourceAlgorithm) {
        _cached_encoder_for_PSourceAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PSourceAlgorithm(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PSourceAlgorithm */

/* eslint-enable */
