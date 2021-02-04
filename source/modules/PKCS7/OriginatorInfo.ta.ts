/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateRevocationLists,
    _decode_CertificateRevocationLists,
    _encode_CertificateRevocationLists,
} from "../PKCS7/CertificateRevocationLists.ta";
import {
    CertificateSet,
    _decode_CertificateSet,
    _encode_CertificateSet,
} from "../PKCS7/CertificateSet.ta";
export {
    CertificateRevocationLists,
    _decode_CertificateRevocationLists,
    _encode_CertificateRevocationLists,
} from "../PKCS7/CertificateRevocationLists.ta";
export {
    CertificateSet,
    _decode_CertificateSet,
    _encode_CertificateSet,
} from "../PKCS7/CertificateSet.ta";

/* START_OF_SYMBOL_DEFINITION OriginatorInfo */
/**
 * @summary OriginatorInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorInfo ::= SEQUENCE {
 *     certificates  [0]  CertificateSet OPTIONAL,
 *     crls          [1]  CertificateRevocationLists OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class OriginatorInfo {
    constructor(
        /**
         * @summary `certificates`.
         * @public
         * @readonly
         */
        readonly certificates: OPTIONAL<CertificateSet>,
        /**
         * @summary `crls`.
         * @public
         * @readonly
         */
        readonly crls: OPTIONAL<CertificateRevocationLists>
    ) {}

    /**
     * @summary Restructures an object into a OriginatorInfo
     * @description
     *
     * This takes an `object` and converts it to a `OriginatorInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginatorInfo`.
     * @returns {OriginatorInfo}
     */
    public static _from_object(
        _o: { [_K in keyof OriginatorInfo]: OriginatorInfo[_K] }
    ): OriginatorInfo {
        return new OriginatorInfo(_o.certificates, _o.crls);
    }
}
/* END_OF_SYMBOL_DEFINITION OriginatorInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OriginatorInfo */
/**
 * @summary The Leading Root Component Types of OriginatorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OriginatorInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certificates",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "crls",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OriginatorInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OriginatorInfo */
/**
 * @summary The Trailing Root Component Types of OriginatorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OriginatorInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OriginatorInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OriginatorInfo */
/**
 * @summary The Extension Addition Component Types of OriginatorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OriginatorInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OriginatorInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorInfo */
let _cached_decoder_for_OriginatorInfo: $.ASN1Decoder<OriginatorInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorInfo */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorInfo} The decoded data structure.
 */
export function _decode_OriginatorInfo(el: _Element) {
    if (!_cached_decoder_for_OriginatorInfo) {
        _cached_decoder_for_OriginatorInfo = function (
            el: _Element
        ): OriginatorInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certificates: OPTIONAL<CertificateSet>;
            let crls: OPTIONAL<CertificateRevocationLists>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                certificates: (_el: _Element): void => {
                    certificates = $._decode_implicit<CertificateSet>(
                        () => _decode_CertificateSet
                    )(_el);
                },
                crls: (_el: _Element): void => {
                    crls = $._decode_implicit<CertificateRevocationLists>(
                        () => _decode_CertificateRevocationLists
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OriginatorInfo,
                _extension_additions_list_spec_for_OriginatorInfo,
                _root_component_type_list_2_spec_for_OriginatorInfo,
                undefined
            );
            return new OriginatorInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ certificates,
                crls
            );
        };
    }
    return _cached_decoder_for_OriginatorInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorInfo */
let _cached_encoder_for_OriginatorInfo: $.ASN1Encoder<OriginatorInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorInfo */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorInfo */
/**
 * @summary Encodes a(n) OriginatorInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorInfo, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorInfo(
    value: OriginatorInfo,
    elGetter: $.ASN1Encoder<OriginatorInfo>
) {
    if (!_cached_encoder_for_OriginatorInfo) {
        _cached_encoder_for_OriginatorInfo = function (
            value: OriginatorInfo,
            elGetter: $.ASN1Encoder<OriginatorInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.certificates === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_CertificateSet,
                                  $.BER
                              )(value.certificates, $.BER),
                        /* IF_ABSENT  */ value.crls === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_CertificateRevocationLists,
                                  $.BER
                              )(value.crls, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OriginatorInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorInfo */

/* eslint-enable */
