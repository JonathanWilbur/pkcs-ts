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

/* START_OF_SYMBOL_DEFINITION UnauthAttributes */
/**
 * @summary UnauthAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnauthAttributes  ::=  SET SIZE (1..MAX) OF Attribute
 * ```
 */
export type UnauthAttributes = Attribute[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION UnauthAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnauthAttributes */
let _cached_decoder_for_UnauthAttributes: $.ASN1Decoder<UnauthAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnauthAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_UnauthAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) UnauthAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnauthAttributes} The decoded data structure.
 */
export function _decode_UnauthAttributes(el: _Element) {
    if (!_cached_decoder_for_UnauthAttributes) {
        _cached_decoder_for_UnauthAttributes = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_UnauthAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnauthAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnauthAttributes */
let _cached_encoder_for_UnauthAttributes: $.ASN1Encoder<UnauthAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnauthAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_UnauthAttributes */
/**
 * @summary Encodes a(n) UnauthAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnauthAttributes, encoded as an ASN.1 Element.
 */
export function _encode_UnauthAttributes(
    value: UnauthAttributes,
    elGetter: $.ASN1Encoder<UnauthAttributes>
) {
    if (!_cached_encoder_for_UnauthAttributes) {
        _cached_encoder_for_UnauthAttributes = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_UnauthAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnauthAttributes */

/* eslint-enable */
