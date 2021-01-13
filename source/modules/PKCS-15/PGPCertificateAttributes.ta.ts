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

/* START_OF_SYMBOL_DEFINITION PGPCertificateAttributes */
/**
 * @summary PGPCertificateAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PGPCertificateAttributes ::= SEQUENCE {
 *     value ObjectValue { PKCS15-OPAQUE.&Type },
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class PGPCertificateAttributes {
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
     * @summary Restructures an object into a PGPCertificateAttributes
     * @description
     *
     * This takes an `object` and converts it to a `PGPCertificateAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PGPCertificateAttributes`.
     * @returns {PGPCertificateAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof PGPCertificateAttributes]: PGPCertificateAttributes[_K];
        }
    ): PGPCertificateAttributes {
        return new PGPCertificateAttributes(
            _o.value,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PGPCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PGPCertificateAttributes */
/**
 * @summary The Leading Root Component Types of PGPCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PGPCertificateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PGPCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PGPCertificateAttributes */
/**
 * @summary The Trailing Root Component Types of PGPCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PGPCertificateAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PGPCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PGPCertificateAttributes */
/**
 * @summary The Extension Addition Component Types of PGPCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PGPCertificateAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PGPCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PGPCertificateAttributes */
let _cached_decoder_for_PGPCertificateAttributes: $.ASN1Decoder<PGPCertificateAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PGPCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_PGPCertificateAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) PGPCertificateAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PGPCertificateAttributes} The decoded data structure.
 */
export function _decode_PGPCertificateAttributes(el: _Element) {
    if (!_cached_decoder_for_PGPCertificateAttributes) {
        _cached_decoder_for_PGPCertificateAttributes = function (
            el: _Element
        ): PGPCertificateAttributes {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "PGPCertificateAttributes contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "value";
            let value!: ObjectValue<_Element>;
            value = _get_decoder_for_ObjectValue<_Element>($._decodeAny)(
                sequence[0]
            );
            return new PGPCertificateAttributes(value, sequence.slice(1));
        };
    }
    return _cached_decoder_for_PGPCertificateAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PGPCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PGPCertificateAttributes */
let _cached_encoder_for_PGPCertificateAttributes: $.ASN1Encoder<PGPCertificateAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PGPCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_PGPCertificateAttributes */
/**
 * @summary Encodes a(n) PGPCertificateAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PGPCertificateAttributes, encoded as an ASN.1 Element.
 */
export function _encode_PGPCertificateAttributes(
    value: PGPCertificateAttributes,
    elGetter: $.ASN1Encoder<PGPCertificateAttributes>
) {
    if (!_cached_encoder_for_PGPCertificateAttributes) {
        _cached_encoder_for_PGPCertificateAttributes = function (
            value: PGPCertificateAttributes,
            elGetter: $.ASN1Encoder<PGPCertificateAttributes>
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
    return _cached_encoder_for_PGPCertificateAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PGPCertificateAttributes */

/* eslint-enable */
