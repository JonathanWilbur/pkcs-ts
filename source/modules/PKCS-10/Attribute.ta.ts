/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Attribute */
/**
 * @summary Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute { ATTRIBUTE:IOSet } ::= SEQUENCE {
 *         type   ATTRIBUTE.&id({IOSet}),
 *         values SET SIZE(1..MAX) OF ATTRIBUTE.&Type({IOSet}{@type})
 * }
 * ```
 *
 * @class
 */
export class Attribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `values`.
         * @public
         * @readonly
         */
        readonly values: _Element[]
    ) {}

    /**
     * @summary Restructures an object into a Attribute
     * @description
     *
     * This takes an `object` and converts it to a `Attribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Attribute`.
     * @returns {Attribute}
     */
    public static _from_object(
        _o: { [_K in keyof Attribute]: Attribute[_K] }
    ): Attribute {
        return new Attribute(_o.type_, _o.values);
    }
}
/* END_OF_SYMBOL_DEFINITION Attribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Attribute */
/**
 * @summary The Leading Root Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Attribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "values",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Attribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Attribute */
/**
 * @summary The Trailing Root Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Attribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Attribute */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Attribute */
/**
 * @summary The Extension Addition Component Types of Attribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Attribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute */
let _cached_decoder_for_Attribute: $.ASN1Decoder<Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute} The decoded data structure.
 */
export function _decode_Attribute(el: _Element) {
    if (!_cached_decoder_for_Attribute) {
        _cached_decoder_for_Attribute = function (el: _Element): Attribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "Attribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "values";
            let type_!: OBJECT_IDENTIFIER;
            let values!: _Element[];
            type_ = $._decodeObjectIdentifier(sequence[0]);
            values = $._decodeSetOf<_Element>(() => $._decodeAny)(sequence[1]);
            return new Attribute(type_, values);
        };
    }
    return _cached_decoder_for_Attribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute */
let _cached_encoder_for_Attribute: $.ASN1Encoder<Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute */
/**
 * @summary Encodes a(n) Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Attribute(
    value: Attribute,
    elGetter: $.ASN1Encoder<Attribute>
) {
    if (!_cached_encoder_for_Attribute) {
        _cached_encoder_for_Attribute = function (
            value: Attribute,
            elGetter: $.ASN1Encoder<Attribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.type_,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<_Element>(
                            () => $._encodeAny,
                            $.BER
                        )(value.values, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Attribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute */

/* eslint-enable */
