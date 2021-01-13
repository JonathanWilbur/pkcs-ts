/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from "x500-ts/dist/node/modules/AuthenticationFramework/CertificateList.ta";

/* START_OF_SYMBOL_DEFINITION CertificateRevocationLists */
/**
 * @summary CertificateRevocationLists
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateRevocationLists  ::=  SET OF CertificateList
 * ```
 */
export type CertificateRevocationLists = CertificateList[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION CertificateRevocationLists */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateRevocationLists */
let _cached_decoder_for_CertificateRevocationLists: $.ASN1Decoder<CertificateRevocationLists> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateRevocationLists */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateRevocationLists */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateRevocationLists
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateRevocationLists} The decoded data structure.
 */
export function _decode_CertificateRevocationLists(el: _Element) {
    if (!_cached_decoder_for_CertificateRevocationLists) {
        _cached_decoder_for_CertificateRevocationLists = $._decodeSetOf<CertificateList>(
            () => _decode_CertificateList
        );
    }
    return _cached_decoder_for_CertificateRevocationLists(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateRevocationLists */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateRevocationLists */
let _cached_encoder_for_CertificateRevocationLists: $.ASN1Encoder<CertificateRevocationLists> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateRevocationLists */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateRevocationLists */
/**
 * @summary Encodes a(n) CertificateRevocationLists into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateRevocationLists, encoded as an ASN.1 Element.
 */
export function _encode_CertificateRevocationLists(
    value: CertificateRevocationLists,
    elGetter: $.ASN1Encoder<CertificateRevocationLists>
) {
    if (!_cached_encoder_for_CertificateRevocationLists) {
        _cached_encoder_for_CertificateRevocationLists = $._encodeSetOf<CertificateList>(
            () => _encode_CertificateList,
            $.BER
        );
    }
    return _cached_encoder_for_CertificateRevocationLists(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateRevocationLists */

/* eslint-enable */
