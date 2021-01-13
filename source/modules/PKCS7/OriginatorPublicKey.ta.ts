/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION OriginatorPublicKey */
/**
 * @summary OriginatorPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorPublicKey ::= SEQUENCE {
 *     algorithm  AlgorithmIdentifier,
 *     publicKey  BIT STRING
 * }
 * ```
 *
 * @class
 */
export class OriginatorPublicKey {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: AlgorithmIdentifier,
        /**
         * @summary `publicKey`.
         * @public
         * @readonly
         */
        readonly publicKey: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a OriginatorPublicKey
     * @description
     *
     * This takes an `object` and converts it to a `OriginatorPublicKey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginatorPublicKey`.
     * @returns {OriginatorPublicKey}
     */
    public static _from_object(
        _o: { [_K in keyof OriginatorPublicKey]: OriginatorPublicKey[_K] }
    ): OriginatorPublicKey {
        return new OriginatorPublicKey(_o.algorithm, _o.publicKey);
    }
}
/* END_OF_SYMBOL_DEFINITION OriginatorPublicKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OriginatorPublicKey */
/**
 * @summary The Leading Root Component Types of OriginatorPublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OriginatorPublicKey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "publicKey",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OriginatorPublicKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OriginatorPublicKey */
/**
 * @summary The Trailing Root Component Types of OriginatorPublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OriginatorPublicKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OriginatorPublicKey */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OriginatorPublicKey */
/**
 * @summary The Extension Addition Component Types of OriginatorPublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OriginatorPublicKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OriginatorPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorPublicKey */
let _cached_decoder_for_OriginatorPublicKey: $.ASN1Decoder<OriginatorPublicKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorPublicKey */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorPublicKey */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorPublicKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorPublicKey} The decoded data structure.
 */
export function _decode_OriginatorPublicKey(el: _Element) {
    if (!_cached_decoder_for_OriginatorPublicKey) {
        _cached_decoder_for_OriginatorPublicKey = function (
            el: _Element
        ): OriginatorPublicKey {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OriginatorPublicKey contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithm";
            sequence[1].name = "publicKey";
            let algorithm!: AlgorithmIdentifier;
            let publicKey!: BIT_STRING;
            algorithm = _decode_AlgorithmIdentifier(sequence[0]);
            publicKey = $._decodeBitString(sequence[1]);
            return new OriginatorPublicKey(algorithm, publicKey);
        };
    }
    return _cached_decoder_for_OriginatorPublicKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorPublicKey */
let _cached_encoder_for_OriginatorPublicKey: $.ASN1Encoder<OriginatorPublicKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorPublicKey */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorPublicKey */
/**
 * @summary Encodes a(n) OriginatorPublicKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorPublicKey, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorPublicKey(
    value: OriginatorPublicKey,
    elGetter: $.ASN1Encoder<OriginatorPublicKey>
) {
    if (!_cached_encoder_for_OriginatorPublicKey) {
        _cached_encoder_for_OriginatorPublicKey = function (
            value: OriginatorPublicKey,
            elGetter: $.ASN1Encoder<OriginatorPublicKey>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.publicKey,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OriginatorPublicKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorPublicKey */

/* eslint-enable */
