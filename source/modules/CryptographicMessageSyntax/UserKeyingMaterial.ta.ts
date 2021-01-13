/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION UserKeyingMaterial */
/**
 * @summary UserKeyingMaterial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserKeyingMaterial  ::=  OCTET STRING
 * ```
 */
export type UserKeyingMaterial = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION UserKeyingMaterial */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UserKeyingMaterial */
let _cached_decoder_for_UserKeyingMaterial: $.ASN1Decoder<UserKeyingMaterial> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UserKeyingMaterial */

/* START_OF_SYMBOL_DEFINITION _decode_UserKeyingMaterial */
/**
 * @summary Decodes an ASN.1 element into a(n) UserKeyingMaterial
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserKeyingMaterial} The decoded data structure.
 */
export function _decode_UserKeyingMaterial(el: _Element) {
    if (!_cached_decoder_for_UserKeyingMaterial) {
        _cached_decoder_for_UserKeyingMaterial = $._decodeOctetString;
    }
    return _cached_decoder_for_UserKeyingMaterial(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UserKeyingMaterial */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UserKeyingMaterial */
let _cached_encoder_for_UserKeyingMaterial: $.ASN1Encoder<UserKeyingMaterial> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UserKeyingMaterial */

/* START_OF_SYMBOL_DEFINITION _encode_UserKeyingMaterial */
/**
 * @summary Encodes a(n) UserKeyingMaterial into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserKeyingMaterial, encoded as an ASN.1 Element.
 */
export function _encode_UserKeyingMaterial(
    value: UserKeyingMaterial,
    elGetter: $.ASN1Encoder<UserKeyingMaterial>
) {
    if (!_cached_encoder_for_UserKeyingMaterial) {
        _cached_encoder_for_UserKeyingMaterial = $._encodeOctetString;
    }
    return _cached_encoder_for_UserKeyingMaterial(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UserKeyingMaterial */

/* eslint-enable */
