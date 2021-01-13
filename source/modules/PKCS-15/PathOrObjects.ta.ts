/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    EnvelopedData,
    _get_decoder_for_EnvelopedData,
    _get_encoder_for_EnvelopedData,
} from "../PKCS-15/EnvelopedData.ta";
import { Path, _decode_Path, _encode_Path } from "../PKCS-15/Path.ta";
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
export { Path, _decode_Path, _encode_Path } from "../PKCS-15/Path.ta";
export {
    ReferencedValue,
    _get_decoder_for_ReferencedValue,
    _get_encoder_for_ReferencedValue,
} from "../PKCS-15/ReferencedValue.ta";

/* START_OF_SYMBOL_DEFINITION PathOrObjects */
/**
 * @summary PathOrObjects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PathOrObjects {ObjectType}  ::=  CHOICE {
 *     path  Path,
 *     objects  [0] SEQUENCE OF ObjectType,
 *     ...,
 *     indirect-protected [1] ReferencedValue {EnvelopedData {SEQUENCE OF ObjectType}},
 *     direct-protected [2] EnvelopedData {SEQUENCE OF ObjectType}
 * }
 * ```
 */
export type PathOrObjects<ObjectType> =
    | { path: Path } /* CHOICE_ALT_ROOT */
    | { objects: ObjectType[] } /* CHOICE_ALT_ROOT */
    | {
          indirect_protected: ReferencedValue<EnvelopedData<ObjectType[]>>;
      } /* CHOICE_ALT_EXT */
    | { direct_protected: EnvelopedData<ObjectType[]> } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION PathOrObjects */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_PathOrObjects */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PathOrObjects
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_PathOrObjects<ObjectType>(
    _decode_ObjectType: $.ASN1Decoder<ObjectType>
) {
    return $._decode_extensible_choice<PathOrObjects<ObjectType>>({
        "UNIVERSAL 16": ["path", _decode_Path],
        "CONTEXT 0": [
            "objects",
            $._decode_implicit<ObjectType[]>(() =>
                $._decodeSequenceOf<ObjectType>(() => _decode_ObjectType)
            ),
        ],
        "CONTEXT 1": [
            "indirect_protected",
            $._decode_explicit<ReferencedValue<EnvelopedData<ObjectType[]>>>(
                () =>
                    _get_decoder_for_ReferencedValue<
                        EnvelopedData<ObjectType[]>
                    >(
                        _get_decoder_for_EnvelopedData<ObjectType[]>(
                            $._decodeSequenceOf<ObjectType>(
                                () => _decode_ObjectType
                            )
                        )
                    )
            ),
        ],
        "CONTEXT 2": [
            "direct_protected",
            $._decode_implicit<EnvelopedData<ObjectType[]>>(() =>
                _get_decoder_for_EnvelopedData<ObjectType[]>(
                    $._decodeSequenceOf<ObjectType>(() => _decode_ObjectType)
                )
            ),
        ],
    });
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_PathOrObjects */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_PathOrObjects */
/**
 * @summary Returns a function that will encode a(n) PathOrObjects into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PathOrObjects as an ASN.1 element.
 */
export function _get_encoder_for_PathOrObjects<ObjectType>(
    _encode_ObjectType: $.ASN1Encoder<ObjectType>
) {
    return $._encode_choice<PathOrObjects<ObjectType>>(
        {
            path: _encode_Path,
            objects: $._encode_implicit(
                _TagClass.context,
                0,
                () =>
                    $._encodeSequenceOf<ObjectType>(
                        () => _encode_ObjectType,
                        $.BER
                    ),
                $.BER
            ),
            indirect_protected: $._encode_explicit(
                _TagClass.context,
                1,
                () =>
                    _get_encoder_for_ReferencedValue<
                        EnvelopedData<ObjectType[]>
                    >(
                        _get_encoder_for_EnvelopedData<ObjectType[]>(
                            $._encodeSequenceOf<ObjectType>(
                                () => _encode_ObjectType,
                                $.BER
                            )
                        )
                    ),
                $.BER
            ),
            direct_protected: $._encode_implicit(
                _TagClass.context,
                2,
                () =>
                    _get_encoder_for_EnvelopedData<ObjectType[]>(
                        $._encodeSequenceOf<ObjectType>(
                            () => _encode_ObjectType,
                            $.BER
                        )
                    ),
                $.BER
            ),
        },
        $.BER
    );
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_PathOrObjects */

/* eslint-enable */
