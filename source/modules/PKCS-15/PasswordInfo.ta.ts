/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import { Label, _decode_Label, _encode_Label } from "../PKCS-15/Label.ta";
export { Label, _decode_Label, _encode_Label } from "../PKCS-15/Label.ta";

/* START_OF_SYMBOL_DEFINITION PasswordInfo */
/**
 * @summary PasswordInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PasswordInfo ::= SEQUENCE {
 *     hint Label OPTIONAL,
 *     algId AlgorithmIdentifier {{KeyDerivationAlgorithms}},
 *     ...
 * } (CONSTRAINED BY {--keyID shall point to a KEKRecipientInfo--})
 * ```
 *
 * @class
 */
export class PasswordInfo {
    constructor(
        /**
         * @summary `hint`.
         * @public
         * @readonly
         */
        readonly hint: OPTIONAL<Label>,
        /**
         * @summary `algId`.
         * @public
         * @readonly
         */
        readonly algId: AlgorithmIdentifier,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PasswordInfo
     * @description
     *
     * This takes an `object` and converts it to a `PasswordInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PasswordInfo`.
     * @returns {PasswordInfo}
     */
    public static _from_object(
        _o: { [_K in keyof PasswordInfo]: PasswordInfo[_K] }
    ): PasswordInfo {
        return new PasswordInfo(
            _o.hint,
            _o.algId,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PasswordInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PasswordInfo */
/**
 * @summary The Leading Root Component Types of PasswordInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PasswordInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hint",
        true,
        $.hasTag(_TagClass.universal, 12),
        undefined,
        undefined
    ),
    /* FIXME: algId COULD_NOT_RESOLVE_TYPE_DEF */
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PasswordInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PasswordInfo */
/**
 * @summary The Trailing Root Component Types of PasswordInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PasswordInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PasswordInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PasswordInfo */
/**
 * @summary The Extension Addition Component Types of PasswordInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PasswordInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PasswordInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PasswordInfo */
let _cached_decoder_for_PasswordInfo: $.ASN1Decoder<PasswordInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PasswordInfo */

/* START_OF_SYMBOL_DEFINITION _decode_PasswordInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) PasswordInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PasswordInfo} The decoded data structure.
 */
export function _decode_PasswordInfo(el: _Element) {
    if (!_cached_decoder_for_PasswordInfo) {
        _cached_decoder_for_PasswordInfo = function (
            el: _Element
        ): PasswordInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hint: OPTIONAL<Label>;
            let algId!: AlgorithmIdentifier;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                hint: (_el: _Element): void => {
                    hint = _decode_Label(_el);
                },
                algId: (_el: _Element): void => {
                    algId = _decode_AlgorithmIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PasswordInfo,
                _extension_additions_list_spec_for_PasswordInfo,
                _root_component_type_list_2_spec_for_PasswordInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PasswordInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ hint,
                algId,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PasswordInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PasswordInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PasswordInfo */
let _cached_encoder_for_PasswordInfo: $.ASN1Encoder<PasswordInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PasswordInfo */

/* START_OF_SYMBOL_DEFINITION _encode_PasswordInfo */
/**
 * @summary Encodes a(n) PasswordInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PasswordInfo, encoded as an ASN.1 Element.
 */
export function _encode_PasswordInfo(
    value: PasswordInfo,
    elGetter: $.ASN1Encoder<PasswordInfo>
) {
    if (!_cached_encoder_for_PasswordInfo) {
        _cached_encoder_for_PasswordInfo = function (
            value: PasswordInfo,
            elGetter: $.ASN1Encoder<PasswordInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.hint === undefined
                                ? undefined
                                : _encode_Label(value.hint, $.BER),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.algId,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PasswordInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PasswordInfo */

/* eslint-enable */
