/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Data */
/**
 * @summary Data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Data  ::=  OCTET STRING
 * ```
 */
export type Data = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Data */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Data */
let _cached_decoder_for_Data: $.ASN1Decoder<Data> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Data */

/* START_OF_SYMBOL_DEFINITION _decode_Data */
/**
 * @summary Decodes an ASN.1 element into a(n) Data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Data} The decoded data structure.
 */
export function _decode_Data(el: _Element) {
    if (!_cached_decoder_for_Data) {
        _cached_decoder_for_Data = $._decodeOctetString;
    }
    return _cached_decoder_for_Data(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Data */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Data */
let _cached_encoder_for_Data: $.ASN1Encoder<Data> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Data */

/* START_OF_SYMBOL_DEFINITION _encode_Data */
/**
 * @summary Encodes a(n) Data into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Data, encoded as an ASN.1 Element.
 */
export function _encode_Data(value: Data, elGetter: $.ASN1Encoder<Data>) {
    if (!_cached_encoder_for_Data) {
        _cached_encoder_for_Data = $._encodeOctetString;
    }
    return _cached_encoder_for_Data(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Data */

/* eslint-enable */
