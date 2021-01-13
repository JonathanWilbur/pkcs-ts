/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { OPEN } from "../CryptographicMessageSyntax/OPEN.oca";

/* START_OF_SYMBOL_DEFINITION AttributeValue */
/**
 * @summary AttributeValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValue  ::=  OPEN.&Type
 * ```
 */
export type AttributeValue = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION AttributeValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValue */
let _cached_decoder_for_AttributeValue: $.ASN1Decoder<AttributeValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValue */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeValue */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValue} The decoded data structure.
 */
export function _decode_AttributeValue(el: _Element) {
    if (!_cached_decoder_for_AttributeValue) {
        _cached_decoder_for_AttributeValue = $._decodeAny;
    }
    return _cached_decoder_for_AttributeValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValue */
let _cached_encoder_for_AttributeValue: $.ASN1Encoder<AttributeValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValue */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeValue */
/**
 * @summary Encodes a(n) AttributeValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValue, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValue(
    value: AttributeValue,
    elGetter: $.ASN1Encoder<AttributeValue>
) {
    if (!_cached_encoder_for_AttributeValue) {
        _cached_encoder_for_AttributeValue = $._encodeAny;
    }
    return _cached_encoder_for_AttributeValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeValue */

/* eslint-enable */
