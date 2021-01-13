/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DigestAlgorithm,
    _decode_DigestAlgorithm,
    _encode_DigestAlgorithm,
} from "../PKCS-1/DigestAlgorithm.ta";
export {
    DigestAlgorithm,
    _decode_DigestAlgorithm,
    _encode_DigestAlgorithm,
} from "../PKCS-1/DigestAlgorithm.ta";

/* START_OF_SYMBOL_DEFINITION DigestInfo */
/**
 * @summary DigestInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestInfo ::= SEQUENCE {
 *     digestAlgorithm DigestAlgorithm,
 *     digest OCTET STRING
 * }
 * ```
 *
 * @class
 */
export class DigestInfo {
    constructor(
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: DigestAlgorithm,
        /**
         * @summary `digest`.
         * @public
         * @readonly
         */
        readonly digest: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a DigestInfo
     * @description
     *
     * This takes an `object` and converts it to a `DigestInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DigestInfo`.
     * @returns {DigestInfo}
     */
    public static _from_object(
        _o: { [_K in keyof DigestInfo]: DigestInfo[_K] }
    ): DigestInfo {
        return new DigestInfo(_o.digestAlgorithm, _o.digest);
    }
}
/* END_OF_SYMBOL_DEFINITION DigestInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DigestInfo */
/**
 * @summary The Leading Root Component Types of DigestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DigestInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "digestAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "digest",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DigestInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DigestInfo */
/**
 * @summary The Trailing Root Component Types of DigestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DigestInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DigestInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DigestInfo */
/**
 * @summary The Extension Addition Component Types of DigestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DigestInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DigestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DigestInfo */
let _cached_decoder_for_DigestInfo: $.ASN1Decoder<DigestInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DigestInfo */

/* START_OF_SYMBOL_DEFINITION _decode_DigestInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) DigestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DigestInfo} The decoded data structure.
 */
export function _decode_DigestInfo(el: _Element) {
    if (!_cached_decoder_for_DigestInfo) {
        _cached_decoder_for_DigestInfo = function (el: _Element): DigestInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "DigestInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "digestAlgorithm";
            sequence[1].name = "digest";
            let digestAlgorithm!: DigestAlgorithm;
            let digest!: OCTET_STRING;
            digestAlgorithm = _decode_DigestAlgorithm(sequence[0]);
            digest = $._decodeOctetString(sequence[1]);
            return new DigestInfo(digestAlgorithm, digest);
        };
    }
    return _cached_decoder_for_DigestInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DigestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DigestInfo */
let _cached_encoder_for_DigestInfo: $.ASN1Encoder<DigestInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DigestInfo */

/* START_OF_SYMBOL_DEFINITION _encode_DigestInfo */
/**
 * @summary Encodes a(n) DigestInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestInfo, encoded as an ASN.1 Element.
 */
export function _encode_DigestInfo(
    value: DigestInfo,
    elGetter: $.ASN1Encoder<DigestInfo>
) {
    if (!_cached_encoder_for_DigestInfo) {
        _cached_encoder_for_DigestInfo = function (
            value: DigestInfo,
            elGetter: $.ASN1Encoder<DigestInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DigestAlgorithm(
                            value.digestAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.digest,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DigestInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DigestInfo */

/* eslint-enable */
