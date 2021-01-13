/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION OidDO */
/**
 * @summary OidDO
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OidDO ::= SEQUENCE {
 *     id OBJECT IDENTIFIER,
 *     value ObjectValue {PKCS15-OPAQUE.&Type}
 * }
 * ```
 *
 * @class
 */
export class OidDO {
    constructor(
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: OBJECT_IDENTIFIER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<_Element>
    ) {}

    /**
     * @summary Restructures an object into a OidDO
     * @description
     *
     * This takes an `object` and converts it to a `OidDO`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OidDO`.
     * @returns {OidDO}
     */
    public static _from_object(_o: { [_K in keyof OidDO]: OidDO[_K] }): OidDO {
        return new OidDO(_o.id, _o.value);
    }
}
/* END_OF_SYMBOL_DEFINITION OidDO */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OidDO */
/**
 * @summary The Leading Root Component Types of OidDO
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OidDO: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "id",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OidDO */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OidDO */
/**
 * @summary The Trailing Root Component Types of OidDO
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OidDO: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OidDO */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OidDO */
/**
 * @summary The Extension Addition Component Types of OidDO
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OidDO: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OidDO */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OidDO */
let _cached_decoder_for_OidDO: $.ASN1Decoder<OidDO> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OidDO */

/* START_OF_SYMBOL_DEFINITION _decode_OidDO */
/**
 * @summary Decodes an ASN.1 element into a(n) OidDO
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OidDO} The decoded data structure.
 */
export function _decode_OidDO(el: _Element) {
    if (!_cached_decoder_for_OidDO) {
        _cached_decoder_for_OidDO = function (el: _Element): OidDO {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OidDO contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "id";
            sequence[1].name = "value";
            let id!: OBJECT_IDENTIFIER;
            let value!: ObjectValue<_Element>;
            id = $._decodeObjectIdentifier(sequence[0]);
            value = _get_decoder_for_ObjectValue<_Element>($._decodeAny)(
                sequence[1]
            );
            return new OidDO(id, value);
        };
    }
    return _cached_decoder_for_OidDO(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OidDO */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OidDO */
let _cached_encoder_for_OidDO: $.ASN1Encoder<OidDO> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OidDO */

/* START_OF_SYMBOL_DEFINITION _encode_OidDO */
/**
 * @summary Encodes a(n) OidDO into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OidDO, encoded as an ASN.1 Element.
 */
export function _encode_OidDO(value: OidDO, elGetter: $.ASN1Encoder<OidDO>) {
    if (!_cached_encoder_for_OidDO) {
        _cached_encoder_for_OidDO = function (
            value: OidDO,
            elGetter: $.ASN1Encoder<OidDO>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.id,
                            $.BER
                        ),
                        /* REQUIRED   */ _get_encoder_for_ObjectValue<_Element>(
                            $._encodeAny
                        )(value.value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OidDO(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OidDO */

/* eslint-enable */
