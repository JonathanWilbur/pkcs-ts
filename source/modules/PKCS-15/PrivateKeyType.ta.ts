/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PrivateDHKeyAttributes,
    _decode_PrivateDHKeyAttributes,
    _encode_PrivateDHKeyAttributes,
} from "../PKCS-15/PrivateDHKeyAttributes.ta";
import {
    PrivateDSAKeyAttributes,
    _decode_PrivateDSAKeyAttributes,
    _encode_PrivateDSAKeyAttributes,
} from "../PKCS-15/PrivateDSAKeyAttributes.ta";
import {
    PrivateECKeyAttributes,
    _decode_PrivateECKeyAttributes,
    _encode_PrivateECKeyAttributes,
} from "../PKCS-15/PrivateECKeyAttributes.ta";
import {
    PrivateKEAKeyAttributes,
    _decode_PrivateKEAKeyAttributes,
    _encode_PrivateKEAKeyAttributes,
} from "../PKCS-15/PrivateKEAKeyAttributes.ta";
import {
    PrivateKeyObject,
    _get_decoder_for_PrivateKeyObject,
    _get_encoder_for_PrivateKeyObject,
} from "../PKCS-15/PrivateKeyObject.ta";
import {
    PrivateRSAKeyAttributes,
    _decode_PrivateRSAKeyAttributes,
    _encode_PrivateRSAKeyAttributes,
} from "../PKCS-15/PrivateRSAKeyAttributes.ta";
export {
    PrivateDHKeyAttributes,
    _decode_PrivateDHKeyAttributes,
    _encode_PrivateDHKeyAttributes,
} from "../PKCS-15/PrivateDHKeyAttributes.ta";
export {
    PrivateDSAKeyAttributes,
    _decode_PrivateDSAKeyAttributes,
    _encode_PrivateDSAKeyAttributes,
} from "../PKCS-15/PrivateDSAKeyAttributes.ta";
export {
    PrivateECKeyAttributes,
    _decode_PrivateECKeyAttributes,
    _encode_PrivateECKeyAttributes,
} from "../PKCS-15/PrivateECKeyAttributes.ta";
export {
    PrivateKEAKeyAttributes,
    _decode_PrivateKEAKeyAttributes,
    _encode_PrivateKEAKeyAttributes,
} from "../PKCS-15/PrivateKEAKeyAttributes.ta";
export {
    PrivateKeyObject,
    _get_decoder_for_PrivateKeyObject,
    _get_encoder_for_PrivateKeyObject,
} from "../PKCS-15/PrivateKeyObject.ta";
export {
    PrivateRSAKeyAttributes,
    _decode_PrivateRSAKeyAttributes,
    _encode_PrivateRSAKeyAttributes,
} from "../PKCS-15/PrivateRSAKeyAttributes.ta";

/* START_OF_SYMBOL_DEFINITION PrivateKeyType */
/**
 * @summary PrivateKeyType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeyType  ::=  CHOICE {
 *     privateRSAKey PrivateKeyObject {PrivateRSAKeyAttributes},
 *     privateECKey  [0] PrivateKeyObject {PrivateECKeyAttributes},
 *     privateDHKey  [1] PrivateKeyObject {PrivateDHKeyAttributes},
 *     privateDSAKey [2] PrivateKeyObject {PrivateDSAKeyAttributes},
 *     privateKEAKey [3] PrivateKeyObject {PrivateKEAKeyAttributes},
 *     ... -- For future extensions
 * }
 * ```
 */
export type PrivateKeyType =
    | {
          privateRSAKey: PrivateKeyObject<PrivateRSAKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          privateECKey: PrivateKeyObject<PrivateECKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          privateDHKey: PrivateKeyObject<PrivateDHKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          privateDSAKey: PrivateKeyObject<PrivateDSAKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          privateKEAKey: PrivateKeyObject<PrivateKEAKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION PrivateKeyType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateKeyType */
let _cached_decoder_for_PrivateKeyType: $.ASN1Decoder<PrivateKeyType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateKeyType */

/* START_OF_SYMBOL_DEFINITION _decode_PrivateKeyType */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeyType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKeyType} The decoded data structure.
 */
export function _decode_PrivateKeyType(el: _Element) {
    if (!_cached_decoder_for_PrivateKeyType) {
        _cached_decoder_for_PrivateKeyType = $._decode_extensible_choice<PrivateKeyType>(
            {
                "UNIVERSAL 16": [
                    "privateRSAKey",
                    _get_decoder_for_PrivateKeyObject<PrivateRSAKeyAttributes>(
                        _decode_PrivateRSAKeyAttributes
                    ),
                ],
                "CONTEXT 0": [
                    "privateECKey",
                    $._decode_implicit<
                        PrivateKeyObject<PrivateECKeyAttributes>
                    >(() =>
                        _get_decoder_for_PrivateKeyObject<PrivateECKeyAttributes>(
                            _decode_PrivateECKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 1": [
                    "privateDHKey",
                    $._decode_implicit<
                        PrivateKeyObject<PrivateDHKeyAttributes>
                    >(() =>
                        _get_decoder_for_PrivateKeyObject<PrivateDHKeyAttributes>(
                            _decode_PrivateDHKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 2": [
                    "privateDSAKey",
                    $._decode_implicit<
                        PrivateKeyObject<PrivateDSAKeyAttributes>
                    >(() =>
                        _get_decoder_for_PrivateKeyObject<PrivateDSAKeyAttributes>(
                            _decode_PrivateDSAKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 3": [
                    "privateKEAKey",
                    $._decode_implicit<
                        PrivateKeyObject<PrivateKEAKeyAttributes>
                    >(() =>
                        _get_decoder_for_PrivateKeyObject<PrivateKEAKeyAttributes>(
                            _decode_PrivateKEAKeyAttributes
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_PrivateKeyType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivateKeyType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateKeyType */
let _cached_encoder_for_PrivateKeyType: $.ASN1Encoder<PrivateKeyType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateKeyType */

/* START_OF_SYMBOL_DEFINITION _encode_PrivateKeyType */
/**
 * @summary Encodes a(n) PrivateKeyType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeyType, encoded as an ASN.1 Element.
 */
export function _encode_PrivateKeyType(
    value: PrivateKeyType,
    elGetter: $.ASN1Encoder<PrivateKeyType>
) {
    if (!_cached_encoder_for_PrivateKeyType) {
        _cached_encoder_for_PrivateKeyType = $._encode_choice<PrivateKeyType>(
            {
                privateRSAKey: _get_encoder_for_PrivateKeyObject<PrivateRSAKeyAttributes>(
                    _encode_PrivateRSAKeyAttributes
                ),
                privateECKey: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        _get_encoder_for_PrivateKeyObject<PrivateECKeyAttributes>(
                            _encode_PrivateECKeyAttributes
                        ),
                    $.BER
                ),
                privateDHKey: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_PrivateKeyObject<PrivateDHKeyAttributes>(
                            _encode_PrivateDHKeyAttributes
                        ),
                    $.BER
                ),
                privateDSAKey: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        _get_encoder_for_PrivateKeyObject<PrivateDSAKeyAttributes>(
                            _encode_PrivateDSAKeyAttributes
                        ),
                    $.BER
                ),
                privateKEAKey: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () =>
                        _get_encoder_for_PrivateKeyObject<PrivateKEAKeyAttributes>(
                            _encode_PrivateKEAKeyAttributes
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PrivateKeyType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivateKeyType */

/* eslint-enable */
