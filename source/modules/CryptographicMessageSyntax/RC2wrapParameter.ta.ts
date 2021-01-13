/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RC2ParameterVersion,
    _decode_RC2ParameterVersion,
    _encode_RC2ParameterVersion,
} from "../CryptographicMessageSyntax/RC2ParameterVersion.ta";
export {
    RC2ParameterVersion,
    _decode_RC2ParameterVersion,
    _encode_RC2ParameterVersion,
} from "../CryptographicMessageSyntax/RC2ParameterVersion.ta";

/* START_OF_SYMBOL_DEFINITION RC2wrapParameter */
/**
 * @summary RC2wrapParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RC2wrapParameter  ::=  RC2ParameterVersion
 * ```
 */
export type RC2wrapParameter = RC2ParameterVersion; // DefinedType
/* END_OF_SYMBOL_DEFINITION RC2wrapParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RC2wrapParameter */
let _cached_decoder_for_RC2wrapParameter: $.ASN1Decoder<RC2wrapParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RC2wrapParameter */

/* START_OF_SYMBOL_DEFINITION _decode_RC2wrapParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) RC2wrapParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RC2wrapParameter} The decoded data structure.
 */
export function _decode_RC2wrapParameter(el: _Element) {
    if (!_cached_decoder_for_RC2wrapParameter) {
        _cached_decoder_for_RC2wrapParameter = _decode_RC2ParameterVersion;
    }
    return _cached_decoder_for_RC2wrapParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RC2wrapParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RC2wrapParameter */
let _cached_encoder_for_RC2wrapParameter: $.ASN1Encoder<RC2wrapParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RC2wrapParameter */

/* START_OF_SYMBOL_DEFINITION _encode_RC2wrapParameter */
/**
 * @summary Encodes a(n) RC2wrapParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RC2wrapParameter, encoded as an ASN.1 Element.
 */
export function _encode_RC2wrapParameter(
    value: RC2wrapParameter,
    elGetter: $.ASN1Encoder<RC2wrapParameter>
) {
    if (!_cached_encoder_for_RC2wrapParameter) {
        _cached_encoder_for_RC2wrapParameter = _encode_RC2ParameterVersion;
    }
    return _cached_encoder_for_RC2wrapParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RC2wrapParameter */

/* eslint-enable */
