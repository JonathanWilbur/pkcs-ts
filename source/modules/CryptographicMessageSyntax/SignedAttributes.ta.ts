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

/* START_OF_SYMBOL_DEFINITION SignedAttributes */
/**
 * @summary SignedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedAttributes  ::=  SET SIZE (1..MAX) OF Attribute
 * ```
 */
export type SignedAttributes = Attribute[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SignedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedAttributes */
let _cached_decoder_for_SignedAttributes: $.ASN1Decoder<SignedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_SignedAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) SignedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedAttributes} The decoded data structure.
 */
export function _decode_SignedAttributes(el: _Element) {
    if (!_cached_decoder_for_SignedAttributes) {
        _cached_decoder_for_SignedAttributes = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_SignedAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedAttributes */
let _cached_encoder_for_SignedAttributes: $.ASN1Encoder<SignedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_SignedAttributes */
/**
 * @summary Encodes a(n) SignedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_SignedAttributes(
    value: SignedAttributes,
    elGetter: $.ASN1Encoder<SignedAttributes>
) {
    if (!_cached_encoder_for_SignedAttributes) {
        _cached_encoder_for_SignedAttributes = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_SignedAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignedAttributes */

/* eslint-enable */
