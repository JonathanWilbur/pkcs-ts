/* eslint-disable */
import { ASN1Element as _Element, OPTIONAL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "ansi-x9-42/dist/node/modules/ANSI-X9-42/DomainParameters.ta";
import {
    DHPrivateKey,
    _decode_DHPrivateKey,
    _encode_DHPrivateKey,
} from "../PKCS-15/DHPrivateKey.ta";
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

/* START_OF_SYMBOL_DEFINITION PrivateDHKeyAttributes */
/**
 * @summary PrivateDHKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateDHKeyAttributes ::= SEQUENCE {
 *     value  ObjectValue {DHPrivateKey},
 *     keyInfo KeyInfo {DomainParameters, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class PrivateDHKeyAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<DHPrivateKey>,
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
     * @summary Restructures an object into a PrivateDHKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `PrivateDHKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateDHKeyAttributes`.
     * @returns {PrivateDHKeyAttributes}
     */
    public static _from_object(
        _o: { [_K in keyof PrivateDHKeyAttributes]: PrivateDHKeyAttributes[_K] }
    ): PrivateDHKeyAttributes {
        return new PrivateDHKeyAttributes(
            _o.value,
            _o.keyInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PrivateDHKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivateDHKeyAttributes */
/**
 * @summary The Leading Root Component Types of PrivateDHKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivateDHKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("keyInfo", true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivateDHKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivateDHKeyAttributes */
/**
 * @summary The Trailing Root Component Types of PrivateDHKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivateDHKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivateDHKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivateDHKeyAttributes */
/**
 * @summary The Extension Addition Component Types of PrivateDHKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivateDHKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivateDHKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateDHKeyAttributes */
let _cached_decoder_for_PrivateDHKeyAttributes: $.ASN1Decoder<PrivateDHKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateDHKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_PrivateDHKeyAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivateDHKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateDHKeyAttributes} The decoded data structure.
 */
export function _decode_PrivateDHKeyAttributes(el: _Element) {
    if (!_cached_decoder_for_PrivateDHKeyAttributes) {
        _cached_decoder_for_PrivateDHKeyAttributes = function (
            el: _Element
        ): PrivateDHKeyAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let value!: ObjectValue<DHPrivateKey>;
            let keyInfo: OPTIONAL<
                KeyInfo<DomainParameters, PublicKeyOperations>
            >;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _get_decoder_for_ObjectValue<DHPrivateKey>(
                        _decode_DHPrivateKey
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
                _root_component_type_list_1_spec_for_PrivateDHKeyAttributes,
                _extension_additions_list_spec_for_PrivateDHKeyAttributes,
                _root_component_type_list_2_spec_for_PrivateDHKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PrivateDHKeyAttributes /* SEQUENCE_CONSTRUCTOR_CALL */(
                value,
                keyInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PrivateDHKeyAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivateDHKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateDHKeyAttributes */
let _cached_encoder_for_PrivateDHKeyAttributes: $.ASN1Encoder<PrivateDHKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateDHKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_PrivateDHKeyAttributes */
/**
 * @summary Encodes a(n) PrivateDHKeyAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateDHKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_PrivateDHKeyAttributes(
    value: PrivateDHKeyAttributes,
    elGetter: $.ASN1Encoder<PrivateDHKeyAttributes>
) {
    if (!_cached_encoder_for_PrivateDHKeyAttributes) {
        _cached_encoder_for_PrivateDHKeyAttributes = function (
            value: PrivateDHKeyAttributes,
            elGetter: $.ASN1Encoder<PrivateDHKeyAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<DHPrivateKey>(
                                _encode_DHPrivateKey
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
    return _cached_encoder_for_PrivateDHKeyAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivateDHKeyAttributes */

/* eslint-enable */
