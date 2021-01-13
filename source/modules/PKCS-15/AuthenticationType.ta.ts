/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AuthenticationObject,
    _get_decoder_for_AuthenticationObject,
    _get_encoder_for_AuthenticationObject,
} from "../PKCS-15/AuthenticationObject.ta";
import {
    AuthKeyAttributes,
    _decode_AuthKeyAttributes,
    _encode_AuthKeyAttributes,
} from "../PKCS-15/AuthKeyAttributes.ta";
import {
    BiometricAttributes,
    _decode_BiometricAttributes,
    _encode_BiometricAttributes,
} from "../PKCS-15/BiometricAttributes.ta";
import {
    ExternalAuthObjectAttributes,
    _decode_ExternalAuthObjectAttributes,
    _encode_ExternalAuthObjectAttributes,
} from "../PKCS-15/ExternalAuthObjectAttributes.ta";
import {
    PinAttributes,
    _decode_PinAttributes,
    _encode_PinAttributes,
} from "../PKCS-15/PinAttributes.ta";
export {
    AuthenticationObject,
    _get_decoder_for_AuthenticationObject,
    _get_encoder_for_AuthenticationObject,
} from "../PKCS-15/AuthenticationObject.ta";
export {
    AuthKeyAttributes,
    _decode_AuthKeyAttributes,
    _encode_AuthKeyAttributes,
} from "../PKCS-15/AuthKeyAttributes.ta";
export {
    BiometricAttributes,
    _decode_BiometricAttributes,
    _encode_BiometricAttributes,
} from "../PKCS-15/BiometricAttributes.ta";
export {
    ExternalAuthObjectAttributes,
    _decode_ExternalAuthObjectAttributes,
    _encode_ExternalAuthObjectAttributes,
} from "../PKCS-15/ExternalAuthObjectAttributes.ta";
export {
    PinAttributes,
    _decode_PinAttributes,
    _encode_PinAttributes,
} from "../PKCS-15/PinAttributes.ta";

/* START_OF_SYMBOL_DEFINITION AuthenticationType */
/**
 * @summary AuthenticationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationType  ::=  CHOICE {
 *     pin AuthenticationObject { PinAttributes },
 *     ...,
 *     biometricTemplate [0] AuthenticationObject {BiometricAttributes},
 *     authKey  [1] AuthenticationObject {AuthKeyAttributes},
 *     external [2] AuthenticationObject {ExternalAuthObjectAttributes}
 * }
 * ```
 */
export type AuthenticationType =
    | { pin: AuthenticationObject<PinAttributes> } /* CHOICE_ALT_ROOT */
    | {
          biometricTemplate: AuthenticationObject<BiometricAttributes>;
      } /* CHOICE_ALT_EXT */
    | { authKey: AuthenticationObject<AuthKeyAttributes> } /* CHOICE_ALT_EXT */
    | {
          external: AuthenticationObject<ExternalAuthObjectAttributes>;
      } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION AuthenticationType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationType */
let _cached_decoder_for_AuthenticationType: $.ASN1Decoder<AuthenticationType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationType */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenticationType */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationType} The decoded data structure.
 */
export function _decode_AuthenticationType(el: _Element) {
    if (!_cached_decoder_for_AuthenticationType) {
        _cached_decoder_for_AuthenticationType = $._decode_extensible_choice<AuthenticationType>(
            {
                "UNIVERSAL 16": [
                    "pin",
                    _get_decoder_for_AuthenticationObject<PinAttributes>(
                        _decode_PinAttributes
                    ),
                ],
                "CONTEXT 0": [
                    "biometricTemplate",
                    $._decode_implicit<
                        AuthenticationObject<BiometricAttributes>
                    >(() =>
                        _get_decoder_for_AuthenticationObject<BiometricAttributes>(
                            _decode_BiometricAttributes
                        )
                    ),
                ],
                "CONTEXT 1": [
                    "authKey",
                    $._decode_implicit<AuthenticationObject<AuthKeyAttributes>>(
                        () =>
                            _get_decoder_for_AuthenticationObject<AuthKeyAttributes>(
                                _decode_AuthKeyAttributes
                            )
                    ),
                ],
                "CONTEXT 2": [
                    "external",
                    $._decode_implicit<
                        AuthenticationObject<ExternalAuthObjectAttributes>
                    >(() =>
                        _get_decoder_for_AuthenticationObject<ExternalAuthObjectAttributes>(
                            _decode_ExternalAuthObjectAttributes
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_AuthenticationType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthenticationType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationType */
let _cached_encoder_for_AuthenticationType: $.ASN1Encoder<AuthenticationType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationType */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenticationType */
/**
 * @summary Encodes a(n) AuthenticationType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationType, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationType(
    value: AuthenticationType,
    elGetter: $.ASN1Encoder<AuthenticationType>
) {
    if (!_cached_encoder_for_AuthenticationType) {
        _cached_encoder_for_AuthenticationType = $._encode_choice<AuthenticationType>(
            {
                pin: _get_encoder_for_AuthenticationObject<PinAttributes>(
                    _encode_PinAttributes
                ),
                biometricTemplate: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        _get_encoder_for_AuthenticationObject<BiometricAttributes>(
                            _encode_BiometricAttributes
                        ),
                    $.BER
                ),
                authKey: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_AuthenticationObject<AuthKeyAttributes>(
                            _encode_AuthKeyAttributes
                        ),
                    $.BER
                ),
                external: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        _get_encoder_for_AuthenticationObject<ExternalAuthObjectAttributes>(
                            _encode_ExternalAuthObjectAttributes
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AuthenticationType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthenticationType */

/* eslint-enable */
