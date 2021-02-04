/* eslint-disable */
import {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "ansi-x9-42/dist/node/modules/ANSI-X9-42/DomainParameters.ta";
import { ASN1Element as _Element, OPTIONAL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DSAPrivateKey,
    _decode_DSAPrivateKey,
    _encode_DSAPrivateKey,
} from "../PKCS-15/DSAPrivateKey.ta";
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

/* START_OF_SYMBOL_DEFINITION PrivateDSAKeyAttributes */
/**
 * @summary PrivateDSAKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateDSAKeyAttributes ::= SEQUENCE {
 *     value  ObjectValue {DSAPrivateKey},
 *     keyInfo KeyInfo {DomainParameters, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class PrivateDSAKeyAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<DSAPrivateKey>,
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
     * @summary Restructures an object into a PrivateDSAKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `PrivateDSAKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateDSAKeyAttributes`.
     * @returns {PrivateDSAKeyAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof PrivateDSAKeyAttributes]: PrivateDSAKeyAttributes[_K];
        }
    ): PrivateDSAKeyAttributes {
        return new PrivateDSAKeyAttributes(
            _o.value,
            _o.keyInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PrivateDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivateDSAKeyAttributes */
/**
 * @summary The Leading Root Component Types of PrivateDSAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivateDSAKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("keyInfo", true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivateDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivateDSAKeyAttributes */
/**
 * @summary The Trailing Root Component Types of PrivateDSAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivateDSAKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivateDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivateDSAKeyAttributes */
/**
 * @summary The Extension Addition Component Types of PrivateDSAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivateDSAKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivateDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateDSAKeyAttributes */
let _cached_decoder_for_PrivateDSAKeyAttributes: $.ASN1Decoder<PrivateDSAKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_PrivateDSAKeyAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivateDSAKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateDSAKeyAttributes} The decoded data structure.
 */
export function _decode_PrivateDSAKeyAttributes(el: _Element) {
    if (!_cached_decoder_for_PrivateDSAKeyAttributes) {
        _cached_decoder_for_PrivateDSAKeyAttributes = function (
            el: _Element
        ): PrivateDSAKeyAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let value!: ObjectValue<DSAPrivateKey>;
            let keyInfo: OPTIONAL<
                KeyInfo<DomainParameters, PublicKeyOperations>
            >;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _get_decoder_for_ObjectValue<DSAPrivateKey>(
                        _decode_DSAPrivateKey
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
                _root_component_type_list_1_spec_for_PrivateDSAKeyAttributes,
                _extension_additions_list_spec_for_PrivateDSAKeyAttributes,
                _root_component_type_list_2_spec_for_PrivateDSAKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PrivateDSAKeyAttributes(
                /* SEQUENCE_CONSTRUCTOR_CALL */ value,
                keyInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PrivateDSAKeyAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivateDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateDSAKeyAttributes */
let _cached_encoder_for_PrivateDSAKeyAttributes: $.ASN1Encoder<PrivateDSAKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateDSAKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_PrivateDSAKeyAttributes */
/**
 * @summary Encodes a(n) PrivateDSAKeyAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateDSAKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_PrivateDSAKeyAttributes(
    value: PrivateDSAKeyAttributes,
    elGetter: $.ASN1Encoder<PrivateDSAKeyAttributes>
) {
    if (!_cached_encoder_for_PrivateDSAKeyAttributes) {
        _cached_encoder_for_PrivateDSAKeyAttributes = function (
            value: PrivateDSAKeyAttributes,
            elGetter: $.ASN1Encoder<PrivateDSAKeyAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<DSAPrivateKey>(
                                _encode_DSAPrivateKey
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
    return _cached_encoder_for_PrivateDSAKeyAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivateDSAKeyAttributes */

/* eslint-enable */
