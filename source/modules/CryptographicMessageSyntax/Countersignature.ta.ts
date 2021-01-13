/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SignerInfo,
    _decode_SignerInfo,
    _encode_SignerInfo,
} from "../CryptographicMessageSyntax/SignerInfo.ta";
export {
    SignerInfo,
    _decode_SignerInfo,
    _encode_SignerInfo,
} from "../CryptographicMessageSyntax/SignerInfo.ta";

/* START_OF_SYMBOL_DEFINITION Countersignature */
/**
 * @summary Countersignature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Countersignature  ::=  SignerInfo
 * ```
 */
export type Countersignature = SignerInfo; // DefinedType
/* END_OF_SYMBOL_DEFINITION Countersignature */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Countersignature */
let _cached_decoder_for_Countersignature: $.ASN1Decoder<Countersignature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Countersignature */

/* START_OF_SYMBOL_DEFINITION _decode_Countersignature */
/**
 * @summary Decodes an ASN.1 element into a(n) Countersignature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Countersignature} The decoded data structure.
 */
export function _decode_Countersignature(el: _Element) {
    if (!_cached_decoder_for_Countersignature) {
        _cached_decoder_for_Countersignature = _decode_SignerInfo;
    }
    return _cached_decoder_for_Countersignature(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Countersignature */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Countersignature */
let _cached_encoder_for_Countersignature: $.ASN1Encoder<Countersignature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Countersignature */

/* START_OF_SYMBOL_DEFINITION _encode_Countersignature */
/**
 * @summary Encodes a(n) Countersignature into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Countersignature, encoded as an ASN.1 Element.
 */
export function _encode_Countersignature(
    value: Countersignature,
    elGetter: $.ASN1Encoder<Countersignature>
) {
    if (!_cached_encoder_for_Countersignature) {
        _cached_encoder_for_Countersignature = _encode_SignerInfo;
    }
    return _cached_encoder_for_Countersignature(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Countersignature */

/* eslint-enable */
