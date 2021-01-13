/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateObject,
    _get_decoder_for_CertificateObject,
    _get_encoder_for_CertificateObject,
} from "../PKCS-15/CertificateObject.ta";
import {
    CVCertificateAttributes,
    _decode_CVCertificateAttributes,
    _encode_CVCertificateAttributes,
} from "../PKCS-15/CVCertificateAttributes.ta";
import {
    PGPCertificateAttributes,
    _decode_PGPCertificateAttributes,
    _encode_PGPCertificateAttributes,
} from "../PKCS-15/PGPCertificateAttributes.ta";
import {
    SPKICertificateAttributes,
    _decode_SPKICertificateAttributes,
    _encode_SPKICertificateAttributes,
} from "../PKCS-15/SPKICertificateAttributes.ta";
import {
    WTLSCertificateAttributes,
    _decode_WTLSCertificateAttributes,
    _encode_WTLSCertificateAttributes,
} from "../PKCS-15/WTLSCertificateAttributes.ta";
import {
    X509AttributeCertificateAttributes,
    _decode_X509AttributeCertificateAttributes,
    _encode_X509AttributeCertificateAttributes,
} from "../PKCS-15/X509AttributeCertificateAttributes.ta";
import {
    X509CertificateAttributes,
    _decode_X509CertificateAttributes,
    _encode_X509CertificateAttributes,
} from "../PKCS-15/X509CertificateAttributes.ta";
import {
    X9_68CertificateAttributes,
    _decode_X9_68CertificateAttributes,
    _encode_X9_68CertificateAttributes,
} from "../PKCS-15/X9-68CertificateAttributes.ta";
export {
    CertificateObject,
    _get_decoder_for_CertificateObject,
    _get_encoder_for_CertificateObject,
} from "../PKCS-15/CertificateObject.ta";
export {
    CVCertificateAttributes,
    _decode_CVCertificateAttributes,
    _encode_CVCertificateAttributes,
} from "../PKCS-15/CVCertificateAttributes.ta";
export {
    PGPCertificateAttributes,
    _decode_PGPCertificateAttributes,
    _encode_PGPCertificateAttributes,
} from "../PKCS-15/PGPCertificateAttributes.ta";
export {
    SPKICertificateAttributes,
    _decode_SPKICertificateAttributes,
    _encode_SPKICertificateAttributes,
} from "../PKCS-15/SPKICertificateAttributes.ta";
export {
    WTLSCertificateAttributes,
    _decode_WTLSCertificateAttributes,
    _encode_WTLSCertificateAttributes,
} from "../PKCS-15/WTLSCertificateAttributes.ta";
export {
    X509AttributeCertificateAttributes,
    _decode_X509AttributeCertificateAttributes,
    _encode_X509AttributeCertificateAttributes,
} from "../PKCS-15/X509AttributeCertificateAttributes.ta";
export {
    X509CertificateAttributes,
    _decode_X509CertificateAttributes,
    _encode_X509CertificateAttributes,
} from "../PKCS-15/X509CertificateAttributes.ta";
export {
    X9_68CertificateAttributes,
    _decode_X9_68CertificateAttributes,
    _encode_X9_68CertificateAttributes,
} from "../PKCS-15/X9-68CertificateAttributes.ta";

/* START_OF_SYMBOL_DEFINITION CertificateType */
/**
 * @summary CertificateType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateType  ::=  CHOICE {
 *     x509Certificate  CertificateObject { X509CertificateAttributes},
 *     x509AttributeCertificate [0] CertificateObject {X509AttributeCertificateAttributes},
 *     spkiCertificate [1] CertificateObject {SPKICertificateAttributes},
 *     pgpCertificate  [2] CertificateObject {PGPCertificateAttributes},
 *     wtlsCertificate [3] CertificateObject {WTLSCertificateAttributes},
 *     x9-68Certificate [4] CertificateObject {X9-68CertificateAttributes},
 *     ...,
 *     cvCertificate [5] CertificateObject {CVCertificateAttributes}
 * }
 * ```
 */
export type CertificateType =
    | {
          x509Certificate: CertificateObject<X509CertificateAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          x509AttributeCertificate: CertificateObject<X509AttributeCertificateAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          spkiCertificate: CertificateObject<SPKICertificateAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          pgpCertificate: CertificateObject<PGPCertificateAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          wtlsCertificate: CertificateObject<WTLSCertificateAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          x9_68Certificate: CertificateObject<X9_68CertificateAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          cvCertificate: CertificateObject<CVCertificateAttributes>;
      } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertificateType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateType */
