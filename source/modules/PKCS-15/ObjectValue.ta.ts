/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    EnvelopedData,
    _get_decoder_for_EnvelopedData,
    _get_encoder_for_EnvelopedData,
} from "../PKCS-15/EnvelopedData.ta";
import {
    ReferencedValue,
    _get_decoder_for_ReferencedValue,
    _get_encoder_for_ReferencedValue,
} from "../PKCS-15/ReferencedValue.ta";
export {
    EnvelopedData,
    _get_decoder_for_EnvelopedData,
    _get_encoder_for_EnvelopedData,
} from "../PKCS-15/EnvelopedData.ta";
export {
    ReferencedValue,
    _get_decoder_for_ReferencedValue,
    _get_encoder_for_ReferencedValue,
} from "../PKCS-15/ReferencedValue.ta";

/* START_OF_SYMBOL_DEFINITION ObjectValue */
/**
 * @summary ObjectValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectValue { Type }  ::=  CHOICE {
 *     indirect  ReferencedValue {Type},
 *     direct  [0] Type,
 *     indirect-protected [1] ReferencedValue {EnvelopedData {Type}},
 *     direct-protected [2] EnvelopedData {Type}
 * }(CONSTRAINED BY {
 *     -- if indirection is being used, then it is expected that the reference
 *     -- points either to a (possibly enveloped) object of type -- Type -- or (key case) to a card-
 *     -- specific key file --})
 * ```
 */
export type ObjectValue<Type> =
    | { indirect: ReferencedValue<Type> } /* CHOICE_ALT_ROOT */
    | { direct: Type } /* CHOICE_ALT_ROOT */
    | {
          indirect_protected: ReferencedValue<EnvelopedData<Type>>;
      } /* CHOICE_ALT_ROOT */
    | { direct_protected: EnvelopedData<Type> } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ObjectValue */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_ObjectValue */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ObjectValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ObjectValue<Type>(
    _decode_Type: $.ASN1Decoder<Type>
) {
    return $._decode_inextensible_choice<ObjectValue<Type>>({
        "UNIVERSAL 16": [
            "indirect",
            _get_decoder_for_ReferencedValue<Type>(_decode_Type),
        ],
        "UNIVERSAL 19": [
            "indirect",
            _get_decoder_for_ReferencedValue<Type>(_decode_Type),
        ],
        "CONTEXT 3": [
            "indirect",
            _get_decoder_for_ReferencedValue<Type>(_decode_Type),
        ],
        "CONTEXT 0": ["direct", $._decode_implicit<Type>(() => _decode_Type)],
        "CONTEXT 1": [
            "indirect_protected",
            $._decode_explicit<ReferencedValue<EnvelopedData<Type>>>(() =>
                _get_decoder_for_ReferencedValue<EnvelopedData<Type>>(
                    _get_decoder_for_EnvelopedData<Type>(_decode_Type)
                )
            ),
        ],
        "CONTEXT 2": [
            "direct_protected",
            $._decode_implicit<EnvelopedData<Type>>(() =>
                _get_decoder_for_EnvelopedData<Type>(_decode_Type)
            ),
        ],
    });
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_ObjectValue */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_ObjectValue */
/**
 * @summary Returns a function that will encode a(n) ObjectValue into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ObjectValue as an ASN.1 element.
 */
export function _get_encoder_for_ObjectValue<Type>(
    _encode_Type: $.ASN1Encoder<Type>
) {
    return $._encode_choice<ObjectValue<Type>>(
        {
            indirect: _get_encoder_for_ReferencedValue<Type>(_encode_Type),
            direct: $._encode_implicit(
                _TagClass.context,
                0,
                () => _encode_Type,
                $.BER
            ),
            indirect_protected: $._encode_explicit(
                _TagClass.context,
                1,
                () =>
                    _get_encoder_for_ReferencedValue<EnvelopedData<Type>>(
                        _get_encoder_for_EnvelopedData<Type>(_encode_Type)
                    ),
                $.BER
            ),
            direct_protected: $._encode_implicit(
                _TagClass.context,
                2,
                () => _get_encoder_for_EnvelopedData<Type>(_encode_Type),
                $.BER
            ),
        },
        $.BER
    );
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_ObjectValue */

/* eslint-enable */
