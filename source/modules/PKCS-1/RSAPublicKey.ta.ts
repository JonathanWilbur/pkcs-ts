/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION RSAPublicKey */
/**
 * @summary RSAPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RSAPublicKey ::= SEQUENCE {
 *     modulus           INTEGER,  -- n
 *     publicExponent    INTEGER   -- e
 * }
 * ```
 *
 * @class
 */
export class RSAPublicKey {
    constructor(
        /**
         * @summary `modulus`.
         * @public
         * @readonly
         */
        readonly modulus: INTEGER,
        /**
         * @summary `publicExponent`.
         * @public
         * @readonly
         */
        readonly publicExponent: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a RSAPublicKey
     * @description
     *
     * This takes an `object` and converts it to a `RSAPublicKey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RSAPublicKey`.
     * @returns {RSAPublicKey}
     */
    public static _from_object(
        _o: { [_K in keyof RSAPublicKey]: RSAPublicKey[_K] }
    ): RSAPublicKey {
        return new RSAPublicKey(_o.modulus, _o.publicExponent);
    }
}
/* END_OF_SYMBOL_DEFINITION RSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RSAPublicKey */
/**
 * @summary The Leading Root Component Types of RSAPublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RSAPublicKey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "modulus",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "publicExponent",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RSAPublicKey */
/**
 * @summary The Trailing Root Component Types of RSAPublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RSAPublicKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RSAPublicKey */
/**
 * @summary The Extension Addition Component Types of RSAPublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RSAPublicKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RSAPublicKey */
let _cached_decoder_for_RSAPublicKey: $.ASN1Decoder<RSAPublicKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _decode_RSAPublicKey */
/**
 * @summary Decodes an ASN.1 element into a(n) RSAPublicKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RSAPublicKey} The decoded data structure.
 */
export function _decode_RSAPublicKey(el: _Element) {
    if (!_cached_decoder_for_RSAPublicKey) {
        _cached_decoder_for_RSAPublicKey = function (
            el: _Element
        ): RSAPublicKey {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "RSAPublicKey contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "modulus";
            sequence[1].name = "publicExponent";
            let modulus!: INTEGER;
            let publicExponent!: INTEGER;
            modulus = $._decodeInteger(sequence[0]);
            publicExponent = $._decodeInteger(sequence[1]);
            return new RSAPublicKey(modulus, publicExponent);
        };
    }
    return _cached_decoder_for_RSAPublicKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RSAPublicKey */
let _cached_encoder_for_RSAPublicKey: $.ASN1Encoder<RSAPublicKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _encode_RSAPublicKey */
/**
 * @summary Encodes a(n) RSAPublicKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RSAPublicKey, encoded as an ASN.1 Element.
 */
export function _encode_RSAPublicKey(
    value: RSAPublicKey,
    elGetter: $.ASN1Encoder<RSAPublicKey>
) {
    if (!_cached_encoder_for_RSAPublicKey) {
        _cached_encoder_for_RSAPublicKey = function (
            value: RSAPublicKey,
            elGetter: $.ASN1Encoder<RSAPublicKey>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.modulus, $.BER),
                        /* REQUIRED   */ $._encodeInteger(
                            value.publicExponent,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RSAPublicKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RSAPublicKey */

/* eslint-enable */
