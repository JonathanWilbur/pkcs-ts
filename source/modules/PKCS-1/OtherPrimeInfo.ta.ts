/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION OtherPrimeInfo */
/**
 * @summary OtherPrimeInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherPrimeInfo ::= SEQUENCE {
 *     prime             INTEGER,  -- ri
 *     exponent          INTEGER,  -- di
 *     coefficient       INTEGER   -- ti
 * }
 * ```
 *
 * @class
 */
export class OtherPrimeInfo {
    constructor(
        /**
         * @summary `prime`.
         * @public
         * @readonly
         */
        readonly prime: OCTET_STRING,
        /**
         * @summary `exponent`.
         * @public
         * @readonly
         */
        readonly exponent: OCTET_STRING,
        /**
         * @summary `coefficient`.
         * @public
         * @readonly
         */
        readonly coefficient: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a OtherPrimeInfo
     * @description
     *
     * This takes an `object` and converts it to a `OtherPrimeInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherPrimeInfo`.
     * @returns {OtherPrimeInfo}
     */
    public static _from_object(
        _o: { [_K in keyof OtherPrimeInfo]: OtherPrimeInfo[_K] }
    ): OtherPrimeInfo {
        return new OtherPrimeInfo(_o.prime, _o.exponent, _o.coefficient);
    }
}
/* END_OF_SYMBOL_DEFINITION OtherPrimeInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherPrimeInfo */
/**
 * @summary The Leading Root Component Types of OtherPrimeInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OtherPrimeInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "prime",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "exponent",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "coefficient",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherPrimeInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherPrimeInfo */
/**
 * @summary The Trailing Root Component Types of OtherPrimeInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OtherPrimeInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherPrimeInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherPrimeInfo */
/**
 * @summary The Extension Addition Component Types of OtherPrimeInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OtherPrimeInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherPrimeInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherPrimeInfo */
let _cached_decoder_for_OtherPrimeInfo: $.ASN1Decoder<OtherPrimeInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherPrimeInfo */

/* START_OF_SYMBOL_DEFINITION _decode_OtherPrimeInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherPrimeInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherPrimeInfo} The decoded data structure.
 */
export function _decode_OtherPrimeInfo(el: _Element) {
    if (!_cached_decoder_for_OtherPrimeInfo) {
        _cached_decoder_for_OtherPrimeInfo = function (
            el: _Element
        ): OtherPrimeInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "OtherPrimeInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "prime";
            sequence[1].name = "exponent";
            sequence[2].name = "coefficient";
            let prime!: OCTET_STRING;
            let exponent!: OCTET_STRING;
            let coefficient!: OCTET_STRING;
            prime = $._decodeBigInt(sequence[0]);
            exponent = $._decodeBigInt(sequence[1]);
            coefficient = $._decodeBigInt(sequence[2]);
            return new OtherPrimeInfo(prime, exponent, coefficient);
        };
    }
    return _cached_decoder_for_OtherPrimeInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherPrimeInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherPrimeInfo */
let _cached_encoder_for_OtherPrimeInfo: $.ASN1Encoder<OtherPrimeInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherPrimeInfo */

/* START_OF_SYMBOL_DEFINITION _encode_OtherPrimeInfo */
/**
 * @summary Encodes a(n) OtherPrimeInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherPrimeInfo, encoded as an ASN.1 Element.
 */
export function _encode_OtherPrimeInfo(
    value: OtherPrimeInfo,
    elGetter: $.ASN1Encoder<OtherPrimeInfo>
) {
    if (!_cached_encoder_for_OtherPrimeInfo) {
        _cached_encoder_for_OtherPrimeInfo = function (
            value: OtherPrimeInfo,
            elGetter: $.ASN1Encoder<OtherPrimeInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeBigInt(value.prime, $.BER),
                        /* REQUIRED   */ $._encodeBigInt(value.exponent, $.BER),
                        /* REQUIRED   */ $._encodeBigInt(
                            value.coefficient,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OtherPrimeInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherPrimeInfo */

/* eslint-enable */
