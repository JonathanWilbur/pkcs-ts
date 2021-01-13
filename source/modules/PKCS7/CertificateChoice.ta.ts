/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "x500-ts/dist/node/modules/AttributeCertificateDefinitions/AttributeCertificate.ta";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "x500-ts/dist/node/modules/AuthenticationFramework/Certificate.ta";
import {
    ExtendedCertificate,
    _decode_ExtendedCertificate,
    _encode_ExtendedCertificate,
} from "../PKCS7/ExtendedCertificate.ta";

/* START_OF_SYMBOL_DEFINITION CertificateChoice */
/**
 * @summary CertificateChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateChoice  ::=  CHOICE {
 *     certificate           Certificate,
 *     extendedCertificate   [0]  ExtendedCertificate, -- Obsolete
 *     attributeCertificate  [1]  AttributeCertificate
 * }
 * ```
 */
export type CertificateChoice =
    | { certificate: Certificate } /* CHOICE_ALT_ROOT */
    | { extendedCertificate: ExtendedCertificate } /* CHOICE_ALT_ROOT */
    | { attributeCertificate: AttributeCertificate } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION CertificateChoice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateChoice */
let _cached_decoder_for_CertificateChoice: $.ASN1Decoder<CertificateChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateChoice */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateChoice */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateChoice} The decoded data structure.
 */
export function _decode_CertificateChoice(el: _Element) {
    if (!_cached_decoder_for_CertificateChoice) {
        _cached_decoder_for_CertificateChoice = $._decode_inextensible_choice<CertificateChoice>(
            {
                "UNIVERSAL 16": ["certificate", _decode_Certificate],
                "CONTEXT 0": [
                    "extendedCertificate",
                    $._decode_implicit<ExtendedCertificate>(
                        () => _decode_ExtendedCertificate
                    ),
                ],
                "CONTEXT 1": [
                    "attributeCertificate",
                    $._decode_implicit<AttributeCertificate>(
                        () => _decode_AttributeCertificate
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertificateChoice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateChoice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateChoice */
let _cached_encoder_for_CertificateChoice: $.ASN1Encoder<CertificateChoice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateChoice */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateChoice */
/**
 * @summary Encodes a(n) CertificateChoice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateChoice, encoded as an ASN.1 Element.
 */
export function _encode_CertificateChoice(
    value: CertificateChoice,
    elGetter: $.ASN1Encoder<CertificateChoice>
) {
    if (!_cached_encoder_for_CertificateChoice) {
        _cached_encoder_for_CertificateChoice = $._encode_choice<CertificateChoice>(
            {
                certificate: _encode_Certificate,
                extendedCertificate: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ExtendedCertificate,
                    $.BER
                ),
                attributeCertificate: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeCertificate,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertificateChoice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateChoice */

/* eslint-enable */
