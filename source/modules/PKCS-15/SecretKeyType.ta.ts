/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    GenericSecretKeyAttributes,
    _decode_GenericSecretKeyAttributes,
    _encode_GenericSecretKeyAttributes,
} from "../PKCS-15/GenericSecretKeyAttributes.ta";
import {
    OtherKey,
    _decode_OtherKey,
    _encode_OtherKey,
} from "../PKCS-15/OtherKey.ta";
import {
    SecretKeyObject,
    _get_decoder_for_SecretKeyObject,
    _get_encoder_for_SecretKeyObject,
} from "../PKCS-15/SecretKeyObject.ta";
export {
    GenericSecretKeyAttributes,
    _decode_GenericSecretKeyAttributes,
    _encode_GenericSecretKeyAttributes,
} from "../PKCS-15/GenericSecretKeyAttributes.ta";
export {
    OtherKey,
    _decode_OtherKey,
    _encode_OtherKey,
} from "../PKCS-15/OtherKey.ta";
export {
    SecretKeyObject,
    _get_decoder_for_SecretKeyObject,
    _get_encoder_for_SecretKeyObject,
} from "../PKCS-15/SecretKeyObject.ta";

/* START_OF_SYMBOL_DEFINITION SecretKeyType */
/**
 * @summary SecretKeyType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecretKeyType  ::=  CHOICE {
 *     genericSecretKey SecretKeyObject {GenericSecretKeyAttributes},
 *     rc2key [0] SecretKeyObject {GenericSecretKeyAttributes},
 *     rc4key [1] SecretKeyObject {GenericSecretKeyAttributes},
 *     desKey [2] SecretKeyObject {GenericSecretKeyAttributes},
 *     des2Key [3] SecretKeyObject {GenericSecretKeyAttributes},
 *     des3Key [4] SecretKeyObject {GenericSecretKeyAttributes},
 *     castKey [5] SecretKeyObject {GenericSecretKeyAttributes},
 *     cast3Key [6] SecretKeyObject {GenericSecretKeyAttributes},
 *     cast128Key  [7] SecretKeyObject {GenericSecretKeyAttributes},
 *     rc5Key  [8] SecretKeyObject {GenericSecretKeyAttributes},
 *     ideaKey [9] SecretKeyObject {GenericSecretKeyAttributes},
 *     skipjackKey [10] SecretKeyObject {GenericSecretKeyAttributes},
 *     batonKey [11] SecretKeyObject {GenericSecretKeyAttributes},
 *     juniperKey  [12] SecretKeyObject {GenericSecretKeyAttributes},
 *     rc6Key [13] SecretKeyObject {GenericSecretKeyAttributes},
 *     otherKey [14] OtherKey,
 *     ... -- For future extension
 * }
 * ```
 */
export type SecretKeyType =
    | {
          genericSecretKey: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          rc2key: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          rc4key: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          desKey: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          des2Key: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          des3Key: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          castKey: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          cast3Key: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          cast128Key: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          rc5Key: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          ideaKey: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          skipjackKey: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          batonKey: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          juniperKey: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          rc6Key: SecretKeyObject<GenericSecretKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | { otherKey: OtherKey } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION SecretKeyType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecretKeyType */
let _cached_decoder_for_SecretKeyType: $.ASN1Decoder<SecretKeyType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecretKeyType */

/* START_OF_SYMBOL_DEFINITION _decode_SecretKeyType */
/**
 * @summary Decodes an ASN.1 element into a(n) SecretKeyType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecretKeyType} The decoded data structure.
 */
export function _decode_SecretKeyType(el: _Element) {
    if (!_cached_decoder_for_SecretKeyType) {
        _cached_decoder_for_SecretKeyType = $._decode_extensible_choice<SecretKeyType>(
            {
                "UNIVERSAL 16": [
                    "genericSecretKey",
                    _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                        _decode_GenericSecretKeyAttributes
                    ),
                ],
                "CONTEXT 0": [
                    "rc2key",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 1": [
                    "rc4key",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 2": [
                    "desKey",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 3": [
                    "des2Key",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 4": [
                    "des3Key",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 5": [
                    "castKey",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 6": [
                    "cast3Key",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 7": [
                    "cast128Key",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 8": [
                    "rc5Key",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 9": [
                    "ideaKey",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 10": [
                    "skipjackKey",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 11": [
                    "batonKey",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 12": [
                    "juniperKey",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 13": [
                    "rc6Key",
                    $._decode_implicit<
                        SecretKeyObject<GenericSecretKeyAttributes>
                    >(() =>
                        _get_decoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _decode_GenericSecretKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 14": [
                    "otherKey",
                    $._decode_implicit<OtherKey>(() => _decode_OtherKey),
                ],
            }
        );
    }
    return _cached_decoder_for_SecretKeyType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecretKeyType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecretKeyType */
let _cached_encoder_for_SecretKeyType: $.ASN1Encoder<SecretKeyType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecretKeyType */

/* START_OF_SYMBOL_DEFINITION _encode_SecretKeyType */
/**
 * @summary Encodes a(n) SecretKeyType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecretKeyType, encoded as an ASN.1 Element.
 */
export function _encode_SecretKeyType(
    value: SecretKeyType,
    elGetter: $.ASN1Encoder<SecretKeyType>
) {
    if (!_cached_encoder_for_SecretKeyType) {
        _cached_encoder_for_SecretKeyType = $._encode_choice<SecretKeyType>(
            {
                genericSecretKey: _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                    _encode_GenericSecretKeyAttributes
                ),
                rc2key: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                rc4key: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                desKey: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                des2Key: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                des3Key: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                castKey: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                cast3Key: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                cast128Key: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                rc5Key: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                ideaKey: $._encode_implicit(
                    _TagClass.context,
                    9,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                skipjackKey: $._encode_implicit(
                    _TagClass.context,
                    10,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                batonKey: $._encode_implicit(
                    _TagClass.context,
                    11,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                juniperKey: $._encode_implicit(
                    _TagClass.context,
                    12,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                rc6Key: $._encode_implicit(
                    _TagClass.context,
                    13,
                    () =>
                        _get_encoder_for_SecretKeyObject<GenericSecretKeyAttributes>(
                            _encode_GenericSecretKeyAttributes
                        ),
                    $.BER
                ),
                otherKey: $._encode_implicit(
                    _TagClass.context,
                    14,
                    () => _encode_OtherKey,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SecretKeyType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecretKeyType */

/* eslint-enable */
