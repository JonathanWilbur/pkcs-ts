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

/* START_OF_SYMBOL_DEFINITION AuthAttributes */
/**
 * @summary AuthAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthAttributes  ::=  SET SIZE (1..MAX) OF Attribute
 * ```
 */
export type AuthAttributes = Attribute[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AuthAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthAttributes */
let _cached_decoder_for_AuthAttributes: $.ASN1Decoder<AuthAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_AuthAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthAttributes} The decoded data structure.
 */
export function _decode_AuthAttributes(el: _Element) {
    if (!_cached_decoder_for_AuthAttributes) {
        _cached_decoder_for_AuthAttributes = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_AuthAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthAttributes */
let _cached_encoder_for_AuthAttributes: $.ASN1Encoder<AuthAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_AuthAttributes */
/**
 * @summary Encodes a(n) AuthAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthAttributes, encoded as an ASN.1 Element.
 */
export function _encode_AuthAttributes(
    value: AuthAttributes,
    elGetter: $.ASN1Encoder<AuthAttributes>
) {
    if (!_cached_encoder_for_AuthAttributes) {
        _cached_encoder_for_AuthAttributes = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_AuthAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthAttributes */

/* eslint-enable */
