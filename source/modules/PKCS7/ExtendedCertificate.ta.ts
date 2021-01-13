/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "x500-ts/dist/node/modules/AuthenticationFramework/SIGNED.ta";
import {
    ExtendedCertificateInfo,
    _decode_ExtendedCertificateInfo,
    _encode_ExtendedCertificateInfo,
} from "../PKCS7/ExtendedCertificateInfo.ta";

/* START_OF_SYMBOL_DEFINITION ExtendedCertificate */
/**
 * @summary ExtendedCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedCertificate  ::=
 *     SIGNED{ExtendedCertificateInfo}
 * ```
 */
export type ExtendedCertificate = SIGNED<ExtendedCertificateInfo>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ExtendedCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedCertificate */
let _cached_decoder_for_ExtendedCertificate: $.ASN1Decoder<ExtendedCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedCertificate */

/* START_OF_SYMBOL_DEFINITION _decode_ExtendedCertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedCertificate} The decoded data structure.
 */
export function _decode_ExtendedCertificate(el: _Element) {
    if (!_cached_decoder_for_ExtendedCertificate) {
        _cached_decoder_for_ExtendedCertificate = _get_decoder_for_SIGNED<ExtendedCertificateInfo>(
            _decode_ExtendedCertificateInfo
        );
    }
    return _cached_decoder_for_ExtendedCertificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtendedCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedCertificate */
let _cached_encoder_for_ExtendedCertificate: $.ASN1Encoder<ExtendedCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedCertificate */

/* START_OF_SYMBOL_DEFINITION _encode_ExtendedCertificate */
/**
 * @summary Encodes a(n) ExtendedCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedCertificate, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedCertificate(
    value: ExtendedCertificate,
    elGetter: $.ASN1Encoder<ExtendedCertificate>
) {
    if (!_cached_encoder_for_ExtendedCertificate) {
        _cached_encoder_for_ExtendedCertificate = _get_encoder_for_SIGNED<ExtendedCertificateInfo>(
            _encode_ExtendedCertificateInfo
        );
    }
    return _cached_encoder_for_ExtendedCertificate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtendedCertificate */

/* eslint-enable */
