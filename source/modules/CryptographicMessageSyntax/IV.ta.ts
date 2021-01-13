/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION IV */
/**
 * @summary IV
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IV  ::=  OCTET STRING
 * ```
 */
export type IV = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION IV */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IV */
let _cached_decoder_for_IV: $.ASN1Decoder<IV> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IV */

/* START_OF_SYMBOL_DEFINITION _decode_IV */
/**
 * @summary Decodes an ASN.1 element into a(n) IV
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IV} The decoded data structure.
 */
export function _decode_IV(el: _Element) {
    if (!_cached_decoder_for_IV) {
        _cached_decoder_for_IV = $._decodeOctetString;
    }
    return _cached_decoder_for_IV(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IV */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IV */
let _cached_encoder_for_IV: $.ASN1Encoder<IV> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IV */

/* START_OF_SYMBOL_DEFINITION _encode_IV */
/**
 * @summary Encodes a(n) IV into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IV, encoded as an ASN.1 Element.
 */
export function _encode_IV(value: IV, elGetter: $.ASN1Encoder<IV>) {
    if (!_cached_encoder_for_IV) {
        _cached_encoder_for_IV = $._encodeOctetString;
    }
    return _cached_encoder_for_IV(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IV */

/* eslint-enable */
