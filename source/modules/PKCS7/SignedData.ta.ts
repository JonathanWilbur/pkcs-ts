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
import {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "../PKCS7/ContentInfo.ta";
import {
    DigestAlgorithmIdentifiers,
    _decode_DigestAlgorithmIdentifiers,
    _encode_DigestAlgorithmIdentifiers,
} from "../PKCS7/DigestAlgorithmIdentifiers.ta";
import {
    SignerInfos,
    _decode_SignerInfos,
    _encode_SignerInfos,
} from "../PKCS7/SignerInfos.ta";
import { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta";
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
export {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "../PKCS7/ContentInfo.ta";
export {
    DigestAlgorithmIdentifiers,
    _decode_DigestAlgorithmIdentifiers,
    _encode_DigestAlgorithmIdentifiers,
} from "../PKCS7/DigestAlgorithmIdentifiers.ta";
export {
    SignerInfos,
    _decode_SignerInfos,
    _encode_SignerInfos,
} from "../PKCS7/SignerInfos.ta";
export { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta";

/* START_OF_SYMBOL_DEFINITION SignedData */
/**
 * @summary SignedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedData ::= SEQUENCE {
 *     version           Version,
 *     digestAlgorithms  DigestAlgorithmIdentifiers,
 *     contentInfo       ContentInfo,
 *     certificates      [0]  CertificateSet OPTIONAL,
 *     crls              [1]  CertificateRevocationLists OPTIONAL,
 *     signerInfos       SignerInfos
 * }
 * ```
 *
 * @class
 */
export class SignedData {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary `digestAlgorithms`.
         * @public
         * @readonly
         */
        readonly digestAlgorithms: DigestAlgorithmIdentifiers,
        /**
         * @summary `contentInfo`.
         * @public
         * @readonly
         */
        readonly contentInfo: ContentInfo,
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
        readonly crls: OPTIONAL<CertificateRevocationLists>,
        /**
         * @summary `signerInfos`.
         * @public
         * @readonly
         */
        readonly signerInfos: SignerInfos
    ) {}

    /**
     * @summary Restructures an object into a SignedData
     * @description
     *
     * This takes an `object` and converts it to a `SignedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignedData`.
     * @returns {SignedData}
     */
    public static _from_object(
        _o: { [_K in keyof SignedData]: SignedData[_K] }
    ): SignedData {
        return new SignedData(
            _o.version,
            _o.digestAlgorithms,
            _o.contentInfo,
            _o.certificates,
            _o.crls,
            _o.signerInfos
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SignedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignedData */
/**
 * @summary The Leading Root Component Types of SignedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "digestAlgorithms",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contentInfo",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
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
    new $.ComponentSpec(
        "signerInfos",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignedData */
/**
 * @summary The Trailing Root Component Types of SignedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignedData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignedData */
/**
 * @summary The Extension Addition Component Types of SignedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedData */
let _cached_decoder_for_SignedData: $.ASN1Decoder<SignedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedData */

/* START_OF_SYMBOL_DEFINITION _decode_SignedData */
/**
 * @summary Decodes an ASN.1 element into a(n) SignedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedData} The decoded data structure.
 */
export function _decode_SignedData(el: _Element) {
    if (!_cached_decoder_for_SignedData) {
        _cached_decoder_for_SignedData = function (el: _Element): SignedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let digestAlgorithms!: DigestAlgorithmIdentifiers;
            let contentInfo!: ContentInfo;
            let certificates: OPTIONAL<CertificateSet>;
            let crls: OPTIONAL<CertificateRevocationLists>;
            let signerInfos!: SignerInfos;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                digestAlgorithms: (_el: _Element): void => {
                    digestAlgorithms = _decode_DigestAlgorithmIdentifiers(_el);
                },
                contentInfo: (_el: _Element): void => {
                    contentInfo = _decode_ContentInfo(_el);
                },
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
                signerInfos: (_el: _Element): void => {
                    signerInfos = _decode_SignerInfos(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignedData,
                _extension_additions_list_spec_for_SignedData,
                _root_component_type_list_2_spec_for_SignedData,
                undefined
            );
            return new SignedData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                digestAlgorithms,
                contentInfo,
                certificates,
                crls,
                signerInfos
            );
        };
    }
    return _cached_decoder_for_SignedData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedData */
let _cached_encoder_for_SignedData: $.ASN1Encoder<SignedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedData */

/* START_OF_SYMBOL_DEFINITION _encode_SignedData */
/**
 * @summary Encodes a(n) SignedData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedData, encoded as an ASN.1 Element.
 */
export function _encode_SignedData(
    value: SignedData,
    elGetter: $.ASN1Encoder<SignedData>
) {
    if (!_cached_encoder_for_SignedData) {
        _cached_encoder_for_SignedData = function (
            value: SignedData,
            elGetter: $.ASN1Encoder<SignedData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(value.version, $.BER),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifiers(
                            value.digestAlgorithms,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ContentInfo(
                            value.contentInfo,
                            $.BER
                        ),
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
                        /* REQUIRED   */ _encode_SignerInfos(
                            value.signerInfos,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SignedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignedData */

/* eslint-enable */
