/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PBEParameter */
/**
 * @summary PBEParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBEParameter ::= SEQUENCE {
 *     salt OCTET STRING (SIZE(8)),
 *     iterationCount INTEGER
 * }
 * ```
 *
 * @class
 */
export class PBEParameter {
    constructor(
        /**
         * @summary `salt`.
         * @public
         * @readonly
         */
        readonly salt: OCTET_STRING,
        /**
         * @summary `iterationCount`.
         * @public
         * @readonly
         */
        readonly iterationCount: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a PBEParameter
     * @description
     *
     * This takes an `object` and converts it to a `PBEParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PBEParameter`.
     * @returns {PBEParameter}
     */
    public static _from_object(
        _o: { [_K in keyof PBEParameter]: PBEParameter[_K] }
    ): PBEParameter {
        return new PBEParameter(_o.salt, _o.iterationCount);
    }
}
/* END_OF_SYMBOL_DEFINITION PBEParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PBEParameter */
/**
 * @summary The Leading Root Component Types of PBEParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PBEParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "salt",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "iterationCount",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PBEParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PBEParameter */
/**
 * @summary The Trailing Root Component Types of PBEParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PBEParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PBEParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PBEParameter */
/**
 * @summary The Extension Addition Component Types of PBEParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PBEParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PBEParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PBEParameter */
let _cached_decoder_for_PBEParameter: $.ASN1Decoder<PBEParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PBEParameter */

/* START_OF_SYMBOL_DEFINITION _decode_PBEParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) PBEParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PBEParameter} The decoded data structure.
 */
export function _decode_PBEParameter(el: _Element) {
    if (!_cached_decoder_for_PBEParameter) {
        _cached_decoder_for_PBEParameter = function (
            el: _Element
        ): PBEParameter {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PBEParameter contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "salt";
            sequence[1].name = "iterationCount";
            let salt!: OCTET_STRING;
            let iterationCount!: INTEGER;
            salt = $._decodeOctetString(sequence[0]);
            iterationCount = $._decodeInteger(sequence[1]);
            return new PBEParameter(salt, iterationCount);
        };
    }
    return _cached_decoder_for_PBEParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PBEParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PBEParameter */
let _cached_encoder_for_PBEParameter: $.ASN1Encoder<PBEParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PBEParameter */

/* START_OF_SYMBOL_DEFINITION _encode_PBEParameter */
/**
 * @summary Encodes a(n) PBEParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PBEParameter, encoded as an ASN.1 Element.
 */
export function _encode_PBEParameter(
    value: PBEParameter,
    elGetter: $.ASN1Encoder<PBEParameter>
) {
    if (!_cached_encoder_for_PBEParameter) {
        _cached_encoder_for_PBEParameter = function (
            value: PBEParameter,
            elGetter: $.ASN1Encoder<PBEParameter>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeOctetString(
                            value.salt,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeInteger(
                            value.iterationCount,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PBEParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PBEParameter */

/* eslint-enable */
