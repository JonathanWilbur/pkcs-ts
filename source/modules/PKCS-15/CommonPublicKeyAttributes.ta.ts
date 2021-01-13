/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "x500-ts/dist/node/modules/InformationFramework/Name.ta";
import { Usage, _decode_Usage, _encode_Usage } from "../PKCS-15/Usage.ta";

/* START_OF_SYMBOL_DEFINITION CommonPublicKeyAttributes */
/**
 * @summary CommonPublicKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonPublicKeyAttributes ::= SEQUENCE {
 *     subjectName Name OPTIONAL,
 *     ...,
 *     trustedUsage [0] Usage OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CommonPublicKeyAttributes {
    constructor(
        /**
         * @summary `subjectName`.
         * @public
         * @readonly
         */
        readonly subjectName: OPTIONAL<Name>,
        /**
         * @summary `trustedUsage`.
         * @public
         * @readonly
         */
        readonly trustedUsage: OPTIONAL<Usage>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonPublicKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `CommonPublicKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonPublicKeyAttributes`.
     * @returns {CommonPublicKeyAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof CommonPublicKeyAttributes]: CommonPublicKeyAttributes[_K];
        }
    ): CommonPublicKeyAttributes {
        return new CommonPublicKeyAttributes(
            _o.subjectName,
            _o.trustedUsage,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CommonPublicKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonPublicKeyAttributes */
/**
 * @summary The Leading Root Component Types of CommonPublicKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommonPublicKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("subjectName", true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonPublicKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonPublicKeyAttributes */
/**
 * @summary The Trailing Root Component Types of CommonPublicKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonPublicKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonPublicKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonPublicKeyAttributes */
/**
 * @summary The Extension Addition Component Types of CommonPublicKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonPublicKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "trustedUsage",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonPublicKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonPublicKeyAttributes */
let _cached_decoder_for_CommonPublicKeyAttributes: $.ASN1Decoder<CommonPublicKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonPublicKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_CommonPublicKeyAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) CommonPublicKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonPublicKeyAttributes} The decoded data structure.
 */
export function _decode_CommonPublicKeyAttributes(el: _Element) {
    if (!_cached_decoder_for_CommonPublicKeyAttributes) {
        _cached_decoder_for_CommonPublicKeyAttributes = function (
            el: _Element
        ): CommonPublicKeyAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let subjectName: OPTIONAL<Name>;
            let trustedUsage: OPTIONAL<Usage>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                subjectName: (_el: _Element): void => {
                    subjectName = _decode_Name(_el);
                },
                trustedUsage: (_el: _Element): void => {
                    trustedUsage = $._decode_implicit<Usage>(
                        () => _decode_Usage
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonPublicKeyAttributes,
                _extension_additions_list_spec_for_CommonPublicKeyAttributes,
                _root_component_type_list_2_spec_for_CommonPublicKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CommonPublicKeyAttributes /* SEQUENCE_CONSTRUCTOR_CALL */(
                subjectName,
                trustedUsage,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CommonPublicKeyAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommonPublicKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonPublicKeyAttributes */
let _cached_encoder_for_CommonPublicKeyAttributes: $.ASN1Encoder<CommonPublicKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonPublicKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_CommonPublicKeyAttributes */
/**
 * @summary Encodes a(n) CommonPublicKeyAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonPublicKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_CommonPublicKeyAttributes(
    value: CommonPublicKeyAttributes,
    elGetter: $.ASN1Encoder<CommonPublicKeyAttributes>
) {
    if (!_cached_encoder_for_CommonPublicKeyAttributes) {
        _cached_encoder_for_CommonPublicKeyAttributes = function (
            value: CommonPublicKeyAttributes,
            elGetter: $.ASN1Encoder<CommonPublicKeyAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.subjectName === undefined
                                ? undefined
                                : _encode_Name(value.subjectName, $.BER),
                        ],
                        [
                            /* IF_ABSENT  */ value.trustedUsage === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Usage,
                                      $.BER
                                  )(value.trustedUsage, $.BER),
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
    return _cached_encoder_for_CommonPublicKeyAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommonPublicKeyAttributes */

/* eslint-enable */
