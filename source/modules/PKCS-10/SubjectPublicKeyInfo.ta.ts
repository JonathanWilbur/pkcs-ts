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
} from "../PKCS-10/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKCS-10/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION SubjectPublicKeyInfo */
/**
 * @summary SubjectPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectPublicKeyInfo {ALGORITHM: IOSet} ::= SEQUENCE {
 *         algorithm        AlgorithmIdentifier {{IOSet}},
 *         subjectPublicKey BIT STRING
 * }
 * ```
 *
 * @class
 */
export class SubjectPublicKeyInfo {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: AlgorithmIdentifier,
        /**
         * @summary `subjectPublicKey`.
         * @public
         * @readonly
         */
        readonly subjectPublicKey: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a SubjectPublicKeyInfo
     * @description
     *
     * This takes an `object` and converts it to a `SubjectPublicKeyInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubjectPublicKeyInfo`.
     * @returns {SubjectPublicKeyInfo}
     */
    public static _from_object(
        _o: { [_K in keyof SubjectPublicKeyInfo]: SubjectPublicKeyInfo[_K] }
    ): SubjectPublicKeyInfo {
        return new SubjectPublicKeyInfo(_o.algorithm, _o.subjectPublicKey);
    }
}
/* END_OF_SYMBOL_DEFINITION SubjectPublicKeyInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubjectPublicKeyInfo */
/**
 * @summary The Leading Root Component Types of SubjectPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubjectPublicKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subjectPublicKey",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubjectPublicKeyInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubjectPublicKeyInfo */
/**
 * @summary The Trailing Root Component Types of SubjectPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubjectPublicKeyInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubjectPublicKeyInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubjectPublicKeyInfo */
/**
 * @summary The Extension Addition Component Types of SubjectPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubjectPublicKeyInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubjectPublicKeyInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectPublicKeyInfo */
let _cached_decoder_for_SubjectPublicKeyInfo: $.ASN1Decoder<SubjectPublicKeyInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectPublicKeyInfo */

/* START_OF_SYMBOL_DEFINITION _decode_SubjectPublicKeyInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) SubjectPublicKeyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectPublicKeyInfo} The decoded data structure.
 */
export function _decode_SubjectPublicKeyInfo(el: _Element) {
    if (!_cached_decoder_for_SubjectPublicKeyInfo) {
        _cached_decoder_for_SubjectPublicKeyInfo = function (
            el: _Element
        ): SubjectPublicKeyInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SubjectPublicKeyInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithm";
            sequence[1].name = "subjectPublicKey";
            let algorithm!: AlgorithmIdentifier;
            let subjectPublicKey!: BIT_STRING;
            algorithm = _decode_AlgorithmIdentifier(sequence[0]);
            subjectPublicKey = $._decodeBitString(sequence[1]);
            return new SubjectPublicKeyInfo(algorithm, subjectPublicKey);
        };
    }
    return _cached_decoder_for_SubjectPublicKeyInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubjectPublicKeyInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectPublicKeyInfo */
let _cached_encoder_for_SubjectPublicKeyInfo: $.ASN1Encoder<SubjectPublicKeyInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectPublicKeyInfo */

/* START_OF_SYMBOL_DEFINITION _encode_SubjectPublicKeyInfo */
/**
 * @summary Encodes a(n) SubjectPublicKeyInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectPublicKeyInfo, encoded as an ASN.1 Element.
 */
export function _encode_SubjectPublicKeyInfo(
    value: SubjectPublicKeyInfo,
    elGetter: $.ASN1Encoder<SubjectPublicKeyInfo>
) {
    if (!_cached_encoder_for_SubjectPublicKeyInfo) {
        _cached_encoder_for_SubjectPublicKeyInfo = function (
            value: SubjectPublicKeyInfo,
            elGetter: $.ASN1Encoder<SubjectPublicKeyInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.subjectPublicKey,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SubjectPublicKeyInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubjectPublicKeyInfo */

/* eslint-enable */
