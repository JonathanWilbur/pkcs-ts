/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "x500-ts/dist/node/modules/AuthenticationFramework/Extensions.ta";

/* START_OF_SYMBOL_DEFINITION ExtensionRequest */
/**
 * @summary ExtensionRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionRequest  ::=  Extensions
 * ```
 */
export type ExtensionRequest = Extensions; // DefinedType
/* END_OF_SYMBOL_DEFINITION ExtensionRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionRequest */
let _cached_decoder_for_ExtensionRequest: $.ASN1Decoder<ExtensionRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionRequest */

/* START_OF_SYMBOL_DEFINITION _decode_ExtensionRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionRequest} The decoded data structure.
 */
export function _decode_ExtensionRequest(el: _Element) {
    if (!_cached_decoder_for_ExtensionRequest) {
        _cached_decoder_for_ExtensionRequest = _decode_Extensions;
    }
    return _cached_decoder_for_ExtensionRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtensionRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionRequest */
let _cached_encoder_for_ExtensionRequest: $.ASN1Encoder<ExtensionRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionRequest */

/* START_OF_SYMBOL_DEFINITION _encode_ExtensionRequest */
/**
 * @summary Encodes a(n) ExtensionRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionRequest, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionRequest(
    value: ExtensionRequest,
    elGetter: $.ASN1Encoder<ExtensionRequest>
) {
    if (!_cached_encoder_for_ExtensionRequest) {
        _cached_encoder_for_ExtensionRequest = _encode_Extensions;
    }
    return _cached_encoder_for_ExtensionRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtensionRequest */

/* eslint-enable */
