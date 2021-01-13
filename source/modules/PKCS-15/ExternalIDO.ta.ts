/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta";
export {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta";
export { PKCS15_OPAQUE } from "../PKCS-15/PKCS15-OPAQUE.oca";

/* START_OF_SYMBOL_DEFINITION ExternalIDO */
/**
 * @summary ExternalIDO
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExternalIDO  ::=  ObjectValue {PKCS15-OPAQUE.&Type} (CONSTRAINED BY {
 *     -- All data objects must be defined in
 *     -- accordance with ISO/IEC 7816-6 --})
 * ```
 */
export type ExternalIDO = ObjectValue<_Element>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ExternalIDO */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExternalIDO */
let _cached_decoder_for_ExternalIDO: $.ASN1Decoder<ExternalIDO> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExternalIDO */

/* START_OF_SYMBOL_DEFINITION _decode_ExternalIDO */
/**
 * @summary Decodes an ASN.1 element into a(n) ExternalIDO
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExternalIDO} The decoded data structure.
 */
export function _decode_ExternalIDO(el: _Element) {
    if (!_cached_decoder_for_ExternalIDO) {
        _cached_decoder_for_ExternalIDO = _get_decoder_for_ObjectValue<_Element>(
            $._decodeAny
        );
    }
    return _cached_decoder_for_ExternalIDO(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExternalIDO */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExternalIDO */
let _cached_encoder_for_ExternalIDO: $.ASN1Encoder<ExternalIDO> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExternalIDO */

/* START_OF_SYMBOL_DEFINITION _encode_ExternalIDO */
/**
 * @summary Encodes a(n) ExternalIDO into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalIDO, encoded as an ASN.1 Element.
 */
export function _encode_ExternalIDO(
    value: ExternalIDO,
    elGetter: $.ASN1Encoder<ExternalIDO>
) {
    if (!_cached_encoder_for_ExternalIDO) {
        _cached_encoder_for_ExternalIDO = _get_encoder_for_ObjectValue<_Element>(
            $._encodeAny
        );
    }
    return _cached_encoder_for_ExternalIDO(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExternalIDO */

/* eslint-enable */
