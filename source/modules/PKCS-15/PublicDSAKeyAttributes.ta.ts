/* eslint-disable */
import {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "ansi-x9-42/dist/node/modules/ANSI-X9-42/DomainParameters.ta";
import { ASN1Element as _Element, OPTIONAL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DSAPublicKeyChoice,
    _decode_DSAPublicKeyChoice,
    _encode_DSAPublicKeyChoice,
} from "../PKCS-15/DSAPublicKeyChoice.ta";
import {
    KeyInfo,
    _get_decoder_for_KeyInfo,
    _get_encoder_for_KeyInfo,
} from "../PKCS-15/KeyInfo.ta";
import {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta";
import {
    PublicKeyOperations,
    _decode_PublicKeyOperations,
    _encode_PublicKeyOperations,
} from "../PKCS-15/PublicKeyOperations.ta";

/* START_OF_SYMBOL_DEFINITION PublicDSAKeyAttributes */
/**
 * @summary PublicDSAKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicDSAKeyAttributes ::= SEQUENCE {
 *     value  ObjectValue {DSAPublicKeyChoice},
 *     keyInfo KeyInfo {DomainParameters, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class PublicDSAKeyAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<DSAPublicKeyChoice>,
        /**
         * @summary `keyInfo`.
         * @public
         * @readonly
         */
        readonly keyInfo: OPTIONAL<
            KeyInfo<DomainParameters, PublicKeyOperations>
        >,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PublicDSAKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `PublicDSAKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PublicDSAKeyAttributes`.
     * @returns {PublicDSAKeyAttributes}
     */
    public static _from_object(
        _o: { [_K in keyof PublicDSAKeyAttributes]: PublicDSAKeyAttributes[_K] }
    ): PublicDSAKeyAttributes {
        return new PublicDSAKeyAttributes(
            _o.value,
            _o.keyInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PublicDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PublicDSAKeyAttributes */
/**
 * @summary The Leading Root Component Types of PublicDSAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PublicDSAKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("keyInfo", true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PublicDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PublicDSAKeyAttributes */
/**
 * @summary The Trailing Root Component Types of PublicDSAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PublicDSAKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PublicDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PublicDSAKeyAttributes */
/**
 * @summary The Extension Addition Component Types of PublicDSAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PublicDSAKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PublicDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicDSAKeyAttributes */
let _cached_decoder_for_PublicDSAKeyAttributes: $.ASN1Decoder<PublicDSAKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_PublicDSAKeyAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) PublicDSAKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicDSAKeyAttributes} The decoded data structure.
 */
export function _decode_PublicDSAKeyAttributes(el: _Element) {
    if (!_cached_decoder_for_PublicDSAKeyAttributes) {
        _cached_decoder_for_PublicDSAKeyAttributes = function (
            el: _Element
        ): PublicDSAKeyAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let value!: ObjectValue<DSAPublicKeyChoice>;
            let keyInfo: OPTIONAL<
                KeyInfo<DomainParameters, PublicKeyOperations>
            >;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _get_decoder_for_ObjectValue<DSAPublicKeyChoice>(
                        _decode_DSAPublicKeyChoice
                    )(_el);
                },
                keyInfo: (_el: _Element): void => {
                    keyInfo = _get_decoder_for_KeyInfo<
                        DomainParameters,
                        PublicKeyOperations
                    >(
                        _decode_DomainParameters,
                        _decode_PublicKeyOperations
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PublicDSAKeyAttributes,
                _extension_additions_list_spec_for_PublicDSAKeyAttributes,
                _root_component_type_list_2_spec_for_PublicDSAKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PublicDSAKeyAttributes(
                /* SEQUENCE_CONSTRUCTOR_CALL */ value,
                keyInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PublicDSAKeyAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PublicDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicDSAKeyAttributes */
let _cached_encoder_for_PublicDSAKeyAttributes: $.ASN1Encoder<PublicDSAKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_PublicDSAKeyAttributes */
/**
 * @summary Encodes a(n) PublicDSAKeyAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicDSAKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_PublicDSAKeyAttributes(
    value: PublicDSAKeyAttributes,
    elGetter: $.ASN1Encoder<PublicDSAKeyAttributes>
) {
    if (!_cached_encoder_for_PublicDSAKeyAttributes) {
        _cached_encoder_for_PublicDSAKeyAttributes = function (
            value: PublicDSAKeyAttributes,
            elGetter: $.ASN1Encoder<PublicDSAKeyAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<DSAPublicKeyChoice>(
                                _encode_DSAPublicKeyChoice
                            )(value.value, $.BER),
                            /* IF_ABSENT  */ value.keyInfo === undefined
                                ? undefined
                                : _get_encoder_for_KeyInfo<
                                      DomainParameters,
                                      PublicKeyOperations
                                  >(
                                      _encode_DomainParameters,
                                      _encode_PublicKeyOperations
                                  )(value.keyInfo, $.BER),
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
    return _cached_encoder_for_PublicDSAKeyAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PublicDSAKeyAttributes */

/* eslint-enable */
