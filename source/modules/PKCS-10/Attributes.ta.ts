/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../PKCS-10/Attribute.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../PKCS-10/Attribute.ta";

/* START_OF_SYMBOL_DEFINITION Attributes */
/**
 * @summary Attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attributes { ATTRIBUTE:IOSet }  ::=  SET OF Attribute{{ IOSet }}
 * ```
 */
export type Attributes = Attribute[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION Attributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attributes */
let _cached_decoder_for_Attributes: $.ASN1Decoder<Attributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attributes */

/* START_OF_SYMBOL_DEFINITION _decode_Attributes */
/**
 * @summary Decodes an ASN.1 element into a(n) Attributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attributes} The decoded data structure.
 */
export function _decode_Attributes(el: _Element) {
    if (!_cached_decoder_for_Attributes) {
        _cached_decoder_for_Attributes = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_Attributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attributes */
let _cached_encoder_for_Attributes: $.ASN1Encoder<Attributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attributes */

/* START_OF_SYMBOL_DEFINITION _encode_Attributes */
/**
 * @summary Encodes a(n) Attributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attributes, encoded as an ASN.1 Element.
 */
export function _encode_Attributes(
    value: Attributes,
    elGetter: $.ASN1Encoder<Attributes>
) {
    if (!_cached_encoder_for_Attributes) {
        _cached_encoder_for_Attributes = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_Attributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attributes */

/* eslint-enable */
