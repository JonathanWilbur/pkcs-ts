/* eslint-disable */
import { ASN1Element as _Element, OPTIONAL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Parameters,
    _decode_Parameters,
    _encode_Parameters,
} from "ansi-x9-62/dist/node/modules/ANSI-X9-62/Parameters.ta";
import {
    ECPublicKeyChoice,
    _decode_ECPublicKeyChoice,
    _encode_ECPublicKeyChoice,
} from "../PKCS-15/ECPublicKeyChoice.ta";
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

/* START_OF_SYMBOL_DEFINITION PublicECKeyAttributes */
/**
 * @summary PublicECKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicECKeyAttributes ::= SEQUENCE {
 *     value  ObjectValue {ECPublicKeyChoice},
 *     keyInfo KeyInfo {Parameters, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class PublicECKeyAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<ECPublicKeyChoice>,
        /**
         * @summary `keyInfo`.
         * @public
         * @readonly
         */
        readonly keyInfo: OPTIONAL<KeyInfo<Parameters, PublicKeyOperations>>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PublicECKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `PublicECKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PublicECKeyAttributes`.
     * @returns {PublicECKeyAttributes}
     */
    public static _from_object(
        _o: { [_K in keyof PublicECKeyAttributes]: PublicECKeyAttributes[_K] }
    ): PublicECKeyAttributes {
        return new PublicECKeyAttributes(
            _o.value,
            _o.keyInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PublicECKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PublicECKeyAttributes */
/**
 * @summary The Leading Root Component Types of PublicECKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PublicECKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("keyInfo", true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PublicECKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PublicECKeyAttributes */
/**
 * @summary The Trailing Root Component Types of PublicECKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PublicECKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PublicECKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PublicECKeyAttributes */
/**
 * @summary The Extension Addition Component Types of PublicECKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PublicECKeyAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PublicECKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicECKeyAttributes */
let _cached_decoder_for_PublicECKeyAttributes: $.ASN1Decoder<PublicECKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicECKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_PublicECKeyAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) PublicECKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicECKeyAttributes} The decoded data structure.
 */
export function _decode_PublicECKeyAttributes(el: _Element) {
    if (!_cached_decoder_for_PublicECKeyAttributes) {
        _cached_decoder_for_PublicECKeyAttributes = function (
            el: _Element
        ): PublicECKeyAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let value!: ObjectValue<ECPublicKeyChoice>;
            let keyInfo: OPTIONAL<KeyInfo<Parameters, PublicKeyOperations>>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _get_decoder_for_ObjectValue<ECPublicKeyChoice>(
                        _decode_ECPublicKeyChoice
                    )(_el);
                },
                keyInfo: (_el: _Element): void => {
                    keyInfo = _get_decoder_for_KeyInfo<
                        Parameters,
                        PublicKeyOperations
                    >(
                        _decode_Parameters,
                        _decode_PublicKeyOperations
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PublicECKeyAttributes,
                _extension_additions_list_spec_for_PublicECKeyAttributes,
                _root_component_type_list_2_spec_for_PublicECKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PublicECKeyAttributes /* SEQUENCE_CONSTRUCTOR_CALL */(
                value,
                keyInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PublicECKeyAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PublicECKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicECKeyAttributes */
let _cached_encoder_for_PublicECKeyAttributes: $.ASN1Encoder<PublicECKeyAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicECKeyAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_PublicECKeyAttributes */
/**
 * @summary Encodes a(n) PublicECKeyAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicECKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_PublicECKeyAttributes(
    value: PublicECKeyAttributes,
    elGetter: $.ASN1Encoder<PublicECKeyAttributes>
) {
    if (!_cached_encoder_for_PublicECKeyAttributes) {
        _cached_encoder_for_PublicECKeyAttributes = function (
            value: PublicECKeyAttributes,
            elGetter: $.ASN1Encoder<PublicECKeyAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<ECPublicKeyChoice>(
                                _encode_ECPublicKeyChoice
                            )(value.value, $.BER),
                            /* IF_ABSENT  */ value.keyInfo === undefined
                                ? undefined
                                : _get_encoder_for_KeyInfo<
                                      Parameters,
                                      PublicKeyOperations
                                  >(
                                      _encode_Parameters,
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
    return _cached_encoder_for_PublicECKeyAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PublicECKeyAttributes */

/* eslint-enable */
