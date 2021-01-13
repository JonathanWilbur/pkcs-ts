/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CertificationRequestInfo_version */
/**
 * @summary CertificationRequestInfo_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificationRequestInfo-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertificationRequestInfo_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION CertificationRequestInfo_version */

/* START_OF_SYMBOL_DEFINITION CertificationRequestInfo_version_v1 */
/**
 * @summary CertificationRequestInfo_version_v1
 * @constant
 * @type {number}
 */
export const CertificationRequestInfo_version_v1: CertificationRequestInfo_version = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION CertificationRequestInfo_version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary CertificationRequestInfo_version_v1
 * @constant
 * @type {number}
 */
export const v1: CertificationRequestInfo_version = CertificationRequestInfo_version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificationRequestInfo_version */
let _cached_decoder_for_CertificationRequestInfo_version: $.ASN1Decoder<CertificationRequestInfo_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificationRequestInfo_version */

/* START_OF_SYMBOL_DEFINITION _decode_CertificationRequestInfo_version */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificationRequestInfo_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificationRequestInfo_version} The decoded data structure.
 */
export function _decode_CertificationRequestInfo_version(el: _Element) {
    if (!_cached_decoder_for_CertificationRequestInfo_version) {
        _cached_decoder_for_CertificationRequestInfo_version = $._decodeInteger;
    }
    return _cached_decoder_for_CertificationRequestInfo_version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificationRequestInfo_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificationRequestInfo_version */
let _cached_encoder_for_CertificationRequestInfo_version: $.ASN1Encoder<CertificationRequestInfo_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificationRequestInfo_version */

/* START_OF_SYMBOL_DEFINITION _encode_CertificationRequestInfo_version */
/**
 * @summary Encodes a(n) CertificationRequestInfo_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificationRequestInfo_version, encoded as an ASN.1 Element.
 */
export function _encode_CertificationRequestInfo_version(
    value: CertificationRequestInfo_version,
    elGetter: $.ASN1Encoder<CertificationRequestInfo_version>
) {
    if (!_cached_encoder_for_CertificationRequestInfo_version) {
        _cached_encoder_for_CertificationRequestInfo_version = $._encodeInteger;
    }
    return _cached_encoder_for_CertificationRequestInfo_version(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificationRequestInfo_version */

/* eslint-enable */
