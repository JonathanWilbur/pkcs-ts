/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    FingerPrint,
    _decode_FingerPrint,
    _encode_FingerPrint,
} from "../PKCS-15/FingerPrint.ta";
import {
    IrisScan,
    _decode_IrisScan,
    _encode_IrisScan,
} from "../PKCS-15/IrisScan.ta";
export {
    FingerPrint,
    _decode_FingerPrint,
    _encode_FingerPrint,
} from "../PKCS-15/FingerPrint.ta";
export {
    IrisScan,
    _decode_IrisScan,
    _encode_IrisScan,
} from "../PKCS-15/IrisScan.ta";

/* START_OF_SYMBOL_DEFINITION BiometricType */
/**
 * @summary BiometricType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricType  ::=  CHOICE {
 *     fingerPrint FingerPrint,
 *     irisScan [0] IrisScan,
 *     -- Possible extensions:
 *     -- voiceScan VoiceScan,
 *     -- faceScan FaceScan,
 *     -- retinaScan Retinascan,
 *     -- handGeometry HandGeometry,
 *     -- writeDynamics WriteDynamics,
 *     -- keyStrokeDynamicsKeyStrokeDynamics,
 *     -- lipDynamics LipDynamics,
 *     ... -- For future extensions
 * }
 * ```
 */
export type BiometricType =
    | { fingerPrint: FingerPrint } /* CHOICE_ALT_ROOT */
    | { irisScan: IrisScan } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION BiometricType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricType */
let _cached_decoder_for_BiometricType: $.ASN1Decoder<BiometricType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricType */

/* START_OF_SYMBOL_DEFINITION _decode_BiometricType */
/**
 * @summary Decodes an ASN.1 element into a(n) BiometricType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricType} The decoded data structure.
 */
export function _decode_BiometricType(el: _Element) {
    if (!_cached_decoder_for_BiometricType) {
        _cached_decoder_for_BiometricType = $._decode_extensible_choice<BiometricType>(
            {
                "UNIVERSAL 16": ["fingerPrint", _decode_FingerPrint],
                "CONTEXT 0": [
                    "irisScan",
                    $._decode_implicit<IrisScan>(() => _decode_IrisScan),
                ],
            }
        );
    }
    return _cached_decoder_for_BiometricType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BiometricType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricType */
let _cached_encoder_for_BiometricType: $.ASN1Encoder<BiometricType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricType */

/* START_OF_SYMBOL_DEFINITION _encode_BiometricType */
/**
 * @summary Encodes a(n) BiometricType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricType, encoded as an ASN.1 Element.
 */
export function _encode_BiometricType(
    value: BiometricType,
    elGetter: $.ASN1Encoder<BiometricType>
) {
    if (!_cached_encoder_for_BiometricType) {
        _cached_encoder_for_BiometricType = $._encode_choice<BiometricType>(
            {
                fingerPrint: _encode_FingerPrint,
                irisScan: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_IrisScan,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BiometricType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BiometricType */

/* eslint-enable */
