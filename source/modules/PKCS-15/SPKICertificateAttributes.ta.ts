/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta";
export {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta";
export { PKCS15_OPAQUE } from "../PKCS-15/PKCS15-OPAQUE.oca";

/* START_OF_SYMBOL_DEFINITION SPKICertificateAttributes */
/**
 * @summary SPKICertificateAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKICertificateAttributes ::= SEQUENCE {
 *     value ObjectValue { PKCS15-OPAQUE.&Type },
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class SPKICertificateAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<_Element>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SPKICertificateAttributes
     * @description
     *
     * This takes an `object` and converts it to a `SPKICertificateAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKICertificateAttributes`.
     * @returns {SPKICertificateAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof SPKICertificateAttributes]: SPKICertificateAttributes[_K];
        }
    ): SPKICertificateAttributes {
        return new SPKICertificateAttributes(
            _o.value,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SPKICertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SPKICertificateAttributes */
/**
 * @summary The Leading Root Component Types of SPKICertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKICertificateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SPKICertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SPKICertificateAttributes */
/**
 * @summary The Trailing Root Component Types of SPKICertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKICertificateAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SPKICertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SPKICertificateAttributes */
/**
 * @summary The Extension Addition Component Types of SPKICertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKICertificateAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SPKICertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SPKICertificateAttributes */
let _cached_decoder_for_SPKICertificateAttributes: $.ASN1Decoder<SPKICertificateAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SPKICertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_SPKICertificateAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) SPKICertificateAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKICertificateAttributes} The decoded data structure.
 */
export function _decode_SPKICertificateAttributes(el: _Element) {
    if (!_cached_decoder_for_SPKICertificateAttributes) {
        _cached_decoder_for_SPKICertificateAttributes = function (
            el: _Element
        ): SPKICertificateAttributes {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "SPKICertificateAttributes contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "value";
            let value!: ObjectValue<_Element>;
            value = _get_decoder_for_ObjectValue<_Element>($._decodeAny)(
                sequence[0]
            );
            return new SPKICertificateAttributes(value, sequence.slice(1));
        };
    }
    return _cached_decoder_for_SPKICertificateAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SPKICertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SPKICertificateAttributes */
let _cached_encoder_for_SPKICertificateAttributes: $.ASN1Encoder<SPKICertificateAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SPKICertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_SPKICertificateAttributes */
/**
 * @summary Encodes a(n) SPKICertificateAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKICertificateAttributes, encoded as an ASN.1 Element.
 */
export function _encode_SPKICertificateAttributes(
    value: SPKICertificateAttributes,
    elGetter: $.ASN1Encoder<SPKICertificateAttributes>
) {
    if (!_cached_encoder_for_SPKICertificateAttributes) {
        _cached_encoder_for_SPKICertificateAttributes = function (
            value: SPKICertificateAttributes,
            elGetter: $.ASN1Encoder<SPKICertificateAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<_Element>(
                                $._encodeAny
                            )(value.value, $.BER),
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
    return _cached_encoder_for_SPKICertificateAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SPKICertificateAttributes */

/* eslint-enable */
