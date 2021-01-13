/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION RC2ParameterVersion */
/**
 * @summary RC2ParameterVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RC2ParameterVersion  ::=  INTEGER
 * ```
 */
export type RC2ParameterVersion = INTEGER;
/* END_OF_SYMBOL_DEFINITION RC2ParameterVersion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RC2ParameterVersion */
let _cached_decoder_for_RC2ParameterVersion: $.ASN1Decoder<RC2ParameterVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RC2ParameterVersion */

/* START_OF_SYMBOL_DEFINITION _decode_RC2ParameterVersion */
/**
 * @summary Decodes an ASN.1 element into a(n) RC2ParameterVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RC2ParameterVersion} The decoded data structure.
 */
export function _decode_RC2ParameterVersion(el: _Element) {
    if (!_cached_decoder_for_RC2ParameterVersion) {
        _cached_decoder_for_RC2ParameterVersion = $._decodeInteger;
    }
    return _cached_decoder_for_RC2ParameterVersion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RC2ParameterVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RC2ParameterVersion */
let _cached_encoder_for_RC2ParameterVersion: $.ASN1Encoder<RC2ParameterVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RC2ParameterVersion */

/* START_OF_SYMBOL_DEFINITION _encode_RC2ParameterVersion */
/**
 * @summary Encodes a(n) RC2ParameterVersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RC2ParameterVersion, encoded as an ASN.1 Element.
 */
export function _encode_RC2ParameterVersion(
    value: RC2ParameterVersion,
    elGetter: $.ASN1Encoder<RC2ParameterVersion>
) {
    if (!_cached_encoder_for_RC2ParameterVersion) {
        _cached_encoder_for_RC2ParameterVersion = $._encodeInteger;
    }
    return _cached_encoder_for_RC2ParameterVersion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RC2ParameterVersion */

/* eslint-enable */
