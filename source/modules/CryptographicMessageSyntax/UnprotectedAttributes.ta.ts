/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../CryptographicMessageSyntax/Attribute.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../CryptographicMessageSyntax/Attribute.ta";

/* START_OF_SYMBOL_DEFINITION UnprotectedAttributes */
/**
 * @summary UnprotectedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnprotectedAttributes  ::=  SET SIZE (1..MAX) OF Attribute
 * ```
 */
export type UnprotectedAttributes = Attribute[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION UnprotectedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnprotectedAttributes */
let _cached_decoder_for_UnprotectedAttributes: $.ASN1Decoder<UnprotectedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnprotectedAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_UnprotectedAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) UnprotectedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnprotectedAttributes} The decoded data structure.
 */
export function _decode_UnprotectedAttributes(el: _Element) {
    if (!_cached_decoder_for_UnprotectedAttributes) {
        _cached_decoder_for_UnprotectedAttributes = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_UnprotectedAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnprotectedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnprotectedAttributes */
let _cached_encoder_for_UnprotectedAttributes: $.ASN1Encoder<UnprotectedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnprotectedAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_UnprotectedAttributes */
/**
 * @summary Encodes a(n) UnprotectedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnprotectedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_UnprotectedAttributes(
    value: UnprotectedAttributes,
    elGetter: $.ASN1Encoder<UnprotectedAttributes>
) {
    if (!_cached_encoder_for_UnprotectedAttributes) {
        _cached_encoder_for_UnprotectedAttributes = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_UnprotectedAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnprotectedAttributes */

/* eslint-enable */