let _cached_decoder_for_CertificateType: $.ASN1Decoder<CertificateType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateType */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateType */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateType} The decoded data structure.
 */
export function _decode_CertificateType(el: _Element) {
    if (!_cached_decoder_for_CertificateType) {
        _cached_decoder_for_CertificateType = $._decode_extensible_choice<CertificateType>(
            {
                "UNIVERSAL 16": [
                    "x509Certificate",
                    _get_decoder_for_CertificateObject<X509CertificateAttributes>(
                        _decode_X509CertificateAttributes
                    ),
                ],
                "CONTEXT 0": [
                    "x509AttributeCertificate",
                    $._decode_implicit<
                        CertificateObject<X509AttributeCertificateAttributes>
                    >(() =>
                        _get_decoder_for_CertificateObject<X509AttributeCertificateAttributes>(
                            _decode_X509AttributeCertificateAttributes
                        )
                    ),
                ],
                "CONTEXT 1": [
                    "spkiCertificate",
                    $._decode_implicit<
                        CertificateObject<SPKICertificateAttributes>
                    >(() =>
                        _get_decoder_for_CertificateObject<SPKICertificateAttributes>(
                            _decode_SPKICertificateAttributes
                        )
                    ),
                ],
                "CONTEXT 2": [
                    "pgpCertificate",
                    $._decode_implicit<
                        CertificateObject<PGPCertificateAttributes>
                    >(() =>
                        _get_decoder_for_CertificateObject<PGPCertificateAttributes>(
                            _decode_PGPCertificateAttributes
                        )
                    ),
                ],
                "CONTEXT 3": [
                    "wtlsCertificate",
                    $._decode_implicit<
                        CertificateObject<WTLSCertificateAttributes>
                    >(() =>
                        _get_decoder_for_CertificateObject<WTLSCertificateAttributes>(
                            _decode_WTLSCertificateAttributes
                        )
                    ),
                ],
                "CONTEXT 4": [
                    "x9_68Certificate",
                    $._decode_implicit<
                        CertificateObject<X9_68CertificateAttributes>
                    >(() =>
                        _get_decoder_for_CertificateObject<X9_68CertificateAttributes>(
                            _decode_X9_68CertificateAttributes
                        )
                    ),
                ],
                "CONTEXT 5": [
                    "cvCertificate",
                    $._decode_implicit<
                        CertificateObject<CVCertificateAttributes>
                    >(() =>
                        _get_decoder_for_CertificateObject<CVCertificateAttributes>(
                            _decode_CVCertificateAttributes
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertificateType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateType */
let _cached_encoder_for_CertificateType: $.ASN1Encoder<CertificateType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateType */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateType */
/**
 * @summary Encodes a(n) CertificateType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateType, encoded as an ASN.1 Element.
 */
export function _encode_CertificateType(
    value: CertificateType,
    elGetter: $.ASN1Encoder<CertificateType>
) {
    if (!_cached_encoder_for_CertificateType) {
        _cached_encoder_for_CertificateType = $._encode_choice<CertificateType>(
            {
                x509Certificate: _get_encoder_for_CertificateObject<X509CertificateAttributes>(
                    _encode_X509CertificateAttributes
                ),
                x509AttributeCertificate: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        _get_encoder_for_CertificateObject<X509AttributeCertificateAttributes>(
                            _encode_X509AttributeCertificateAttributes
                        ),
                    $.BER
                ),
                spkiCertificate: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_CertificateObject<SPKICertificateAttributes>(
                            _encode_SPKICertificateAttributes
                        ),
                    $.BER
                ),
                pgpCertificate: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        _get_encoder_for_CertificateObject<PGPCertificateAttributes>(
                            _encode_PGPCertificateAttributes
                        ),
                    $.BER
                ),
                wtlsCertificate: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () =>
                        _get_encoder_for_CertificateObject<WTLSCertificateAttributes>(
                            _encode_WTLSCertificateAttributes
                        ),
                    $.BER
                ),
                x9_68Certificate: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () =>
                        _get_encoder_for_CertificateObject<X9_68CertificateAttributes>(
                            _encode_X9_68CertificateAttributes
                        ),
                    $.BER
                ),
                cvCertificate: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () =>
                        _get_encoder_for_CertificateObject<CVCertificateAttributes>(
                            _encode_CVCertificateAttributes
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertificateType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateType */

/* eslint-enable */
