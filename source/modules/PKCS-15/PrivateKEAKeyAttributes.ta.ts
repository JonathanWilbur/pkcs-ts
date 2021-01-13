/* eslint-disable */
import { ASN1Element as _Element, OPTIONAL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "ansi-x9-42/dist/node/modules/ANSI-X9-42/DomainParameters.ta";
import {
    KEAPrivateKey,
    _decode_KEAPrivateKey,
    _encode_KEAPrivateKey,
} from "../PKCS-15/KEAPrivateKey.ta";
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

/* START_OF_SYMBOL_DEFINITION PrivateKEAKeyAttributes */
/**
 * @summary PrivateKEAKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKEAKeyAttributes ::= SEQUENCE {
 *     value  ObjectValue {KEAPrivateKey},
 *     keyInfo KeyInfo {DomainParameters, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class PrivateKEAKeyAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<KEAPrivateKey>,
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
     * @summary Restructures an object into a PrivateKEAKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `PrivateKEAKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateKEAKeyAttributes`.
     * @returns {PrivateKEAKeyAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof PrivateKEAKeyAttributes]: PrivateKEAKeyAttributes[_K];
        }
    ): PrivateKEAKeyAttributes {
        return new PrivateKEAKeyAttributes(
            _o.value,
            _o.keyInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PrivateKEAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivateKEAKeyAttributes */
/**
 * @summary The Leading Root Component Types of PrivateKEAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivateKEAKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("keyInfo", true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivateKEAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivateKEAKeyAttributes */
/**
 * @summary The Trailing Root Component Types of PrivateKEAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivateKEAKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivateKEAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivateKEAKeyAttributes */
/**
 * @summary The Extension Addition Component Types of PrivateKEAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivateKEAKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivateKEAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateKEAKeyAttributes */
let _cached_decoder_for_PrivateKEAKeyAttributes: $.ASN1Decoder<PrivateKEAKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateKEAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_PrivateKEAKeyAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKEAKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKEAKeyAttributes} The decoded data structure.
 */
export function _decode_PrivateKEAKeyAttributes(el: _Element) {
    if (!_cached_decoder_for_PrivateKEAKeyAttributes) {
        _cached_decoder_for_PrivateKEAKeyAttributes = function (
            el: _Element
        ): PrivateKEAKeyAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let value!: ObjectValue<KEAPrivateKey>;
            let keyInfo: OPTIONAL<
                KeyInfo<DomainParameters, PublicKeyOperations>
            >;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _get_decoder_for_ObjectValue<KEAPrivateKey>(
                        _decode_KEAPrivateKey
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
                _root_component_type_list_1_spec_for_PrivateKEAKeyAttributes,
                _extension_additions_list_spec_for_PrivateKEAKeyAttributes,
                _root_component_type_list_2_spec_for_PrivateKEAKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PrivateKEAKeyAttributes /* SEQUENCE_CONSTRUCTOR_CALL */(
                value,
                keyInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PrivateKEAKeyAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivateKEAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateKEAKeyAttributes */
let _cached_encoder_for_PrivateKEAKeyAttributes: $.ASN1Encoder<PrivateKEAKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateKEAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_PrivateKEAKeyAttributes */
/**
 * @summary Encodes a(n) PrivateKEAKeyAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKEAKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_PrivateKEAKeyAttributes(
    value: PrivateKEAKeyAttributes,
    elGetter: $.ASN1Encoder<PrivateKEAKeyAttributes>
) {
    if (!_cached_encoder_for_PrivateKEAKeyAttributes) {
        _cached_encoder_for_PrivateKEAKeyAttributes = function (
            value: PrivateKEAKeyAttributes,
            elGetter: $.ASN1Encoder<PrivateKEAKeyAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<KEAPrivateKey>(
                                _encode_KEAPrivateKey
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
    return _cached_encoder_for_PrivateKEAKeyAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivateKEAKeyAttributes */

/* eslint-enable */
